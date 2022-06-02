import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceListScreen from "./screens/PlaceListScreen";
import colors from "./assets/Colors/Colors";
import commonStyles from "./assets/Styles/CommonStyles";
import { NativeBaseProvider, Text, Box } from "native-base";
import NewPlaceScreen from "./screens/NewPlaceScreen";
import store from "./store/store";
import { Provider } from "react-redux";
import PlaceDetailScreen from "./screens/PlaceDetailScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen
                name="PlaceList"
                component={PlaceListScreen}
                options={{
                  title: "Places",
                  ...commonStyles.defaultHeaderStyle,
                }}
              />
              <Stack.Screen
                name="placeDetails"
                component={PlaceDetailScreen}
                options={{
                  title: "Place Details",
                  ...commonStyles.defaultHeaderStyle,
                }}
              />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }}>
              <Stack.Screen
                name="NewPlace"
                component={NewPlaceScreen}
                options={{
                  title: "New Place",
                  ...commonStyles.defaultHeaderStyle,
                }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
