import { AJAX } from "./helpers.js";
import { API_URL, API_KEY } from "./config.js";

export const state = {
  giphy: {},
  search: {
    query: "",
    results: [],
  },
  trending: {
    results: [],
  },
};

const createGiphyObject = function (data) {
  return {
    fixedWidth: data.images.fixed_width,
    original: data.images.original,
    fixedWidthDownsampled: data.images.fixed_width_downsampled,
    fixedWidthSmall: data.images.fixed_width_small,
    preview: data.images.downsized_still,
    title: data.title,
  };
};

export const loadRandomGiphy = async function () {
  try {
    // API call to return random GIPHY
    const { data } = await AJAX(`${API_URL}random?api_key=${API_KEY}`);
    state.giphy = createGiphyObject(data);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const returnedResults = await AJAX(
      `${API_URL}search?api_key=${API_KEY}&q=${query}`
    );

    console.log("Returned results:", returnedResults);

    if (returnedResults.pagination.total_count === 0)
      throw new Error("No results matching that search. Please try again");

    state.search.results = returnedResults.data.map((giphy) =>
      createGiphyObject(giphy)
    );
  } catch (err) {
    throw err;
  }
};

export const loadTrendingGiphys = async function () {
  try {
    const returnedData = await AJAX(`${API_URL}trending?api_key=${API_KEY}`);
    state.trending.results = returnedData.data.map((giphy) =>
      createGiphyObject(giphy)
    );
  } catch (err) {
    throw err;
  }
};
