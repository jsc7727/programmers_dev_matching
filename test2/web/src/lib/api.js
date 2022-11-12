const API_URL = "/web/src/data/new_data.json";

export const getData = async () => {
  try {
    const res = await fetch(API_URL);
    if (res.ok) {
      return res.json();
    } else {
      throw "ERROR";
    }
  } catch (error) {
    alert("ERROR", error);
    return [];
  }
};
