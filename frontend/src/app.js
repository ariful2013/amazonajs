import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl, routerUrl } from './utils/routerUrl.js';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};

const router = () => {
  const requestUrl = parseRequestUrl();
  const url = routerUrl(requestUrl);

  const screen = routes[url] ? routes[url] : Error404Screen;
  const main = document.getElementById('main');
  main.innerHTML = screen.render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
