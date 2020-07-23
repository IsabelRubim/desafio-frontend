import User from './models/User';
import Repositories from './models/Repositories';

import * as userView from './views/userView';
import * as repositoriesView from './views/repositoriesView';
import { elements, renderLoader, clearLoader, clearUI } from './views/base';

import '../scss/main.scss';

const state = {};

const controlUser = async () => {
  state.user = new User('isabelrubim');

  try {
    await state.user.getUser();

    userView.renderUser(state.user);

  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', controlUser);

const controlRepositories = async () => {
  state.repositories = new Repositories(state.user.repos_url);

  renderLoader(elements.repository);

  try {
    await state.repositories.getRepositories();

    clearLoader();

    repositoriesView.renderRepositories(state.repositories.repos);

  } catch (error) {
    console.log(error);
  }
};

const controlFavoriteRepositories = async () => {
  state.repositories = new Repositories(state.user.starred_url);

  renderLoader(elements.repository);

  try {
    
    await state.repositories.getRepositories();
    clearLoader();
    repositoriesView.renderRepositories(state.repositories.repos);

  } catch (error) {
    console.log(error);
  }
};

elements.profileContent.addEventListener('click', e => {
  const showRepoBtn = e.target.closest('.btn--show-repo');
  const showRepoBtnFav = e.target.closest('.btn--show-repo-fav'); 

  if (showRepoBtn) {
    clearUI();
    controlRepositories();
  } 

  if (showRepoBtnFav) {
    clearUI();
    controlFavoriteRepositories();
  }
});
