# Basic Redux Store Implementation

## 🧑‍💻 Project Structure
````bash
redux-principles/
├── 1.basicStore.js             # Basic Redux Store Implementation
├── 2.redux-fundamentals/                         
│   ├── action-types.js         # Constants for action types
│   ├── actions.js              # Action creators for INCREASE, DECREASE, and RESET
│   ├── reducers.js             # Reducer function for handling state changes
│   ├── store.js                # Store-related setup and configuration
│   ├── app.js                  # Main entry point for initializing the store and dispatching actions
│   ├── index.html              # Basic HTML file to load the app
│   └── redux.js                # Core Redux-like logic (createStore, actionCreator)
└── README.md                   
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



##  2. redux-fundamentals
This project demonstrates the core concepts of Redux, focusing on how to create a basic store, handle actions, and manage state in a minimalistic way.


#### Flow of the Application
---------------------------

1.  Create the Store:
    
    *   We first call createStore(reducer) to create the store. This store will be responsible for managing the state and handling actions.
        
    *   The createStore function takes a reducer function as an argument. The reducer defines how the state changes in response to actions.

    ```
    const store = createStore(reducer);
    ```
        
2.  Define Actions:
    
    *   Actions represent "events" or "instructions" that cause the state to change.
        
    *   We define action types (e.g., INCREASE, DECREASE, RESET) in action-type.js to avoid hardcoding strings across the project.
        
    *   In actions.js, we use action creators to simplify creating action objects. Action creators generate actions with a type and a payload.
    ```
    export const increase = actionCreator(INCREASE);
    ``` 
3.  Reducer Handles State Changes:
    *   The reducer.js file contains the reducer function. It takes the current state and an action as input and returns a new state based on the action's type.
        
    *   For example, the INCREASE action will increment the count property in the state.
    ```
    function reducer(state = { count: 0 }, action) {
        switch(action.type) {
            case INCREASE:
                return { ...state, count: state.count + 1 };
            case DECREASE:
            ...
        }
    }
    ```
        
4.  Subscribe to State Changes:
    
    *   We use store.subscribe() to register a handler that will be called whenever the state changes. In this case, we log the updated state to the console.
        
5.  Dispatch Actions:
    
    *   Actions are dispatched via store.dispatch(action). This triggers the reducer to handle the action and update the state accordingly.
        
    *   In app.js, we dispatch actions like increase(), decrease(), and reset() to modify the state.
    ```
    store.dispatch(increase());
    store.dispatch(decrease());
    store.dispatch(reset());
    ```
        
6.  State Update & Handler Execution:
    
    *   After an action is dispatched, the state is updated by the reducer.
        
    *   The subscribed handler (in this case, a console.log function) is executed, logging the updated state to the console.
        

#### How the Code Works Together
-------------------------------

1.  **Initialization:**
    
    *   The store is created with the createStore function, which initializes the state and sets up action dispatching.
        
2.  **Action Dispatching:**
    
    *   Actions such as increase(), decrease(), and reset() are dispatched to the store. These actions are processed by the reducer, which updates the state based on the action's type.
        
3.  **State Updates:**
    
    *   The store updates the state based on the action dispatched and triggers the subscribed handler to run (in this case, logging the new state).
        
4.  **Console Output:**
    
    *   Every time an action is dispatched, the handler logs the updated state to the console, showing the changes in the count value.