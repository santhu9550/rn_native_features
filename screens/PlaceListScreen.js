import { StyleSheet } from "react-native";
import React from "react";
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/Colors/Colors";
import { useSelector } from "react-redux";

export default function PlaceListScreen(props) {
  const { navigation } = props;
  const placeListState = useSelector((state) => state?.placesReducer?.list);
  const { loading, data: listData } = placeListState;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={<Icon as={Ionicons} name="add" size={8} variant="solid" />}
          borderRadius="full"
          _icon={{
            color: "#fff",
          }}
          _hover={{
            bg: "#639ebf",
          }}
          _pressed={{
            bg: "#639ebf",
          }}
          onPress={() => navigation.navigate("NewPlace")}
        />
      ),
    });
  }, [navigation]);
  return (
    <Box>
      {listData?.length > 0 && (
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("placeDetails", item)}
            >
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.title}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {String(item.createdDate)}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
