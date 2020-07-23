import { elements } from './base';

export const renderUser = user => {

  const markup = `
    <div class="profile__user">
      <img src="${user.avatar_url}" alt="Avatar" class="profile__img">
      <a href="${user.html_url}" target="_blank" class="profile__sub">Visitar perfil</a>
    </div>   
    <ul class="profile__info">
      <li>Repositórios: ${user.public_repos}</li>
      <li>Seguidores: ${user.followers}</li>
      <li>Seguindo: ${user.following}</li>
    </ul> 
  `;

  elements.profile.insertAdjacentHTML('afterbegin', markup);
}