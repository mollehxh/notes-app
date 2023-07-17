import { List, ListItem } from 'shared/ui';
import { useNotesActions, useNotesState } from '../../model';
import './notes-list.scss';
import moment from 'moment';

export const NotesList = () => {
  const { notes, selectedNote, searchedNotes } = useNotesState();
  const { select } = useNotesActions();

  return (
    <List>
      {searchedNotes
        ? searchedNotes.map((note) => (
            <ListItem
              key={note.id}
              selected={Boolean(selectedNote && selectedNote.id == note.id)}
              onClick={() => select(note.id)}
            >
              {note.title}
              <br />
              {moment(selectedNote?.date).format('l')}
            </ListItem>
          ))
        : notes.map((note) => (
            <ListItem
              key={note.id}
              selected={Boolean(selectedNote && selectedNote.id == note.id)}
              onClick={() => select(note.id)}
            >
              {note.title}
              <br />
              {moment(selectedNote?.date).format('l')}
            </ListItem>
          ))}
    </List>
  );
};
