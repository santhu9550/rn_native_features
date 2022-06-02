import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PlaceDetailScreen(props) {
  const { route, navigation } = props;
  const { id, createdDate, title } = route?.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation]);

  return (
    <View>
      <Text>PlaceDetailScreen</Text>
      <Text>{id}</Text>
      <Text>{createdDate}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
