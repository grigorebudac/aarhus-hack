import React, { useState } from "react";

import Color from "src/components/Color";
import SectionTitle from "src/components/SectionTitle";

import { Wrapper, ColorsWrapper, ColorColumn } from "./OptionColor.styles";

const OptionColor = (props: Components.OptionColor) => {
  const [activeColor, setActiveColor] = useState<string>("");

  const handleColorPress = (color: string) => {
    if (color === activeColor) {
      color = "";
    }

    setActiveColor(color);
    return props.onChange(color);
  };

  return (
    <Wrapper>
      <SectionTitle title={props.title} description={props.description} />

      <ColorsWrapper>
        {props.colors.map((color, index) => (
          <ColorColumn key={index}>
            <Color
              value={color}
              onPress={handleColorPress}
              active={activeColor === color}
            />
          </ColorColumn>
        ))}
      </ColorsWrapper>
    </Wrapper>
  );
};

export default OptionColor;
