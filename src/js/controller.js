import * as model from "./model.js";
import randomGiphyView from "./views/randomGiphyView.js";
import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";
import trendingGiphyView from "./views/trendingGiphyView.js";
import "core-js/stable";
import "regenerator-runtime";

const controlRandomGiphy = async function () {
  try {
    randomGiphyView.renderLoading();
    await model.loadRandomGiphy();
    randomGiphyView.render(model.state.giphy);
  } catch (err) {
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderLoading();
    const query = searchView.getQuery();
    if (!query) return;
    console.log(query);

    await model.loadSearchResults(query);
    resultsView.render(model.state.search);
  } catch (err) {
    console.error(err);
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
  }
};

const init = function () {
  controlRandomGiphy();
  controlTrendingGiphys();
  randomGiphyView.addHandlerNewRandomImage(controlRandomGiphy);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
