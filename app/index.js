import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, HashRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';
/* Import components */
import MainTheme from './components/MainTheme';
import TitleBar from './components/TitleBar';
import CardTemplate from "./components/CardTemplate";
/*-------------------*/

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
        <MuiThemeProvider muiTheme={getMuiTheme(MainTheme)}>
            <div>
                <TitleBar />
                <CardTemplate/>
            </div>
        </MuiThemeProvider>
);

const YtDl = () => (
    console.log("unimplemented")
);

ReactDOM.render((
<HashRouter>
    <div>
        <Route path="/" component={App}/>
        <Route path="/ytdl" component={YtDl}/>
    </div>
</HashRouter>
), document.getElementById('root'));