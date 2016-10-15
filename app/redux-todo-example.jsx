
var redux = require('redux')

console.log('Starting redux todo example')

var defaulted = {
  showCompleted: false,
  searchText: '',
  todos: []
}
var reducer = (state = {...defaulted}, action) => {
  var trueState

  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      trueState = {...state, searchText: action.searchText}
      break

    default:
      trueState = state
      break
  }

  return trueState

}
var store = redux.createStore(reducer)

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState()
  console.log('Text is', state.searchText)
  document.getElementById('app').innerHTML = state.searchText
})

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Cat'
})

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Hell'
})
