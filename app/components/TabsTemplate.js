import React from "react";
import {Tab, Tabs} from "material-ui";
import SwipeableViews from "react-swipeable-views";

export default class TabsTemplate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Tool" value={0}/>
                    <Tab label="Source" value={1}/>
                </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}
                    >
                        {React.Children.map(this.props.children, (element, idx) => {
                            return React.cloneElement(element, { ref: idx });
                        })}
                    </SwipeableViews>

            </div>
        );
    }
}