import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CardTemplate extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.description}
                />
                <CardActions>
                    <FlatButton
                        label={this.props.button}
                        href={this.props.href}
                    />
                </CardActions>
            </Card>
        )
    }
}
