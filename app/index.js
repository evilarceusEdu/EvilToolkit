import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
<MuiThemeProvider>
    <AppBar
        title="EvilToolkit"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    </MuiThemeProvider>
);

ReactDOM.render(
<App />,
    document.getElementById('root')
);