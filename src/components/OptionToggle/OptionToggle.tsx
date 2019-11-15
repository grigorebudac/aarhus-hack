import React from "react";
import { Text, Toggle } from "react-native-ui-kitten";

import { Wrapper, ContentWrapper, ActionWrapper } from "./OptionToggle.styled";

const OptionToggle = (props: Components.OptionToggle) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text category="label">{props.title}</Text>
        <Text category="c2" appearance="hint">
          {props.description}
        </Text>
      </ContentWrapper>

      <ActionWrapper>
        <Toggle
          checked={props.active}
          size="medium"
          onChange={props.onChange}
        />
      </ActionWrapper>
    </Wrapper>
  );
};

export default OptionToggle;
