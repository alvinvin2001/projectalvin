import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const CardBarang = ({id, barangItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailBarang', {id: id})}>
      <View>
        <Text style={styles.kode}>{barangItem.kode}</Text>
        <Text style={styles.nama}>{barangItem.nama}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditBarang', {id: id})}>
          <FontAwesomeIcon
            style={{marginHorizontal: 5}}
            icon={faEdit}
            color="green"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeData(id)}>
          <FontAwesomeIcon
            style={{marginHorizontal: 5}}
            icon={faTimes}
            color="red"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CardBarang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  kode: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nama: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
