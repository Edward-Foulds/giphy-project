import * as model from "./model.js";
import randomGiphyView from "./views/randomGiphyView.js";
import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";
import trendingGiphyView from "./views/trendingGiphyView.js";
import navigationView from "./views/navigationView.js";
import "core-js/stable";
import "regenerator-runtime";

const controlRandomGiphy = async function () {
  try {
    randomGiphyView.renderLoading();
    await model.loadRandomGiphy();
    randomGiphyView.render(model.state.giphy);
    // randomGiphyView.addHandleLazyImage();
  } catch (err) {
    console.error(err);
    randomGiphyView.renderError(err.message);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderLoading("beforebegin");
    const query = searchView.getQuery();
    if (!query)
      throw new Error(
        "Please enter a search keyword into the search field above"
      );
    await model.loadSearchResults(query);
    resultsView.render(model.state.search);
  } catch (err) {
    console.error(err);
    resultsView.renderError(err.message, "beforebegin");
  }
};

const controlTrendingGiphys = async function () {
  try {
    trendingGiphyView.renderLoading();
    await model.loadTrendingGiphys();
    trendingGiphyView.render(model.state.trending);
    // trendingGiphyView.addHandleLazyImage();
  } catch (err) {
    console.error(err);
    trendingGiphyView.renderError(err.message);
  }
};

const init = async function () {
  controlRandomGiphy();
  controlTrendingGiphys();
  randomGiphyView.addHandlerNewRandomImage(controlRandomGiphy);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
