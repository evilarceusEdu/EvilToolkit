import React from "react";
import {Dialog, FlatButton, MuiThemeProvider, RaisedButton, TextField} from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Config from "../Config";
import {BottomNav, MainDrawer, Styles, TitleBar} from '../components';


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

    getVideo = () => {
        var videoId;
        var inputValue = this.state.inputValue;
        // Remove www from link
        if (inputValue.includes("www.")) {
            inputValue = inputValue.replace("www.", "")
        }
        var ytLink = "https://youtube.com/watch?v=";

        if (inputValue.includes(ytLink)) {
            videoId = inputValue.replace(ytLink, "");

            // Remove any extra parameters from the videoId
            if (videoId.includes("&")) {
                videoId.substring(0, videoId.indexOf("&"))
            }
            // Show embedded video to user
            this.setState({youtubeVideoId: videoId});
            this.showEmbededVideo();

        } else this.handleDialogOpen();

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/scripts/ytdl", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("videoId", videoId);
        xhr.responseType = "blob";
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var filename = xhr.getResponseHeader('Content-Disposition').replace("attachment; filename=", "");
                var downloadUrl = URL.createObjectURL(xhr.response);
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                a.href = downloadUrl;
                a.download = filename;
                a.click();
            }
        };
        xhr.send();
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
                                    <RaisedButton label="Submit" primary={true} onClick={this.getVideo}/>
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
