import React, { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import store from "../store";

const TopBar = () => {
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    store.load("todo.json");
  };
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
    </Grid>
  );
};

export default TopBar;
