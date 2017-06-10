import React from "react";
import {MuiThemeProvider} from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from "../components/TitleBar";
import * as Config from "../Config";
import MainDrawer from "../components/MainDrawer";
import BottomNav from "../components/BottomNav";

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
                        <TitleBar title="YouTubeDL" icon="back" />
                        <BottomNav>
                            <div className="tool">

                            </div>
                            <div className="source">
                                <h1>Not implemented!</h1>
                            </div>
                        </BottomNav>
                    </div>
                </div>
            </MuiThemeProvider>
        )};
};
