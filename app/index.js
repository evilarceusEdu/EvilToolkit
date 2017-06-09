import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, HashRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';
/* Import pages */
import YtDl from './pages/YtDl';
import App from './pages/App'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const contentStyle = {
    /* WORST HACKER EVER - DONUT STEEL ( ͡° ͜ʖ ͡°) */
    marginLeft: '256px'
};



ReactDOM.render((
    <HashRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/ytdl" component={YtDl}/>
        </div>
    </HashRouter>
), document.getElementById('root'));