
var redux = require('redux'),
    thunk = require('redux-thunk').default,
    {namesReducer, moviesReducer, hobbiesReducer, mapsReducer} = require('./../reducers/index')

export var configure = () => {
  //Main reducer
  var reducer = redux.combineReducers({
    name: namesReducer,
    hobby: hobbiesReducer,
    movies: moviesReducer,
    map: mapsReducer
  })


  //Create store
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
