import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {database} from '../../config/FIREBASE';
import {getDatabase, ref, onValue, remove} from 'firebase/database';
import {CardBarang} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barangs: {},
      barangsKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    const barangRef = ref(database, 'Barang');
    onValue(barangRef, snapshot => {
      const data = snapshot.val() ? snapshot.val() : {};
      const barangItem = {...data};

      this.setState({
        barangs: barangItem,
        barangsKey: Object.keys(barangItem),
      });
    });
  };

  removeData = id => {
    Alert.alert('Info', 'Anda yakin ingin menghapus data Barang?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          const database = getDatabase();
          const itemRef = ref(database, 'Barang/' + id);
          remove(itemRef)
            .then(() => {
              this.ambilData();
              Alert.alert('Hapus', 'Sukses Hapus Data');
            })
            .catch(error => {
              console.error('Error removing document: ', error);
            });
        },
      },
    ]);
  };

  render() {
    const {barangs, barangsKey} = this.state;
    return (
      <SafeAreaView style={styles.page}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Daftar Barang</Text>
            <View style={styles.garis}></View>
          </View>

          <View style={styles.listBarang}>
            {barangsKey.length > 0 ? (
              barangsKey.map(key => (
                <CardBarang
                  key={key}
                  barangItem={barangs[key]}
                  id={key}
                  {...this.props}
                  removeData={this.removeData}
                />
              ))
            ) : (
              <Text> Daftar Kosong </Text>
            )}
          </View>
        </ScrollView>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={() => this.props.navigation.navigate('TambahBarang')}>
            <FontAwesomeIcon icon={faPlus} size={20} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Tambahkan padding di bawah untuk mengakomodasi tombol tambah
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listBarang: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
