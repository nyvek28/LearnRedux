var React = require('react'),
    ReactDOM = require('react-dom'),

    {Route, Router, IndexRoute, hashHistory} = require('react-router')

//Load foundation
$(document).foundation()

//App css
require('style!css!sass!AppStyles')

ReactDOM.render(
  <p>React Template</p>,
  document.getElementById('app')
)

require('./redux-example.jsx')
//require('./redux-todo-example.jsx')
