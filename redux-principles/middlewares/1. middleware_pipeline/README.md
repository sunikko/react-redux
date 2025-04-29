Redux Middleware Pipeline Implementation
========================================

This project demonstrates a minimal, custom implementation of Redux’s core **middleware architecture**. It provides insight into how middleware functions intercept and process actions before they reach the reducer, helping developers understand Redux internals through hands-on experience.

🧑‍💻 Project Structure
-----------------------
```
middleware-redux/
├── action-type.js         # Action type constants
├── actions.js             # Action creators
├── app.js                 # Connects store with UI and dispatches actions
├── index.html             # HTML entry point
├── reducer.js             # Reducer logic for updating state
├── redux.js               # Core Redux-like store and middleware pipeline
└── README.md              # You are here!
```

🔄 Application Flow
-------------------

1.  Create the Store with Middleware
    ```
    const store = createStore(reducer, [middleware1, middleware2, middleware3]);

    ```
    *   createStore receives a reducer and an array of middleware functions.
        
    *   It wraps the store’s dispatch method in reverse order using the middleware chain.
        
    *   Action flow looks like this:
    ```
    dispatch → middleware3 → middleware2 → middleware1 → reducer

    ```
        
2.  **Example Middleware Functions**
    
    *   middleware1: Logs every action to the console.
        
    *   middleware2: Intercepts SET\_COUNTER actions and overrides the payload with 100.
        
    *   middleware3: Handles ASYNC\_INCREASE\_COUNTER by dispatching an increase() action after 1 second.
        
3.  **UI Integration (app.js)**
    
    *   Sets up buttons that dispatch actions when clicked.
        
    *   Subscribes to state changes and updates the DOM accordingly.
        
4.  **Reducer Handling (reducer.js)**
    
    *   Handles logic for INCREASE, DECREASE, RESET, and SET\_COUNTER actions.
        
    *   Returns a new state based on the action type.
        


📚 What I Learn
--------------------

*   How Redux-style middleware works under the hood.
    
*   How action flow is intercepted and enhanced before reaching the reducer.
    
*   How to manage side effects like async operations (e.g., simulated API calls).
    
*   How to chain middleware functions manually.