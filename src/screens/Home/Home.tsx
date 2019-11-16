import React, { useState } from "react";
import { Image, View } from "react-native";

import Container from "src/components/Container";
import OptionToggle from "src/components/OptionToggle";
import OptionSlider from "src/components/OptionSlider";
import Divider from "src/components/Divider";

import AppService from "src/services/AppService";
import { TreeWrapper } from "./Home.styles";

const Home = () => {
  const [lightsOn, setLightsOn] = useState(false);
  const [partyOn, setPartyOn] = useState(false);
  const [distanceOpacity, setDistanceOpacity] = useState(false);
  const [distance, setDistance] = useState(10);
  const [opacity, setOpacity] = useState(100);

  const handleTurnLights = (active: boolean) => {
    new AppService().turnLights(active);
    setLightsOn(active);
  };

  const handleParty = (active: boolean) => {
    new AppService().turnParty(active);
    setPartyOn(active);
  };

  const handleTurnDistanceOpacity = (active: boolean) => {
    setDistanceOpacity(active);
  };

  const handleChangeDistance = (value: number) => {
    setDistance(value);
  };

  const handleChangeOpacity = (value: number) => {
    setOpacity(value);
  };

  return (
    <Container scrollable>
      <TreeWrapper>
        <Image source={require("src/assets/tree.png")} />
      </TreeWrapper>

      <OptionToggle
        title="Lights"
        description="Toggle the tree's lights"
        active={lightsOn}
        onChange={handleTurnLights}
      />

      <Divider />

      <OptionToggle
        title="Party mode"
        description="Get some fun having a party"
        active={partyOn}
        onChange={handleParty}
      />

      <Divider />

      <OptionToggle
        title="Power save"
        description="Adjust the tree's brightness based on distance"
        active={distanceOpacity}
        onChange={handleTurnDistanceOpacity}
      />

      <Divider />

      <OptionSlider
        title="Distance"
        description="Adjust the distance required to toggle lights"
        min={0}
        max={13}
        value={distance}
        onChange={handleChangeDistance}
      />

      {!distanceOpacity ? (
        <>
          <Divider />

          <OptionSlider
            title="Opacity"
            description="Modify the LED's opacity"
            min={0}
            max={225}
            value={opacity}
            onChange={handleChangeOpacity}
          />
        </>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Home;
