//have everything in a central index.ts file on the redux side so that you aren't importing from the redux directory individually into react components. prevents confusion and errors

//export everything that you need access to from other parts of the app
//exported from this file is a store variable
export * from './store';
//exported all the exports in this case searchRepositories as actionCreators
export * as actionCreators from './action-creators';
