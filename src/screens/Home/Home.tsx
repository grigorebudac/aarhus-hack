import React, { useState } from "react";

import Container from "src/components/Container";
import OptionToggle from "src/components/OptionToggle";

const Home = () => {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <Container scrollable>
      <OptionToggle
        title="Option1"
        description="Option does that"
        active={lightsOn}
        onChange={setLightsOn}
      />
    </Container>
  );
};

export default Home;
