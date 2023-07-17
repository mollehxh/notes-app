import { IconPlus, IconTrash, IconEdit } from '@tabler/icons-react';
import { useNotesState, useNotesActions } from 'entities/note/model';
import { IconButton } from 'shared/ui';
import './controls.scss';

export const Controls = () => {
  const { selectedNote } = useNotesState();
  const { add, remove } = useNotesActions();

  return (
    <div className="controls">
      <IconButton onClick={() => add()}>
        <IconPlus />
      </IconButton>
      <IconButton
        onClick={() => remove(selectedNote!.id)}
        disabled={!selectedNote}
      >
        <IconTrash />
      </IconButton>
      <IconButton disabled={!selectedNote}>
        <IconEdit />
      </IconButton>
    </div>
  );
};
