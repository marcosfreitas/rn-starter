import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Dracula Theme</Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={
                () => {
                    props.navigation.navigate('Components');
                }
            }
          >
            <Button
                title="Go to Components Demo"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={
                () => {
                    props.navigation.navigate('List');
                }
            }
          >
            <Button
                title="My friend list"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={
                () => {
                    props.navigation.navigate('Image');
                }
            }
          >
            <Button
                title="Image Screen"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={
                () => {
                    props.navigation.navigate('Counter');
                }
            }
          >
            <Button
                title="Counter"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={
                () => {
                    props.navigation.navigate('Colorize');
                }
            }
          >
            <Button
                title="Colorize"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={
                () => {
                    props.navigation.navigate('RGB');
                }
            }
          >
            <Button
                title="RGB"
            />
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: '#282a36'
  },
  title: {
    fontSize: 40,
    color: '#ff79c6',
    fontWeight: "700"
  },
  buttons: {
      marginVertical: 10,
      borderRadius: 2
  }
});

export default HomeScreen;
