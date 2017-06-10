import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Divider} from "material-ui";

export default class MainDrawer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Drawer open={true}>
                    <MenuItem onTouchTap={() => window.location.href = "/#/ytdl"}>YouTubeDL</MenuItem>
                    <Divider />
                    <MenuItem>Settings</MenuItem>
                    <MenuItem onTouchTap={() => window.location.href = "https://github.com/evilarceusEdu/EvilToolkit"}>GitHub</MenuItem>
                </Drawer>
            </div>
        );
    }
}