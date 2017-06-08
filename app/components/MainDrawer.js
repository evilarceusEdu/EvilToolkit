import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MainDrawer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Drawer open={true}>
                    <MenuItem>YouTubeDL</MenuItem>
                    <MenuItem>Settings</MenuItem>
                </Drawer>
            </div>
        );
    }
}