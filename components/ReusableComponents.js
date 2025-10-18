import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
const ReusableComponent = ({ reusablecomponent }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: lagu.imageLink }} />
      <View style={styles.container}>
        <Text style={styles.title}>{reusablecomponent.title}</Text>
        <Text style={styles.title}>{reusablecomponent.singer}</Text>
        <Text style={styles.title}>{reusablecomponent.year}</Text>
        <Text style={styles.title}>{reusablecomponent.songwriters}</Text>
        <Text style={styles.title}>{reusablecomponent.genre}</Text>
        <View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
  },
  reusableContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reusableTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#4A90E2',
  },
  reusableText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  ratingWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  ratingLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  ratingValue: {
    color: '#666',
    fontSize: 14,
  },
});
