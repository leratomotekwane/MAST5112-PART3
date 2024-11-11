import React from 'react'; 
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MenuItem } from './App';

interface Props {
  menuItems: MenuItem[];
}

const GuestMenuScreen: React.FC<Props> = ({ menuItems = [] }) => {
  const route = useRoute<RouteProp<{ params: { course: string } }, 'params'>>();
  const { course } = route.params;

  // Safe filter check to avoid crashes
  const filteredItems = menuItems?.filter((item) => item.course === course) || [];

  return (
    <ImageBackground 
      source={('../images/360_F_256812447_OyakdYLJcopoohWIh0ha8UfAm097LCVa.jpg')} // Add your background image here
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>{course} Menu</Text>
        {filteredItems.length > 0 ? (
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemText}>{`${item.name} - $${item.price.toFixed(2)}`}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noItemsText}>No items found for this course.</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay to make content readable
    width: '100%',
    padding: 16,
  },
  header: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '700', // Bold header
    textTransform: 'uppercase',
  },
  itemContainer: {
    backgroundColor: '#444', // Dark background for items
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5, // Adding shadow for depth on Android
  },
  itemTextContainer: {
    flex: 1, // Allows text to fill available space
    paddingRight: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500', // Slightly lighter weight for item name
  },
  noItemsText: {
    color: '#ccc',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f39c12', // Bright button color for contrast
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
    transition: 'all 0.3s', // Smooth transition on hover or press
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GuestMenuScreen;