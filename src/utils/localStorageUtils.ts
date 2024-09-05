export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!!);
};

export const setItem = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const updateItem = (key: string, id: number, newData: any) => {
  const existingData = JSON.parse(localStorage.getItem(key)!!) || [];

  if (Array.isArray(existingData)) {
    const index = existingData.findIndex((item) => item.id === id);

    if (index !== -1) {
      // Only update if there are new data to apply
      if (Object.keys(newData).length > 0) {
        existingData[index] = { ...existingData[index], ...newData };
        localStorage.setItem(key, JSON.stringify(existingData));
        console.log("Actualizado");
      }

      return true;
    }
  }

  return false;
};

export const deleteItem = (key: string) => {
  return localStorage.removeItem(key);
};
