import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {InputBarang} from '../../components';
import {database} from '../../config/FIREBASE';
import {ref, push} from 'firebase/database';

export default class TambahBarang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kode: '',
      nama: '',
      kategori: '',
      harga: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (
      this.state.kode &&
      this.state.nama &&
      this.state.kategori &&
      this.state.harga
    ) {
      const barangReferensi = ref(database, 'Barang');
      const barang = {
        kode: this.state.kode,
        nama: this.state.nama,
        kategori: this.state.kategori,
        harga: this.state.harga,
      };
      push(barangReferensi, barang)
        .then(data => {
          Alert.alert('Success', 'Barang Tersimpan');
          this.props.navigation.replace('Home');
        })
        .catch(error => {
          console.log('Error :', error);
        });
    } else {
      Alert.alert('Error', 'Kode, Nama, Kategori, dan Harga wajib diisi');
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputBarang
          label="Kode"
          placeholder="Masukkan Kode Barang"
          onChangeText={this.onChangeText}
          value={this.state.kode}
          namaState="kode"
        />

        <InputBarang
          label="Nama"
          placeholder="Masukkan Nama Barang"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />

        <InputBarang
          label="Kategori"
          placeholder="Masukkan Kategori Barang"
          onChangeText={this.onChangeText}
          value={this.state.kategori}
          namaState="kategori"
        />

        <InputBarang
          label="Harga"
          placeholder="Masukkan Harga Barang"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.harga}
          namaState="harga"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
