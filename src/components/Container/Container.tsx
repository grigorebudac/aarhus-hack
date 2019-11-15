import React from "react";
import { ScrollViewProps } from "react-native";
import { StyleType } from "react-native-ui-kitten";
import { ScrollableWrapper, Wrapper } from "./Container.styled";

interface IProps {
  children: JSX.Element | JSX.Element[];
  scrollable?: boolean;
  scrollOptions?: ScrollViewProps;
  style?: StyleType;
}

const Container = ({ children, scrollable, scrollOptions, style }: IProps) => {
  return scrollable ? (
    <ScrollableWrapper
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...scrollOptions}
    >
      <Wrapper style={{ ...style }}>{children}</Wrapper>
    </ScrollableWrapper>
  ) : (
    <Wrapper style={{ ...style }}>{children}</Wrapper>
  );
};

export default Container;
