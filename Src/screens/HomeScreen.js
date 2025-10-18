import React from 'react';
import { View, Text, FlatList, StyleSheet,  } from 'react-native';
import { songData } from '../../data/SongData';
import SongCard from '../../components/SONGCARD';
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        contentContainerStyle={{ padding: 8 }}
        data={songData}
        renderItem={({ item }) => (
          <SongCard navigation={navigation} lagu={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 12,
  },
});

export default HomeScreen;
