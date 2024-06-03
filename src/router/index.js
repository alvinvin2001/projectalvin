import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, TambahBarang, DetailBarang, EditBarang} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahBarang"
        component={TambahBarang}
        options={{title: 'Tambah Barang'}}
      />
      <Stack.Screen
        name="DetailBarang"
        component={DetailBarang}
        options={{title: 'Detail Barang'}}
      />
      <Stack.Screen
        name="EditBarang"
        component={EditBarang}
        options={{title: 'Edit Barang'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
