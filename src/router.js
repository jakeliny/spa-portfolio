const routes = {}

export function createRoute(pathName, page) {
  routes[pathName] = page;
}

export async function render(path) {
  const html = await fetch(routes[path]);
  return await html.text();
}