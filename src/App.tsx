import React, { useEffect } from "react";
import Navigator from "src/navigation";

import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";

import AppService from "src/services/AppService";

const App = () => {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await new AppService().init();
  };

  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Navigator />
    </ApplicationProvider>
  );
};

export default App;
