import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PRODUCTS } from '../../data/products';

export default function ProductsScreen() {
  const router = useRouter();

  const handleProductPress = (id: string) => {
    // Navigation vers le détail du produit
    router.push(`/products/${id}`);
  };

  const renderProductCard = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => handleProductPress(item.id)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.rating}>{item.rating.rate} ⭐ {item.rating.count}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        scrollEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  rating: {
    fontSize: 14,
    color: '#FFA500',
  },
});