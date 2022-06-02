import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  FormControl,
  Icon,
  IconButton,
  Input,
  Stack,
  WarningOutlineIcon
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { createNewPlace } from "../store/actions/placesActions";

export default function NewPlaceScreen(props) {
  const { navigation } = props;
  const [newPlace, setNewPlace] = React.useState({
    title: "",
    titleError: false,
  });
  const dispatch = useDispatch();
 

  const saveHandler = () => {
    dispatch(createNewPlace(newPlace?.title));
    console.log(newPlace?.title);
    navigation.navigate("PlaceList");
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={<Icon as={Ionicons} name="save" size={8} variant="solid" />}
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
          onPress={saveHandler}
        />
      ),
    });
  }, [navigation, newPlace]);

  const updateNewPlace = React.useCallback(
    (val) => {
      setNewPlace({ title: val, titleError: val?.length < 3 });
    },
    [newPlace]
  );

  return (
    <Box alignItems="center">
      <Box w="100%">
        <FormControl isRequired isInvalid={newPlace?.titleError}>
          <Stack mx="3">
            <FormControl.Label>Title</FormControl.Label>
            <Input
              type="text"
              placeholder="Enter Title"
              onChangeText={updateNewPlace}
              value={newPlace?.title}
            />
            {!newPlace?.titleError && (
              <FormControl.HelperText>
                Must be atleast 3 characters.
              </FormControl.HelperText>
            )}
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 3 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
