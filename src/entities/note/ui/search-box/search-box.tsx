import { IconSearch } from '@tabler/icons-react';
import { TextField } from 'shared/ui';
import './search-box.scss';
import { useNotesActions } from 'entities/note/model';

export const SearchBox = () => {
  const { searchNotes } = useNotesActions();

  return (
    <TextField
      icon={<IconSearch size="1.25rem" />}
      placeholder="Search"
      onChange={(event) => searchNotes(event.currentTarget.value)}
    />
  );
};
