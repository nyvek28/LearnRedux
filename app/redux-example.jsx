
var redux = require('redux')

console.log('Starting redux example')

var actions = require('./actions/index'),
    store = require('./store/configureStore').configure()

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState(),
      appCont = document.getElementById('app')

  console.log('New state', store.getState())

  if(state.map.isFetching){
    appCont.innerHTML = 'Loading...'
  }else if(state.map.url){
    appCont.innerHTML = '<a href = "' + state.map.url + '" target = "_blank">View your location</a>'
  }

})

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('Andrew'))

store.dispatch(actions.addHobby('Running'))

store.dispatch(actions.changeName('Mathias'))

store.dispatch(actions.addHobby('Walking'))

store.dispatch(actions.addMovie('The Godfather', 'Drama'))

store.dispatch(actions.addMovie('Space Jam', 'Fantasy'))

store.dispatch(actions.addMovie('Jurassic Park', 'Adventure'))

store.dispatch(actions.removeHobby(2))

store.dispatch(actions.removeMovie(2))
