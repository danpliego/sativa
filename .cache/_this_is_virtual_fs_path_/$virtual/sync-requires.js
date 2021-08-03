
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/danielpliego/projects/sativa/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/danielpliego/projects/sativa/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/danielpliego/projects/sativa/src/pages/index.js")),
  "component---src-pages-tienda-js": preferDefault(require("/Users/danielpliego/projects/sativa/src/pages/tienda.js"))
}

