import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../../services/firebase/authProvider';
import styles from './pickupScreen.style';
import colors from '../../../assets/colors/colors';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  saveData,
  uploadImage,
} from '../../../services/firebase/firebaseServices';
import {showToast} from '../../../services/toast';
const PickupScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [receiverName, setRName] = useState('');
  const [receiverPhone, setRPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [comments, setComments] = useState('');
  const [pieces, setPieces] = useState('');
  const [weight, setWeight] = useState('');
  const [shipvalue, setShipvalue] = useState('');
  const [imageurl, setImageurl] = useState('');

  const imagePicker = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 400,
      compressImageQuality: 1,
      compressImageMaxHeight: 1800,
      compressImageMaxWidth: 1800,
      mediaType: 'photo',
      // cropping: true,
      // freeStyleCropEnabled: true,
    }).then(image => {
      setImageurl(image.path);
    });
  };
  const imageCameraPicker = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 400,
      compressImageQuality: 1,
      compressImageMaxHeight: 1800,
      compressImageMaxWidth: 1800,
      mediaType: 'photo',
      // cropping: true,
      // freeStyleCropEnabled: true,
    }).then(image => {
      setImageurl(image.path);
    });
  };

  const submit = async () => {
    
    var checkname = name.replace(/\s+/g, '');
    var checkpickup = pickup.replace(/\s+/g, '');
    var checkphone = phone.replace(/\s+/g, '');
    var checkdestination = destination.replace(/\s+/g, '');
    var checkpieces = pieces.replace(/\s+/g, '');
    var checkweight = weight.replace(/\s+/g, '');
    var checkimage = imageurl.replace(/\s+/g, '');
    var checkrName = receiverName.replace(/\s+/g, '');
    var checkrPhone = receiverPhone.replace(/\s+/g, '');
    if (
      checkname != '' &&
      checkpickup != '' &&
      checkrName != '' &&
      checkrPhone != '' &&
      checkphone != '' &&
      checkdestination != '' &&
      checkpieces != '' &&
      checkweight != '' &&
      checkimage != ''
    ) {
      setLoading(true);
      let ref = imageurl.substring(imageurl.lastIndexOf('/') + 1);
      let url = await uploadImage(imageurl, 'Profile/' + ref);
      let todate = new Date();
      let pid = 'PR-' + todate.getTime();
      let dataa = {
        id: pid,
        creationDate: todate,
        name: name,
        email: email,
        mobileNumber: phone,
        destination: destination,
        pickupAddress: pickup,
        comments: comments,
        pieces: pieces,
        weight: weight,
        shipmentValue: shipvalue,
        rName: receiverName,
        rPhone: receiverPhone,
        image: url,
      };
      let yes = await saveData('pickupRequests', pid, dataa);
      setLoading(false);

      Alert.alert(
        'Request sent',
        'Your pickup request is sent. You will be contacted soon by ryk courier team',
      );
      navigation.goBack();
    } else {
      showToast("Required fields can't be empty");
    }
  };
  useEffect(() => {
    console.log('user');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={colors.primary} />
      <View style={styles.header}>
        <FontAwesome
          name="arrow-left"
          size={25}
          color={colors.primary}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText}>RYK Pickup</Text>
        <Text style={styles.titleText}></Text>
        {/* <FontAwesome name="search" size={25} color={colors.primary} /> */}
      </View>
      <ScrollView style={styles.body}>
        <Image
          source={require('../../../assets/images/ryklogo.png')}
          style={styles.logo}
        />
        <Text style={styles.bodyText1}>Schedule a pickup</Text>

        <Text style={styles.title}>Name</Text>
        <TextInput
          value={name}
          onChangeText={value => setName(value)}
          placeholder="Enter your name"
          style={styles.textInput}
        />

        <Text style={styles.title}>Email (optional)</Text>
        <TextInput
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder="Enter your email"
          style={styles.textInput}
        />
        <Text style={styles.title}>Mobile Number</Text>
        <TextInput
          value={phone}
          onChangeText={value => setPhone(value)}
          placeholder="Enter your mobile number"
          style={styles.textInput}
        />
        <Text style={styles.title}>Enter pickup address</Text>
        <TextInput
          value={pickup}
          onChangeText={value => setPickup(value)}
          placeholder="Enter your pickup address"
          style={styles.textInput}
        />

        <Text style={styles.title}>Receiver name</Text>
        <TextInput
          value={receiverName}
          onChangeText={value => setRName(value)}
          placeholder="Enter receiver name"
          style={styles.textInput}
        />

        <Text style={styles.title}>Receiver Mobile Number</Text>
        <TextInput
          value={receiverPhone}
          onChangeText={value => setRPhone(value)}
          placeholder="Enter receiver mobile number"
          style={styles.textInput}
        />

        <Text style={styles.title}>Enter destination address</Text>
        <TextInput
          value={destination}
          onChangeText={value => setDestination(value)}
          placeholder="Enter destination address"
          style={styles.textInput}
        />
        <Text style={styles.title}>Comments (optional)</Text>
        <TextInput
          value={comments}
          onChangeText={value => setComments(value)}
          placeholder="Enter your comments"
          style={styles.textInput}
        />
        <Text style={styles.title}>Pieces</Text>
        <TextInput
          value={pieces}
          onChangeText={value => setPieces(value)}
          placeholder="Enter number of pieces"
          style={styles.textInput}
        />
        <Text style={styles.title}>Weight (Kg)</Text>
        <TextInput
          value={weight}
          onChangeText={value => setWeight(value)}
          placeholder="Enter total weight of pickup"
          style={styles.textInput}
        />
        {/* <Text style={styles.title}>Shipment value (optional)</Text>
        <TextInput
          value={shipvalue}
          onChangeText={value => setShipvalue(value)}
          placeholder="Enter shipment value"
          style={styles.textInput}
        /> */}
        <Text style={styles.title}>Upload image of shipment</Text>
        <View style={{flexDirection: 'row'}}>
          {imageurl ? (
            <View style={styles.photoView}>
              <FontAwesome
                name="close"
                size={20}
                color={colors.primary}
                style={styles.iconClose}
                onPress={() => setImageurl('')}
              />
              <Image
                source={{uri: imageurl}}
                style={styles.photo}
                resizeMode="stretch"
              />
            </View>
          ) : (
            <>
              <FontAwesome
                name="camera"
                size={30}
                color={colors.primary}
                style={styles.icon}
                onPress={() => imageCameraPicker()}
              />
              <FontAwesome
                name="photo"
                size={30}
                color={colors.primary}
                style={styles.icon}
                onPress={() => imagePicker()}
              />
            </>
          )}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => submit()}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color='white' size={25}/>
          ) : (
            <Text style={styles.buttonText}>Create Pickup Request</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PickupScreen;
