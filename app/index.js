import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, HashRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';
/* Import components */
import MainTheme from './components/MainTheme';
import MainTheme_Dark from './components/MainTheme_Dark';
import TitleBar from './components/TitleBar';
import CardTemplate from "./components/CardTemplate";
import MainDrawer from "./components/MainDrawer";
/*-------------------*/

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const contentStyle = {
    /* WORST HACKER EVER - DONUT STEEL ( ͡° ͜ʖ ͡°) */
    marginLeft: '18.5%'
};

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(MainTheme.default)}>
        <div>
            <MainDrawer />
            <div className="content" style={contentStyle}>
                <TitleBar title="EvilToolkit"/>
                <CardTemplate
                    title="YouTubeDL"
                    description="Allows you to download YouTube videos into several formats (MP4, MP3, etc.)"
                    button="YouTubeDL"
                    href="/#/ytdl"
                />
            </div>
        </div>
    </MuiThemeProvider>
);

const YtDl = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(MainTheme.ytdl)}>
        <div>
            <MainDrawer />
            <div className="content" style={contentStyle}>
                <TitleBar title="YouTubeDL" />
            </div>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render((
    <HashRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/ytdl" component={YtDl}/>
        </div>
    </HashRouter>
), document.getElementById('root'));