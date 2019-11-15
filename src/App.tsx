import React from "react";
import Navigator from "src/navigation";

import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Navigator />
    </ApplicationProvider>
  );
};

export default App;
