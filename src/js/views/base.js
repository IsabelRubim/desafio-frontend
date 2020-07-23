export const elements = {
  profile: document.querySelector('.profile'),
  profileContent: document.querySelector('.profile-content'),
  repository: document.querySelector('.profile-content__repositories'),
  headingRepo: document.getElementById('title-repo'),
};

export const elementStrings = {
  loader: 'loader'
};

export const clearUI = () => {
  elements.repository.innerHTML = '';
};

export const renderLoader = parent => {
  const loader = `
    <div class="${elementStrings.loader}">
      <svg>
        <use href="img/icon.svg#icon-cw"></use>
      </svg>
    </div>
  `;

  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);

  if (loader) loader.parentElement.removeChild(loader);
};