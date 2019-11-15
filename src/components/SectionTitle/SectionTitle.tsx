import React from "react";
import { Text } from "react-native-ui-kitten";

const SectionTitle = (props: Components.SectionTitle) => {
  return (
    <>
      <Text category="label">{props.title}</Text>
      <Text category="c2" appearance="hint">
        {props.description}
      </Text>
    </>
  );
};

export default SectionTitle;
