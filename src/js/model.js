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

export const loadRandomGiphy = async function () {
  try {
    // API call to return random GIPHY
    const returnedData = await AJAX(
      `${API_URL}random?api_key=${API_KEY}&bundle=clips_grid_picker`
    );

    // Destructuring returned data
    const {
      data: {
        images: { fixed_width, original },
      },
    } = returnedData;

    // Assigning returned data to state
    state.giphy.lowRes = fixed_width;
    state.giphy.highRes = original;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const returnedResults = await AJAX(
      `${API_URL}search?api_key=${API_KEY}&q=${query}&bundle=clips_grid_picker`
    );

    state.search.results = returnedResults.data.map((giphy) => {
      return {
        lowRes: giphy.images.fixed_width,
        highRes: giphy.images.original,
        title: giphy.title,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const loadTrendingGiphys = async function () {
  try {
    const returnedData = await AJAX(
      `${API_URL}trending?api_key=${API_KEY}&bundle=clips_grid_picker`
    );

    state.trending.results = returnedData.data.map((giphy) => {
      return {
        lowRes: giphy.images.fixed_width,
        highRes: giphy.images.original,
        title: giphy.title,
      };
    });

    console.log(state);
  } catch (err) {
    throw err;
  }
};
