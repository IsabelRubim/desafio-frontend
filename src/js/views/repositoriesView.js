import { elements } from './base';

export const renderRepositories = repositories => {
  let markup = '';

  repositories.forEach(repo => {
    markup += `
      <a href="${repo.html_url}" target="_blank">
        <li>${repo.name}</li>
      </a>
    `;
  });

  elements.headingRepo.style.display = 'block';
  elements.repository.innerHTML = markup;
};
