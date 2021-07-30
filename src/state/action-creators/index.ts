import axios from 'axios';
import{ActionType} from '../actionTypes';
import{Action} from '../actions'
import { Dispatch } from 'react';


//action creator that uses redux thunk because of an async call
// because there'll be an async request to the api, use redux thunk to return an arrow function from our action creator which will pass through redux thunk. thunk will then dispatch action object after it processes the returned function, and pass it to the reducer
//Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the function’s body once the asynchronous operations have been completed.
export const searchRepositories = (term:string) =>{
    //because we're using thunk, return an async function that will be called with the dispatch function
    // when you return a function with thunk, thunk calls dispatch which allows you to reach into the redux store and pull out the state
    // async await function
                // should make sure that typescript types the dispatch correctly, to do that import the type definitions from the Dispatch function which will utilize the import Actions which contains the interfaces for the actions
                // it tells typescript that dispatch can only be called with some argument that matches the Action with the interfaces defined.
                // which means whatever action is being called the payload type must match what is being defined in the interface for that action
    return async (dispatch: Dispatch<Action>) => {
        // this will make the loading flag switch to true to indicate that there is an async operation currently running
        //which means this is immediately dispatched once the actioncreator is called.
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        }); 
        //immediately after the dispatch you run an axios request through a try catch block 
        //while it is in thunk and the async operation is running it will dispatch the action to the reducer after async response
        try{
            //destructure the response from the request
            //address will have a query string which will require you to provide a params object that specifies the query string into the url
            const {data} =await axios.get('https://registry.npmjs.org/-/v1/search',{
                params:{
                    // term is the string being searched
                    text: term
                }
            })

            //the response will be data with an array named object. it's an array of objects with a package property that has a name property
            //map over the objects array to access the objects in the array separately.
            //access the package.name in the object
            //object will be result
            const names = data.objects.map((result:any) =>{
                return result.package.name
            })

            //after the async response, an action will be dispatched 
            // should make sure that typescript types the dispatch correctly, to do that import the type definitions from the Dispatch function which will utilize the import Actions which contains the interfaces for the actions
            dispatch({
                //this will be a successful response so it will send a success action
                type: ActionType.SEARCH_REPOSITORIES_SUCESS,
                //names is the library that is returned from the array of objects that matches the search string
                payload: names
            })


        //if the fetch is not successful dispatch searchRepositoriesErrorAction action 
        }catch(err){
            //dispatch function
            dispatch({
            type:ActionType.SEARCH_REPOSITORIES_ERROR,
            // string describing what went wrong
            payload: err.message
        })
        }
    }
}