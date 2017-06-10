import React from "react";
import {MuiThemeProvider} from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from "../components/TitleBar";
import * as Config from "../Config";
import MainDrawer from "../components/MainDrawer";
import CardTemplate from "../components/CardTemplate";
import BottomNav from "../components/BottomNav";

const contentStyle = {
    /* WORST HACK EVER - DONUT STEEL ( ͡° ͜ʖ ͡°) */
    marginLeft: '256px'
};

export default class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(Config.theme.default)}>
                <div>
                    <MainDrawer />
                    <div className="content" style={contentStyle}>
                        <TitleBar title="EvilToolkit"/>
                        <BottomNav>
                            <div className="tool">
                                <CardTemplate
                                    title="YouTubeDL"
                                    description="Allows you to download YouTube videos into several formats (MP4, MP3, etc.)"
                                    button="YouTubeDL"
                                    href="/#/ytdl"
                                />
                            </div>
                            <div className="source">
                                <h1>Not implemented!</h1>
                            </div>
                        </BottomNav>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    };
}