// css
require('../../public/css/style.css')

// router
const {
  initialRoutes,
  historyRouterPush,
  // hashRouterPush
} = require('./router')

// app division
const historyAppDiv = document.querySelector('#history-app')
// const hashAppDiv = document.querySelector('#hash-app')

// Browser History
// initialRoutes('history', historyAppDiv)

// Hash History
// initialRoutes('hash', hashAppDiv)

window.onload = () => {
  const historyLinker = document.querySelectorAll('span.history')
  // // const hashLinker = document.querySelectorAll('a.hash')
  //
  console.log(historyLinker)
  historyLinker.forEach(el => {
    el.addEventListener('click', (evt) => {
      const pathName = evt.target.getAttribute('route')

      historyRouterPush(pathName, historyAppDiv)
    })
  })

  // test
  const homeTemplate = require('../../views/home.hbs')
  const ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'data/pets-data.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      const data = JSON.parse(ourRequest.responseText);
      console.log(data);
      createHTML(data);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

  function createHTML(petsData) {
    const petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = homeTemplate(petsData);
  }

  // hashLinker.forEach(el => {
  //   el.addEventListener('click', (evt) => {
  //     const pathName = evt.target.getAttribute('route')
  //
  //     hashRouterPush(pathName, hashAppDiv)
  //   })
  // })
}
