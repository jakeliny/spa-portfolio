import { createRoute, render } from './router.js';

const app = document.getElementById('app');

const routes = document.querySelectorAll('nav a');
routes.forEach(route => {

  createRoute(route.getAttribute('href'), route.dataset.page);


  route.addEventListener('click', async (e) => {
    e.preventDefault();
    let path = e.target.getAttribute('href');

    //Change the URL
    history.pushState({}, "", path);

    app.innerHTML = await render(path);
  });

})

window.addEventListener('load', async () => {
  app.innerHTML = await render(location.pathname);
});

// When go back page render the correct page
window.addEventListener('popstate', async () => {
  app.innerHTML = await render(window.location.pathname);
});

