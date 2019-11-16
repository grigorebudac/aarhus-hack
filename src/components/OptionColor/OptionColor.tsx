import React from "react";

import Color from "src/components/Color";
import SectionTitle from "src/components/SectionTitle";

import { Wrapper, ColorsWrapper, ColorColumn } from "./OptionColor.styles";

const OptionColor = (props: Components.OptionColor) => {
  return (
    <Wrapper>
      <SectionTitle title={props.title} description={props.description} />

      <ColorsWrapper>
        {props.colors.map((color, index) => (
          <ColorColumn key={index}>
            <Color value={color} onPress={props.onChange} />
          </ColorColumn>
        ))}
      </ColorsWrapper>
    </Wrapper>
  );
};

export default OptionColor;
