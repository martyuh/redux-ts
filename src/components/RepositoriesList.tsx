import React,{useState} from 'react'
// usedispatch is a hook that gives you access to the dispatch function directly in a component
import { useDispatch } from 'react-redux';
// exported from the index file in state directory
import {actionCreators} from '../state'

// annotate as react functional component so it can type the default props and so on
const RepositoriesList:React.FC = () =>{
//define the state for the search term
const [term,setTerm] = useState('')
//dispatch is the same function that you use inside redux thunk functions, usedispatch gives you a reference to the dispatch function and we can dispatch any actioncreator we want to invoke
const dispatch = useDispatch();
    // to type an argument in the callback function, hover over the prop to determine the type definition for that element type and copy and paste it after the colon
    //in this case you must delete handler after formevent
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // pass in actionCreators which has the searchRepositories action creator thunk function imported in and pass the search term through that
        dispatch(actionCreators.searchRepositories(term))
    }

    return <div>
        <form onSubmit={onSubmit}>
            {/* set the value to term and set an onchange prop to set the term*/}
            <input value={term} onChange={(e=>{setTerm(e.target.value)})} />
            <button>Search</button>
        </form>
    </div>
}

export default RepositoriesList