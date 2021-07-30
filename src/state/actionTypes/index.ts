//to prevent having to write strings repeatedly create an enum.
//an enum is an object that has a bunch of different properties that have a closely related definition or meaning
//export to actions and repositoriesReducers
export enum ActionType{
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}