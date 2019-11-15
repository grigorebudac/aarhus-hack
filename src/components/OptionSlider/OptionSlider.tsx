import React from "react";

import SectionTitle from "src/components/SectionTitle";
import { Wrapper, Slider } from "./OptionsSlider.styles";

const OptionSlider = () => {
  return (
    <Wrapper>
      <SectionTitle title="Change distance" description="Text here" />
      <Slider
        minimumValue={0}
        maximumValue={13}
        minimumTrackTintColor="rgb(51, 102, 255)"
        maximumTrackTintColor="rgb(51, 102, 255)"
        thumbTintColor="rgb(51, 102, 255)"
      />
    </Wrapper>
  );
};

export default OptionSlider;
