import React from "react";
import {Dialog, FlatButton, MuiThemeProvider, RaisedButton, TextField} from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Config from "../Config";
import {BottomNav, MainDrawer, Styles, TitleBar} from '../components'

class Embed extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.videoId} allowfullscreen></iframe>
        )
    }
}

export default class YtDl extends React.Component {
    constructor() {
        super();
        this.state = {
            showEmbed: false,
            inputValue: "",
            youtubeVideoId: "",
            dialogOpen: false
        };
    }

    getEmbededVideo = () => {
        if (this.state.inputValue.includes("v=")) {
            this.setState({youtubeVideoId: this.state.inputValue.substring(this.state.inputValue.indexOf("v=")).replace("v=", "")});
            if (this.state.inputValue.includes("&")) {
                this.setState({
                    youtubeVideoId: this.state.inputValue.substring(this.state.inputValue.indexOf("v="), this.state.inputValue.indexOf("&")).replace("v=", "")
                })
            }
            this.showEmbededVideo();
        } else this.handleDialogOpen();

    };

    showEmbededVideo = () => {
        this.setState({showEmbed: true});
    };

    updateInputValue = (evt) => {
        this.setState({inputValue: evt.target.value});
    };

    handleDialogOpen = () => {
        this.setState({open: true});
    };

    handleDialogClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleDialogClose}
            />
        ];

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(Config.theme.ytdl)}>
                <div>
                    <MainDrawer />
                    <div className="content" style={Styles.contentStyle}>
                        <TitleBar title="YouTubeDL" icon="back" />
                        <BottomNav>
                            <div className="tool">
                                <div className="video" style={{textAlign: "center", margin: "auto", width: "560px", height: "315px"}}>
                                    { this.state.showEmbed ? <Embed videoId={this.state.youtubeVideoId} /> : null}
                                </div>
                                <div className="centerAlign" style={{textAlign: "center"}}>
                                    <TextField
                                        hintText="YouTube URL"
                                        style={{width: "50%"}}
                                        value={this.state.inputValue}
                                        onChange={this.updateInputValue}
                                    />
                                    <RaisedButton label="Submit" primary={true} onClick={this.getEmbededVideo}/>
                                </div>
                                <Dialog
                                    title="YouTubeDL"
                                    actions={actions}
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleDialogClose}
                                >
                                    Please enter a valid YouTube URL (ex. https://www.youtube.com/watch?v=[videoID])
                                </Dialog>
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
