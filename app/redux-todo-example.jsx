var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = {searchText: ''}, action) => {
  console.log('New action', action);

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        name: action.searchText
      };
      default:
        return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
});

console.log('searchText should be Dog', store.getState());
