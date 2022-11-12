const API_URI =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

const cache = {};

export const getSearchedLanguages = async (keyword) => {
  try {
    if (cache.hasOwnProperty(keyword)) {
      return cache[keyword];
    } else {
      const res = await fetch(`${API_URI}/languages?keyword=${keyword}`);
      if (!res.ok) {
        throw "error";
      }
      const json = res.json();
      cache[keyword] = json;
      return json;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
