var redux = require('redux');


console.log('Starting Redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();
// Subscribe to changes

var unsubscribe = store.subscribe(() => {
  var state = store.getState();


  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading...';
  } else if (state.map.url) {
      document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Mad Max', 'Action'));

store.dispatch(actions.addMovie('Star Wars', 'Action'));

store.dispatch(actions.removeMovie(1));

store.dispatch(actions.changeName('Emily'));
