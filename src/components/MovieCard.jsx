import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

export default function MovieCard({
  poster,
  title,
  rating,
  plot,
  navigateToDetailsPage
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={poster} title={title} />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Rating
              name="read-only"
              value={rating}
              precision={0.1}
              max={10}
              size="small"
              readOnly
            />
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
            {plot.substring(0, 200) + "...."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Review
        </Button>

        <Button size="small" color="primary" onClick={navigateToDetailsPage}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}
