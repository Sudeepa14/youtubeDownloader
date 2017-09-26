import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Download from './download';
import registerServiceWorker from './registerServiceWorker';
import {Switch , Route ,BrowserRouter} from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//for the router


//rendering the relevent compornent according to the routes

ReactDOM.render((
   <BrowserRouter>
   <Switch>
       <Route exact path='/' component={App}/>
       <Route path='/download' component={Download}/>
    </Switch>
    </BrowserRouter>
	
), document.getElementById('root'))
