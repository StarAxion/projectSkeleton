import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import Popular from './Popular';
import Battle from './Battle';
import Results from './Results';
import Nav from './Nav';

const App = () => (
    <Router>
        <div className='container'>
            <Nav /> 
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/battle' component={Battle} />
                <Route exact path='/battle/results' component={Results} />
                <Route exact path='/popular' component={Popular} />
                <Route render={() => <p>Page Not Found</p>} />
            </Switch>
        </div>
    </Router>
)

export default App;