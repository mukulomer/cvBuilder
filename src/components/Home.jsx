import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Actors from "./Actors";
import Awards from "./Awards";
import AwardDetails from "./AwardDetails";
import MovieDetails from "./MovieDetails";
import Movies from "./Movies";

export default function Home(props) {
  if (!props.display) {
    return null;
  }

  return (
    <Box display="flex">
      <Box width={"20%"}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem component={Link} to="/home/movies">
            <ListItemText primary="Movies"></ListItemText>
          </ListItem>
          <ListItem component={Link} to="/home/actors">
            <ListItemText primary="Actors"></ListItemText>
          </ListItem>
          <ListItem component={Link} to="/home/awards">
            <ListItemText primary="Awards"></ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box width={"80%"}>
        <Switch>
          <Route path="/home/awards/details" component={AwardDetails} />
          <Route path="/home/movies/:id" component={MovieDetails} />
          <Route path="/home/movies" component={Movies} />
          <Route path="/home/actors" component={Actors} />
          <Route path="/home/awards" component={Awards} />
        </Switch>
      </Box>
    </Box>
  );
}
