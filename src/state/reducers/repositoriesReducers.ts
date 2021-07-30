import {Action} from '../actions';
import {ActionType} from '../actionTypes'

//defines the arguments which are the types for state 
interface RepositoriesState{
    loading:boolean;
    // error is a string, no error is null
    error:string|null;
    // array of the repository objects, all the packages from the api
    data:string[]
}

//initial state
const initialState = {
    loading:false,
    error: null,
    data:[]
}

//apply repositoriesState interface to the state
//apply the 3 action interfaces to action using Action from the type union create right above
//return type will be RepositoriesState to enforce strict adherence to types
const reducer = (
    // set initial state
    state:RepositoriesState = initialState,
    action: Action
    ):RepositoriesState =>{

    //type guard ensures that the action type is from the searchrepositoriesaction interface
        // if(action.type ==='search_repositories_success'){
        //     //100% certainty that 'action' satisfies the SearchRepositoriesSuccessAction interface
        //     //because of that we know that the payload exist and that it is an array of strings
        // }
    //switch statements are also an equivalent type guard
    switch(action.type){
        case ActionType.SEARCH_REPOSITORIES:
        // new request so loading should be true and no error because it is the start of the search, and data should be reset to an empty array
            return {loading:true, error:null, data:[]};
        case ActionType.SEARCH_REPOSITORIES_SUCESS:
        //no longer loading after the return of data, no error because it was successful and data will be action.payload as it will be passed to the reducer from the action creator after a successful api request 
            return {loading:false, error: null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            // loading will be false because you just got back a response, error will be contained in the action.payload becase of the error response from the api, and the data property will be reset because the error makes it irrelevant
            return {loading:false,error:action.payload,data:[]};

        default: 
            return state;
    }
}
export default reducer;