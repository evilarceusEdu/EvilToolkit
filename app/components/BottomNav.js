import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconActionBuild from 'material-ui/svg-icons/action/build'
import IconActionCode from 'material-ui/svg-icons/action/code'
import SwipeableView from 'react-swipeable-views';

const toolIcon = <IconActionBuild>restore</IconActionBuild>;
const codeIcon = <IconActionCode />;

const navStyle = {
    /* Ok, this hack is even worse, but again, DONUT STEEL ( ͡° ͜ʖ ͡°) */
    position: "fixed",
    bottom: "0px",
    right: "10%",
    left: "10%"
};

class BottomNav extends React.Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex} style={navStyle}>
                    <BottomNavigationItem
                        label="Tool"
                        icon={toolIcon}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Source"
                        icon={codeIcon}
                        onTouchTap={() => this.select(1)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BottomNav;