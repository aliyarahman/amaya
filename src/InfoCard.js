import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./App.css";


export default function InfoCard(leadIn, headline) {

  return (
    <Card className="promptCard">
        <CardContent>
            <Typography variant="h5">
                {leadIn}
            </Typography>
            <Typography variant="h2">
                {headline}
            </Typography>
        </CardContent>
        <CardActions>

        </CardActions>
    </Card>
  );
}