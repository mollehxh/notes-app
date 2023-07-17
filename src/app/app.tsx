import { AppShell, Header, Sidebar } from 'shared/ui';
import { IndexedDBProvider } from 'shared/lib/indexeddb';
import {
  NotesProvider,
  Controls,
  NotesList,
  SearchBox,
  Workspace,
} from 'entities/note';
import './app.scss';

export const App = () => {
  return (
    <IndexedDBProvider>
      <NotesProvider>
        <AppShell
          topSlot={
            <Header>
              <Controls />
              <SearchBox />
            </Header>
          }
          leftSlot={
            <Sidebar>
              <NotesList />
            </Sidebar>
          }
        >
          <Workspace />
        </AppShell>
      </NotesProvider>
    </IndexedDBProvider>
  );
};
