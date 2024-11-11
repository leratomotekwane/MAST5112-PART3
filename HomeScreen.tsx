import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

// Menu items for the screen
interface MenuItem {
  id: string;
  name: string;
  course: string;
  price: number;
}

interface Props {
  menuItems: MenuItem[];
}

// Example Menu Items
const exampleMenuItems: MenuItem[] = [
  { id: '1', name: 'Garlic Bread', course: 'Starters', price: 5.00 },
  { id: '2', name: 'Caesar Salad', course: 'Starters', price: 7.50 },
  { id: '9', name: 'Bruschetta', course: 'Starters', price: 6.00 },
  { id: '10', name: 'Stuffed Mushrooms', course: 'Starters', price: 8.00 },
  { id: '3', name: 'Grilled Chicken', course: 'Mains', price: 15.00 },
  { id: '4', name: 'Beef Burger', course: 'Mains', price: 12.00 },
  { id: '5', name: 'Pasta Primavera', course: 'Mains', price: 10.00 },
  { id: '11', name: 'Steak Frites', course: 'Mains', price: 20.00 },
  { id: '12', name: 'Chicken Parmesan', course: 'Mains', price: 16.50 },
  { id: '6', name: 'Cheesecake', course: 'Desserts', price: 6.50 },
  { id: '7', name: 'Chocolate Cake', course: 'Desserts', price: 7.00 },
  { id: '8', name: 'Fruit Salad', course: 'Desserts', price: 5.50 },
  { id: '13', name: 'Chocolate Mousse', course: 'Desserts', price: 6.00 },
  { id: '14', name: 'Tiramisu', course: 'Desserts', price: 7.50 },
];

const HomeScreen: React.FC<Props> = ({ menuItems = exampleMenuItems }) => {
  const navigation = useNavigation();
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const calculateAveragePrice = (course: string) => {
    const filteredItems = menuItems.filter(item => item.course === course);
    const totalPrice = filteredItems.reduce((acc, item) => acc + item.price, 0);
    return filteredItems.length ? (totalPrice / filteredItems.length).toFixed(2) : '0.00';
  };

  const navigateToCourse = (course: string) => {
    if (course) {
      navigation.navigate('Guest Menu', { course });
      setSelectedCourse('');
    }
  };

  return (
    <ImageBackground
      source={{ uri: '../images/360_F_256812447_OyakdYLJcopoohWIh0ha8UfAm097LCVa.jpg' }} // Replace with your own image URL
      style={styles.container}
    >
      <View style={styles.overlay}>
        {/* Grouped header and average price display */}
        <View style={styles.averagePriceSection}>
          <Text style={styles.header}>Average Menu Prices</Text>
          <View style={styles.averagePriceContainer}>
            <Text style={styles.averagePriceText}>Starters: ${calculateAveragePrice('Starters')}</Text>
            <Text style={styles.averagePriceText}>Mains: ${calculateAveragePrice('Mains')}</Text>
            <Text style={styles.averagePriceText}>Desserts: ${calculateAveragePrice('Desserts')}</Text>
          </View>
        </View>

        {/* Dropdown for course selection */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select a Course:</Text>
          <Picker
            selectedValue={selectedCourse}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSelectedCourse(itemValue);
              if (itemValue) navigateToCourse(itemValue);
            }}
          >
            <Picker.Item label="Choose a course..." value="" />
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Mains" value="Mains" />
            <Picker.Item label="Desserts" value="Desserts" />
          </Picker>
        </View>

        {/* Button to navigate to Manage Menu */}
        <TouchableOpacity style={styles.manageButton} onPress={() => navigation.navigate('Manage Menu')}>
          <Text style={styles.buttonText}>Manage Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay for contrast
    borderRadius: 10,
    padding: 16,
    width: '100%',
    height: '100%',
  },
  averagePriceSection: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  averagePriceContainer: {
    alignItems: 'center',
  },
  averagePriceText: {
    color: '#fff',
    fontSize: 22,
    marginVertical: 5,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  pickerContainer: {
    width: '80%',
    backgroundColor: '#555',
    borderRadius: 10,
    marginBottom: 30,
    padding: 12,
  },
  pickerLabel: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  picker: {
    color: '#fff',
    fontSize: 16,
    height: 40,
  },
  manageButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5, // Adding shadow for 3D effect
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default HomeScreen;