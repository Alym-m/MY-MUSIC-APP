import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SongCard = ({ navigation, lagu }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: lagu.imageLink }} />
      <View style={styles.container}>
        <Text style={styles.title}>{lagu.title}</Text>
        <Text style={styles.title}>{lagu.singer}</Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.touchableopacity}
            onPress={() => navigation.navigate('Detail', { item: lagu })}>
            <Text> See Details </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 8,
    marginBottom: 8,
  },
  containerButton: {
    alignItems: 'Baseline',
    margin: 8,
  },
  touchableopacity: {
    padding: 8,
    borderEndWidth: 1,
    borderCurve: 10,
    borderColor: '#A6A6BD',
  },
  stylebuttontext: {
    textDecorationColor: 0,
  },
});
