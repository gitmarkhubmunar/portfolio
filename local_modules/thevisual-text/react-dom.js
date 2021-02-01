var React = require('react') // Installed as dependency of '@haiku/player'
var ReactDOM = require('react-dom') // Installed as a dependency of '@haiku/player'
var TextComponent = require('./react.js')
if (TextComponent.default) TextComponent = TextComponent.default
module.exports = function _react_dom_wrapper (element, props) {
  ReactDOM.render(React.createElement(TextComponent, props), element)
}