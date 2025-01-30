export default function GameList({ games }) {
    if (!games || games.length === 0) {
        return `<p>Aucun jeu trouvé...</p>`;
    }
  
    return `
      <ul class="game-list">
        ${games
          .map(
            (game) => `
          <li>
            <h2>${game.name}</h2>
            <img src="${game.background_image}" alt="${game.name}" />
            <p>${game.released}</p>
          </li>`
          )
          .join('')}
      </ul>
    `;
}
