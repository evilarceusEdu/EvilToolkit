import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const YTDL_CardTemplate = () => (
    <Card>
        <CardHeader
            title="YouTube DL"
            subtitle="Download videos from YouTube as several formats."
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardActions>
            <FlatButton label="YouTube DL" />
        </CardActions>
    </Card>
);

export default YTDL_CardTemplate;