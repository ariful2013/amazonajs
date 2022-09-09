import Error404Screen from './screens/Error404Screen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { parseRequestUrl, routerUrl } from './utils/routerUrl';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};

const router = async () => {
  const requestUrl = parseRequestUrl();
  const url = routerUrl(requestUrl);

  const screen = routes[url] ? routes[url] : Error404Screen;
  const main = document.getElementById('main');
  main.innerHTML = await screen.render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
