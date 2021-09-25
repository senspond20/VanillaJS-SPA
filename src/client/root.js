// const rootTemplate = require('../../views/layouts/layout.hbs')
// const homeTemplate = require('../../views/home.hbs')

const fs = require('fs');
const hbs = require('handlebars');

const rootTemplate = fs.readFileSync('../../views/layouts/layout.hbs');

console.log(rootTemplate)


//
// const Root = rootTemplate()
// const Home = homeTemplate()
// console.log(Root)

//
// const html = Root(Home);

// console.log(html)
// return {
//     html
// }
// const root = document.getElementById('root')
// root.innerHTML = Root.render(Home);