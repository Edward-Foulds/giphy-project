import * as model from "./model.js";
import randomGiphyView from "./views/randomGiphyView.js";
import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";
import trendingGiphyView from "./views/trendingGiphyView.js";
import "core-js/stable";
import "regenerator-runtime";
import navigationView from "./views/navigationView.js";

const controlRandomGiphy = async function () {
  try {
    randomGiphyView.renderLoading();
    await model.loadRandomGiphy();
    randomGiphyView.render(model.state.giphy);
  } catch (err) {
    console.error(err);
    randomGiphyView.renderError(err.message);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderLoading();
    const query = searchView.getQuery();
    if (!query)
      throw new Error(
        "Please enter a search keyword into the search field above"
      );
    await model.loadSearchResults(query);
    resultsView.render(model.state.search);
  } catch (err) {
    console.error(err);
    resultsView.renderError(err.message);
  }
};

const controlTrendingGiphys = async function () {
  try {
    trendingGiphyView.renderLoading();
    await model.loadTrendingGiphys();
    trendingGiphyView.render(model.state.trending);
    console.log();
  } catch (err) {
    console.error(err);
    trendingGiphyView.renderError(err.message);
  }
};

const controlNavigation = function () {};

const init = function () {
  controlRandomGiphy();
  controlTrendingGiphys();
  randomGiphyView.addHandlerNewRandomImage(controlRandomGiphy);
  searchView.addHandlerSearch(controlSearchResults);
  navigationView.addHandlerNavClick();
};
init();
