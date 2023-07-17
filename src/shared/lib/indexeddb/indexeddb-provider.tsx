import React, { createContext, useContext, useEffect } from 'react';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { PageLoader } from 'shared/ui';

type MyDB = DBSchema & {
  myStore: {
    key: string;
    value: any;
  };
};

const dbName = 'my-database';
const storeName = 'myStore';

const IndexedDBContext = createContext<IDBPDatabase<MyDB> | null>(null);

export const IndexedDBProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [db, setDB] = React.useState<IDBPDatabase<MyDB> | null>(null);

  useEffect(() => {
    async function initDB() {
      const database = await openDB<MyDB>(dbName, 1, {
        upgrade(db) {
          db.createObjectStore(storeName, { keyPath: 'key' });
        },
      });
      setDB(database);
    }
    initDB();
  }, []);

  return (
    <IndexedDBContext.Provider value={db}>
      {db ? children : <PageLoader />}
    </IndexedDBContext.Provider>
  );
};

export const useIndexedDB = () => {
  const db = useContext(IndexedDBContext);

  const putItem = async (key: string, value: any) => {
    if (db) {
      await db.put(storeName, { key, value });
    }
  };

  const getItem = async (key: string) => {
    if (db) {
      return await db.get(storeName, key);
    }
    return null;
  };

  return { putItem, getItem };
};

export const usePersistIndexedDB = <T,>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] => {
  const { getItem, putItem } = useIndexedDB();
  const [value, setValue] = React.useState<T>(initialValue);

  useEffect(() => {
    const loadData = async () => {
      const storedValue = await getItem(key);
      if (storedValue) {
        setValue(storedValue.value);
      }
    };
    loadData();
  }, [key]);

  const updateValue = async (newValue: T) => {
    setValue(newValue);
    await putItem(key, newValue);
  };

  return [value, updateValue];
};
