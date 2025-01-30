import { routes } from './routes';
import '../style/index.scss';

const callRoute = async () => {
    const { hash } = window.location;
    const pathParts = hash.substring(1).split('/');
  
    const pageName = pathParts[0];
    const pageArgument = pathParts[1] || '';
    const pageFunction = routes[pageName];
  
    if (pageFunction !== undefined) {
        const pageContent = await pageFunction(pageArgument);
        document.getElementById('app').innerHTML = pageContent;  // Mettre à jour le contenu de la page
    }
};

// Gestion des événements de changement de hash et au chargement de la page
window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());