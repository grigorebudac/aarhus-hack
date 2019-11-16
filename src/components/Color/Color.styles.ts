import styled from "styled-components/native";

export const ColorComponent = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${(props: Components.OptionColor) => props.value};
  border-radius: 50px;
`;
