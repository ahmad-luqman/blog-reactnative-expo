import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPosts = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  
  return (
    <View>
      <Text>{blogPosts.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;