import React, { useState } from "react";
import { Image } from "react-native";

import Container from "src/components/Container";
import OptionToggle from "src/components/OptionToggle";
import OptionSlider from "src/components/OptionSlider";
import OptionColor from "src/components/OptionColor";
import Divider from "src/components/Divider";

import AppService from "src/services/AppService";
import { TreeWrapper } from "./Home.styles";

const Home = () => {
  const [lightsOn, setLightsOn] = useState(false);
  const [partyOn, setPartyOn] = useState(false);
  const [brightness, setBrightness] = useState(255);

  const handleTurnLights = (active: boolean) => {
    new AppService().turnLights(active ? 2 : 0);
    setLightsOn(active);
  };

  const handleParty = (active: boolean) => {
    new AppService().turnParty(active);
    setPartyOn(active);
  };

  const handleChangeBrightness = (value: number) => {
    new AppService().changeBrightness(value);
    setBrightness(value);
  };

  const handleChangeColor = (color: string) => {
    new AppService().changeColor(color);
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

      <OptionSlider
        title="Brightness"
        description="Modify the LED's brightness"
        min={5}
        max={225}
        value={brightness}
        onChange={handleChangeBrightness}
      />

      <Divider />

      <OptionColor
        title="Color"
        description="Change the LED's color"
        colors={[
          "rgb(145, 61, 136)",
          "rgb(52, 73, 94)",
          "rgb(30, 130, 76)",
          "rgb(244, 208, 63)",
          "rgb(232, 126, 4)",
          "rgb(103, 128, 159)"
        ]}
        onChange={handleChangeColor}
      />
    </Container>
  );
};

export default Home;
