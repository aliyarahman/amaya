import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./App.css";


export default function QuestionCard() {

  return (
    <Card className="questionCard">
        <CardContent>
            <Typography variant="h5">
            I was also wondering...
            </Typography>
            <Typography variant="h2">
                What's whistling, anyway?
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">You put your lips together and blow!</Button>
        </CardActions>
    </Card>
  );
}