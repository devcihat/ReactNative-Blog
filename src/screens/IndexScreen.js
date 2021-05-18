import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList,Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  //console.log(addBlogPost)
  //console.log("bbb", addBlogPost)
  //console.log("aaa",blogPosts)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="Add Post"></Button>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
