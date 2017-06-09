import React from "react";
import {MuiThemeProvider} from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from "../components/TitleBar";
import * as Config from "../Config";
import MainDrawer from "../components/MainDrawer";

const contentStyle = {
    /* WORST HACK EVER - DONUT STEEL ( ͡° ͜ʖ ͡°) */
    marginLeft: '256px'
};

export default class YtDl extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(Config.theme.ytdl)}>
                <div>
                    <MainDrawer />
                    <div className="content" style={contentStyle}>
                        <TitleBar title="YouTubeDL" />
                    </div>
                </div>
            </MuiThemeProvider>
        )};
};
