import {ActionType} from '../actionTypes'

// create an interface for each case for action
interface SearchRepositoriesAction{
    // in order for some object to satisfy this interface, type must equal the string 'search_repositories'
    type: ActionType.SEARCH_REPOSITORIES;
} 
interface SearchRepositoriesSuccessAction{
    //type must equal the exact string
    type:ActionType.SEARCH_REPOSITORIES_SUCESS;
    // must have a payload that is an array of strings
    payload:string[];
}
interface SearchRepositoriesErrorAction{
    //type must equal the exact string
    type:ActionType.SEARCH_REPOSITORIES_ERROR;
    //payload must be a string
    payload:string;
}
// export to repositoriesreducers
export type Action = 
    // to prevent having to write out a long conditional to determine the interface you creacte a type union which will represnt all possible actions
    SearchRepositoriesAction | 
    SearchRepositoriesSuccessAction | 
    SearchRepositoriesErrorAction;

