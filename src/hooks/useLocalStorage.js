const useLocalStorage = () => {
  const getStorage = (storageName) => {
    try {
      const value = localStorage.getItem(storageName);
      if (value === null) {
        return undefined;
      }
      return JSON.parse(value);
    } catch (err) {
      return undefined;
    }
  };

  const saveStorage = (valueInput, storageName) => {
    try {
      const value = JSON.stringify(valueInput);
      localStorage.setItem(storageName, value);
    } catch (err) {
      throw new Error("Can't save changes in local storage");
    }
  };

  return {
    getStorage,
    saveStorage,
  };
};

export default useLocalStorage;
