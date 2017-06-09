import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {IconButton} from "material-ui";

export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.icon === undefined) {
            this.icon = <IconButton><NavigationMenu/></IconButton>
        }
        else if (this.props.icon === "back") {
            this.icon = <IconButton><NavigationArrowBack/></IconButton>
        }
    }

    render() {
        return (
            <AppBar
                title={this.props.title}
                iconElementLeft={this.icon}
                onLeftIconButtonTouchTap={() => { if(this.props.icon === "back") { window.history.back() }}}
            />
        )
    }
}
