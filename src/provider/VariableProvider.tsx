import React, { createContext, useState, useContext, useCallback } from 'react';

export type Varaible = {
  type: string;
  value: any;
  name: string;
  desc?: string;
};

interface Store {
  varaibleList: Varaible[];
  addVaraible: (varaible: Varaible) => void;
  editVaraible: (name: string, newProps: any) => void;
  getVaraible: (name: string) => Varaible | undefined;
  updateVariableValue: (name: string, newValue: any) => void;
}

const StoreContext = createContext<Store | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  return context;
}

export const VariableProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [varaibleList, setVaraibleList] = useState<Varaible[]>([]);

  const addVaraible = useCallback((varaible: Varaible) => {
    setVaraibleList((prevList) => [...prevList, varaible]);
  }, []);

  const editVaraible = useCallback((name: string, newProps: any) => {
    setVaraibleList((prevList) =>
      prevList.map((varaible) =>
        varaible.name === name ? { ...varaible, ...newProps } : varaible
      )
    );
  }, []);

  const getVaraible = useCallback((name: string) => {
    return varaibleList.find((varaible) => varaible.name === name);
  }, [varaibleList]);

  const updateVariableValue = useCallback((name: string, newValue: any) => {
    setVaraibleList((prevList) =>
      prevList.map((varaible) =>
        varaible.name === name ? { ...varaible, value: newValue } : varaible
      )
    );
  }, []);

  const store: Store = {
    varaibleList,
    addVaraible,
    editVaraible,
    getVaraible,
    updateVariableValue,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}