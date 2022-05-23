import MainStore from '../store/main';

export const useMainContext = () => {
  const store = {
    todoStore: MainStore,
  };
  return store;
};
