import { createContext, useContext, useMemo, ReactNode, useState } from 'react';
import { usePersistIndexedDB } from 'shared/lib/indexeddb';
import uniqid from 'uniqid';

type Note = {
  id: string;
  value: string;
  title: string;
  date: number;
};

type State = {
  notes: Note[];
  selectedNote: Note | null;
  searchedNotes: Note[] | null;
};

type Actions = {
  add: () => void;
  update: (note: Omit<Note, 'title' | 'date'>) => void;
  remove: (id: string) => void;
  select: (id: string) => void;
  searchNotes: (title: string) => void;
};

type NotesProviderProps = {
  children: ReactNode;
};

const StateContext = createContext<State>({
  notes: [],
  selectedNote: null,
  searchedNotes: null,
});
const ActionsContext = createContext<Actions>({
  add: () => {},
  update: () => {},
  remove: () => {},
  select: () => {},
  searchNotes: () => {},
});

export const NotesProvider = (props: NotesProviderProps) => {
  const { children } = props;

  const [notes, setNotes] = usePersistIndexedDB<Note[]>('notes', []);
  const [searchNotesValue, searchNotes] = useState('');
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const searchedNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchNotesValue.toLowerCase())
    );
  }, [notes, searchNotesValue]);

  const actions = useMemo(
    () => ({
      select: (id: string) =>
        setSelectedNote(notes.find((note) => note.id === id)!),
      add: () => {
        const newNote = {
          id: uniqid(),
          value: '',
          title: 'New Note',
          date: Date.now(),
        };
        setNotes([...notes, newNote]);
        setSelectedNote(newNote);
      },
      update: ({ id, value }: Omit<Note, 'title' | 'date'>) =>
        setNotes(
          notes.map((note) =>
            note.id === id
              ? { ...note, value, title: getTitle(value) || 'New note' }
              : note
          )
        ),
      remove: (id: string) => {
        if (window.confirm('Are you sure you want to delete?')) {
          setNotes(notes.filter((note) => note.id !== id));
          setSelectedNote(null);
        }
      },
    }),
    [notes]
  );

  return (
    <ActionsContext.Provider value={{ ...actions, searchNotes }}>
      <StateContext.Provider value={{ notes, selectedNote, searchedNotes }}>
        {children}
      </StateContext.Provider>
    </ActionsContext.Provider>
  );
};

export const useNotesState = () => useContext(StateContext);
export const useNotesActions = () => useContext(ActionsContext);

function getTitle(text: string) {
  const lines = text.split('\n').filter((line) => line.trim() !== '');
  const firstLine = lines[0];
  const cleanText = firstLine?.replace(/#+\s*|`|[*_]/g, '');
  return cleanText;
}
