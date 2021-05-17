import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList,Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  //console.log(addBlogPost)
  //console.log("bbb", addBlogPost)
  //console.log("aaa",blogPosts)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="Add Post"></Button>
      <FlatList
        data={data}
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
