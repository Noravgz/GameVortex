import GameCard from './GameCard.js'; // Importe ton composant GameCard

export default function GameList({ games }) {
    if (!games || games.length === 0) {
        return `<p>Aucun jeu trouvé...</p>`;
    }
  
    return `
      <div class="game-list">
        ${games
          .map((game) => GameCard({ game }))  // Utilise GameCard pour chaque jeu
          .join('')}
      </div>
    `;
}
