import React from 'react';
import { Text, View, Image, TouchableOpacity, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { Form } from '../../components/Form';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => BackHandler.exitApp()}>
          <Ionicons style={styles.icon} name="ios-arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Formulário</Text>
      </View>
      <View style={styles.content}>
        <Form />
      </View>
    </View>
  );
};

export default Home;
