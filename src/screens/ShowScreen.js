import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPosts = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  
  return (
    <View>
      <Text style={styles.title}>{blogPosts.title}</Text>
      <Text style={styles.content}>{blogPosts.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <EvilIcons
        name="pencil"
        size={35}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      />
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 10,
  },
});

export default ShowScreen;
