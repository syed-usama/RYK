import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './orderComponent.style';
const OrderComponent = ({orders}) => {
  const [loader, setLoader] = useState(false);
  const monthNames = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const renderDate = mdate => {
    // console.log('mdate',mdate)
    var date = new Date(mdate.seconds * 1000);
    // console.log('date',date)
    var day = date.getDate(); //To get the Current Date
    var month = date.getMonth() + 1; //To get the Current Month
    var year = date.getFullYear(); //To get the Current Year
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    let result = '';
    if (day == 1) {
      result = day + 'st of ' + monthNames[month] + ' ' + year + ' ' + strTime;
    } else if (day == 2) {
      result = day + 'nd of ' + monthNames[month] + ' ' + year + ' ' + strTime;
    } else if (day == 3) {
      result = day + 'rd of ' + monthNames[month] + ' ' + year + ' ' + strTime;
    } else {
      result = day + 'th of ' + monthNames[month] + ' ' + year + ' ' + strTime;
    }
    return result;
  };
  useEffect(() => {
    setLoader(false);
  }, [orders]);
  const renderStatus = status => {
    var res = '';
    switch (status) {
      case 0:
        var res = 'Waiting for resturant to accept';
        break;
      case 1:
        var res = 'Cooking';
        break;
      case 2:
        var res = 'Cooking';
        break;
      case 3:
        var res = 'Witing for rider to pick';
        break;
      case 4:
        var res = 'Order Picked , On the way to you';
        break;
      case 5:
        var res = 'Delivered';
        break;
      case 6:
        var res = 'Order tracking failed';
        break;
      case 7:
        var res = 'Order tracking failed';
        break;
      case 8:
        var res = 'Cancelled by Rykfoods';
        break;
      case 9:
        var res = 'Cancelled by Resturant';
        break;
      default:
        var res = 'Cancelled';
        break;
    }
    return res;
  };
  return (
    <View style={styles.orderCard} key={orders.order_id}>
      <View style={styles.row1}>
        <Text style={styles.text1}>{renderDate(orders.orderTime)}</Text>
        <Text style={styles.text1}>#{orders.order_id}</Text>
      </View>
      <Text style={styles.text4}>{orders.res_name}</Text>
      {orders.products.map((product, index) => (
        <View key={index}>
          <Text style={styles.text2}>
            {product.pro_qty} x {product.pro_name}
          </Text>
        </View>
      ))}
      <Text style={styles.text3}>Special note : {orders.user_note}</Text>
      <Text style={[styles.text2, {fontSize: 14, marginTop: 0}]}>
        Amount :
        <Text style={[styles.text3, {fontSize: 12, color: 'black'}]}>
          {' '}
          {orders.order_amount}.00
        </Text>
      </Text>
      {orders.rider_id != '0' &&
      <Text style={[styles.text2, {fontSize: 14, marginTop: 0}]}>
        Rider Name :
        <Text style={[styles.text3, {fontSize: 12, color: 'black'}]}>
          {' '}
          {orders.rider_name}
        </Text>
      </Text>}
      {orders.rider_id != '0' &&
      <Text style={[styles.text2, {fontSize: 14, marginTop: 0}]}>
        Rider Phone :
        <Text style={[styles.text3, {fontSize: 12, color: 'black'}]}>
          {' '}
          {orders.rider_phone}
        </Text>
      </Text>
        }
      <Text style={[styles.text2, {fontSize: 14, marginTop: 10}]}>
        Status :
        <Text style={[styles.text3, {fontSize: 12, color: 'black'}]}>
          {' '}
          {renderStatus(orders.status)}
        </Text>
      </Text>
    </View>
  );
};

export default OrderComponent;
