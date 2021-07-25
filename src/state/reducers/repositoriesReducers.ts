

//defines the arguments which are the types for state 
interface RepositoriesState{
    loading:boolean;
    // error is a string, no error is null
    error:string|null;
    // array of the repository objects, all the packages from the api
    data:string[]
}
// create an interface for each case for action

interface SearchRepositoriesAction{
    // in order for some object to satisfy this interface, type must equal the string 'search_repositories'
    type:'search_repositories';
}
interface SearchRepositoriesSuccessAction{
    //type must equal the exact string
    type:'search_repositories_success';
    // must have a payload that is an array of strings
    payload:string[];
}
interface SearchRepositoriesErrorAction{
    //type must equal the exact string
    type:'search_repositories_error';
    //payload must be a string
    payload:string;
}

//apply repositoriesState interface to the state
//apply the 3 action interfaces to action using the or conditional
//return type will be RepositoriesState to enforce strict adherence to types
const reducer = (
    state:RepositoriesState,
    action: SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction
    ):RepositoriesState =>{
    switch(action.type){
        case 'search_repositories':
        // new request so loading should be true and no error because it is the start of the search, and data should be reset to an empty array
            return {loading:true, error:null, data:[]};
        case 'search_repositories_success':
        //no longer loading after the return of data, no error because it was successful and data will be action.payload as it will be passed to the reducer from the action creator after a successful api request 
            return {loading:false, error: null, data: action.payload};
        case 'search_repositories_error':
            // loading will be false because you just got back a response, error will be contained in the action.payload becase of the error response from the api, and the data property will be reset because the error makes it irrelevant
            return {loading:false,error:action.payload,data:[]};

        default:
            return state;
    }
}
export default reducer;