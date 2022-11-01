import { home, about, portfolio, notfound } from './pages.js'
const routes = {}

export function createRoute(pathName) {
  switch (pathName) {
    case '/':
      routes[pathName] = home
      break
    case '/about':
      routes[pathName] = about
      break
    case '/portfolio':
      routes[pathName] = portfolio
      break
    default:
      routes[pathName] = notfound
      break
  }
}

export async function render(path) {
  return routes[path]
}