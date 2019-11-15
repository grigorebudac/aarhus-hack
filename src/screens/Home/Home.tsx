import React, { useState } from "react";

import Container from "src/components/Container";
import OptionToggle from "src/components/OptionToggle";
import Divider from "src/components/Divider";

import AppService from "src/services/AppService";

const Home = () => {
  const [lightsOn, setLightsOn] = useState(false);

  const handleTurnLights = (active: boolean) => {
    new AppService().turnLights(active);
    setLightsOn(active);
  };

  return (
    <Container scrollable>
      <OptionToggle
        title="Lights"
        description="Turn the tree's lights"
        active={lightsOn}
        onChange={handleTurnLights}
      />

      <Divider />
    </Container>
  );
};

export default Home;
