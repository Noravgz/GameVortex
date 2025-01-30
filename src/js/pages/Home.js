import { fetchUpcomingGames } from '../api.js';
import GameList from '../components/GameList.js';
import SearchBar from '../components/SearchBar.js';
export async function Home() {
  let games = [];  // Stocke les jeux les plus attendus

  // Fonction pour récupérer les jeux les plus attendus
  const fetchAndDisplayUpcomingGames = async () => {
    games = await fetchUpcomingGames();  // Récupère les jeux les plus attendus
  };

  // Première récupération des jeux (au chargement)
  await fetchAndDisplayUpcomingGames();

  // Retourner la structure de la page une fois les jeux récupérés
  return `
    <div class="home">
      <h1>Jeux les plus attendus</h1>
      ${SearchBar()}
      ${GameList({ games })}  <!-- Affiche la liste des jeux -->
    </div>
  `;
}