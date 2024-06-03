import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {database} from '../../config/FIREBASE';
import {ref, onValue} from 'firebase/database';

export default class DetailBarang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barang: {},
    };
  }

  componentDidMount() {
    const barangRef = ref(database, 'Barang/' + this.props.route.params.id);
    onValue(barangRef, snapshot => {
      const data = snapshot.val() ? snapshot.val() : {};
      const barangItem = {...data};

      this.setState({
        barang: barangItem,
      });
    });
  }
  render() {
    const {barang} = this.state;
    return (
      <View style={styles.pages}>
        <Text>Kode : </Text>
        <Text style={styles.text}>{barang.kode}</Text>

        <Text>Nama : </Text>
        <Text style={styles.text}>{barang.nama}</Text>

        <Text>Kategori : </Text>
        <Text style={styles.text}>{barang.kategori}</Text>

        <Text>Harga : </Text>
        <Text style={styles.text}>{barang.harga}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    padding: 20,
    margin: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
