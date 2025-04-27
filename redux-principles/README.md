# Basic Redux Store Implementation

## 🧑‍💻 Project Structure
````bash
redux-principles/
├── 1.basicStore.js                 # Basic Redux Store Implementation
├── 2.redux-fundamentals/                         
│   ├── action-types.js         # Contains action type constants
│   ├── actions.js              # Contains action creators
│   ├── reducers.js             # Contains reducer logic
│   ├── store.js                # Store-related setup and configuration
│   ├── app.js                  # Main entry point to initialize the app and connect to store
│   ├── index.html              # Basic HTML structure for the app
│   └── redux.js                # Implements core Redux-like logic for state management
└── README.md                   # This file, containing project details
````

## 1. basicStore.js

This folder contains the basic implementation of a store in Redux. Below is a step-by-step breakdown of how the basic store works:

##### 1-1. Creating the Store

````javascript
const store = createStore(worker);
````
This creates the store. The store is an object returned by the createStore function, and the worker function (the reducer) is set up inside the store to manage the state.

##### 1-2. Subscribing to State Changes
````javascript
store.subscribe(handler);
````
When subscribe is called, the handler function is stored. This handler will be executed whenever the state changes. It's the process of "subscribing" to state changes.

##### 3. Dispatching Actions
````javascript
store.send({ type: 'increase' });
````
When send is called, an action is passed to the worker function. The worker function processes the action and updates the state accordingly. In this case, the action type is 'increase', so the state's count will increase by 1.

##### 4. Handler Execution
After the state changes, any handler function that was registered using subscribe will be executed. In the example, the console.log(store.getState()) function is called whenever the state is updated. This is the part where the handler function is triggered after the state change.



## 2.redux-fundamentals