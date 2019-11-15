import React, { useState } from "react";
import { Image } from "react-native";

import Container from "src/components/Container";
import OptionToggle from "src/components/OptionToggle";
import Divider from "src/components/Divider";

import AppService from "src/services/AppService";
import { TreeWrapper } from "./Home.styles";

const Home = () => {
  const [lightsOn, setLightsOn] = useState(false);
  const [partyOn, setPartyOn] = useState(false);

  const handleTurnLights = (active: boolean) => {
    new AppService().turnLights(active);
    setLightsOn(active);
  };

  const handleParty = (active: boolean) => {
    new AppService().turnParty(active);
    setPartyOn(active);
  };

  return (
    <Container scrollable>
      <TreeWrapper>
        <Image source={require("src/assets/tree.png")} />
      </TreeWrapper>

      <OptionToggle
        title="Lights"
        description="Turn the tree's lights"
        active={lightsOn}
        onChange={handleTurnLights}
      />

      <Divider />

      <OptionToggle
        title="Party Mode"
        description="Get some fun having a party"
        active={partyOn}
        onChange={handleParty}
      />

      <Divider />
    </Container>
  );
};

export default Home;
