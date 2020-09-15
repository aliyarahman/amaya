import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./App.css";


export default function SingleButtonCard(leadIn, headline, buttonText) {

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
            <Button size="large">{buttonText}</Button>
        </CardActions>
    </Card>
  );
}