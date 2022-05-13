import { createContext, useContext } from 'react';

import App from './App';
import { Instance, types } from 'mobx-state-tree';

const RootStore = types.model({
  app: types.optional(App, {}),
});

const initRootStore = RootStore.create({
  app: App.create({
    locale: localStorage.getItem('locale') || 'zh-CN',
  }),
});

const RootStoreContext = createContext<Instance<typeof RootStore>>(initRootStore);

export const useRootStoreContext = () => useContext(RootStoreContext);
