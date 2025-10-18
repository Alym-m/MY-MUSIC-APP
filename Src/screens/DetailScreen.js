import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: item.imageLink }} />
      <Text style={styles}>Title:{item.title}</Text>
      <Text style={styles.singer}>Singer:{item.singer}</Text>
      <Text style={styles.description}>Description:</Text>
      <Text style={styles}>Year:{item.year}</Text>
      <Text style={styles}>SongWriter:{item.songwriters}</Text>
      <Text style={styles}>Genre:{item.genre}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  singer: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailScreen;
