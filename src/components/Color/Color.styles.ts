import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity``;

export const ColorComponent = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${(props: Components.Color) => props.value};
  border-radius: 50px;
  opacity: ${(props: Components.Color) => (props.active ? 0.3 : 1)};
`;
