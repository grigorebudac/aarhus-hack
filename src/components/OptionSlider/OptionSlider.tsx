import React from "react";

import SectionTitle from "src/components/SectionTitle";
import { Wrapper, Slider } from "./OptionsSlider.styles";

const OptionSlider = (props: Components.OptionSlider) => {
  return (
    <Wrapper>
      <SectionTitle title={props.title} description={props.description} />

      <Slider
        value={props.value}
        minimumValue={props.min}
        maximumValue={props.max}
        onSlidingComplete={props.onChange}
        minimumTrackTintColor="rgb(51, 102, 255)"
        maximumTrackTintColor="rgba(51, 102, 255, 0.5)"
        thumbTintColor="rgb(51, 102, 255)"
        step={1}
      />
    </Wrapper>
  );
};

export default OptionSlider;
