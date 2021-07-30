//have everything in a central index.ts file on the redux side so that you aren't importing from the redux directory individually into react components. prevents confusion and errors

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// pass in the reducers, the inital state argument of an empty object, apply redux thunk middleware 
export const store = createStore(reducers,{},applyMiddleware(thunk))