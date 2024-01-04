import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import StackNavigator from "./navigation/StackNavigator";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      try {
        await loadAsync({
          // bold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
          bold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
          italic: require("./assets/fonts/PlayfairDisplay-Italic.ttf"),
          black: require("./assets/fonts/PlayfairDisplay-Black.ttf"),
          medium: require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
          regular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
          semiBold: require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
        });
        setFontsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    }
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
  );
}
