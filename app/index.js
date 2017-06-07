import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
/* Import components */
import TitleBar from './components/TitleBar';
import YTDL_CardTemplate from "./components/CardTemplate";
/*-------------------*/

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <div>
            <TitleBar />
            <YTDL_CardTemplate/>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
<App />,
    document.getElementById('root')
);