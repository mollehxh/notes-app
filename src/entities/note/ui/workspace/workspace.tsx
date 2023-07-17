import { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { useNotesState, useNotesActions } from 'entities/note/model';
import './workspace.scss';

export const Workspace = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { notes, selectedNote } = useNotesState();
  const { update } = useNotesActions();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  if (!selectedNote) return null;

  return (
    <div className="workspace">
      {selectedNote && (
        <p className="workspace__time">
          {moment(selectedNote?.date).format('MMMM Do YYYY, h:mm a')}
        </p>
      )}
      {isEditing ? (
        <textarea
          ref={textareaRef}
          className="workspace__editor"
          onBlur={() => setIsEditing(false)}
          onChange={(event) =>
            update({ id: selectedNote.id, value: event.currentTarget.value })
          }
        >
          {notes.filter((note) => note.id === selectedNote.id)[0].value}
        </textarea>
      ) : (
        <div
          className="workspace__editor"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <ReactMarkdown>
            {notes.filter((note) => note.id === selectedNote.id)[0].value}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};
