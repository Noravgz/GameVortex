export default function GameCard({ game }) {
    return `
      <div class="game-card">
        <img src="${game.background_image}" alt="${game.name}" class="game-card-img" />
        <div class="game-card-content">
          <h3 class="game-card-title">${game.name}</h3>
          <p class="game-card-release">${game.released}</p>
        </div>
      </div>
    `;
  }
  