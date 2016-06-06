var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  console.log('New action', action);

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
      default:
        return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() => {
  var state = store.getState();

  // console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

// var currentState = store.getState();
// console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'GiGi'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Louie'
});
// console.log('searchText', store.getState());
