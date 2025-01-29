export const Home = () => {
    const render = () => {
        console.log('Home');
        const pageContent = document.querySelector('#pageContent');
        pageContent.innerHTML = `
        <section class="page-home">
        <h1>Bienvenue sur GameVortex</h1>
        <div class="latest-games">
        </div>
        </section>
        `;
    };
    render();
}