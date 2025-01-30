const API_URL = 'https://api.rawg.io/api/games'; 
const API_KEY = process.env.API_KEY; 

export const fetchUpcomingGames = async (page = 1) => {
  const url = `${API_URL}?key=${API_KEY}&page_size=9&page=${page}&ordering=-added`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des jeux');
    }

    const data = await response.json();
    return data.results; // Retourne les jeux les plus attendus
  } catch (error) {
    console.error('Erreur dans fetchUpcomingGames:', error);
    return [];  // Retourner un tableau vide en cas d'erreur
  }
};
