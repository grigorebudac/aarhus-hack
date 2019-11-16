import React from "react";

import { Wrapper, ColorComponent } from "./Color.styles";

const Color = (props: Components.Color) => {
  return (
    <Wrapper onPress={() => props.onPress(props.value)} activeOpacity={0.3}>
      <ColorComponent
        active={props.active}
        value={props.value}
        onPress={() => {}}
      />
    </Wrapper>
  );
};

export default Color;
