/** File: redux-principles/basicStore.js
* This is a simple implementation of a Redux-like store
* that allows you to manage state and subscribe to changes.
*/


// Create a store with the ability to manage state, subscribe to changes, and send actions
function createStore(worker) {
    let state;
    let handlers = [];
  
    // Function to dispatch actions to the store
    function send(action) {
      state = worker(state, action);
      handlers.forEach(handler => handler());  // Call all subscribed handlers to notify them of the state change
    }
  
    function subscribe(handler) {
      handlers.push(handler);
    }
  
    function getState() {
      return state;
    }
  
    // Return the store's public API
    return {
      send,
      getState,
      subscribe,
    };
  }

  
// A worker function that handles the state changes based on the action
// It returns a new state based on the current state and action type
  function worker(state = { count: 0 }, action) {
    // do something
    switch(action.type) {
      case 'increase':
        return { ...state, count: state.count + 1 };
      default: 
        return { ...state };
    }
  }
  
  // Create the Redux store with the worker function that will handle state updates
  const store = createStore(worker);
  
  // Subscribe to state changes and log the state to the console every time it changes
  store.subscribe(function() {
    console.log(store.getState());
  });
  
  // Send actions to the store to modify the state
  store.send({ type: 'increase' });
  store.send({ type: 'increase' });
  