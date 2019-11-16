import React from "react";

import { ColorComponent } from "./Color.styles";

const Color = (props: Components.Color) => {
  return (
    <ColorComponent
      onPress={() => props.onPress(props.value)}
      value={props.value}
    />
  );
};

export default Color;
