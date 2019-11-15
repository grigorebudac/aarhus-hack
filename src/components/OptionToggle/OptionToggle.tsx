import React from "react";
import { Text, Toggle } from "react-native-ui-kitten";

import SectionTitle from "src/components/SectionTitle";
import { Wrapper, ContentWrapper, ActionWrapper } from "./OptionToggle.styled";

const OptionToggle = (props: Components.OptionToggle) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SectionTitle title={props.title} description={props.description} />
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
