import React from 'react';
// provider gives you access to the redux store through the different components
import {Provider} from 'react-redux'
// don't have to worry about digging through the state directory to find store or anything you can find the things you need to import by importing state
import {store} from '../state'
import RepositoriesList from './RepositoriesList'

const App = () => {
    return <Provider store={store}>
        <div>
            <h1>Search For a Package</h1>
            <RepositoriesList/>
        </div>
    </Provider>
};

export default App