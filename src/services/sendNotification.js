import firestore from '@react-native-firebase/firestore';
export const sendNotification = (to,from, title, message,type) => {
  firestore()
    .collection('resturants')
    // Filter results
    .where('res_id', '==', to)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        var token = documentSnapshot.data().token;
        if (token) {
          let data= {
                  to: token,
                  notification: {
                    body: message,
                    sound: "default",
                    priority: "high",
                    title: title,
                    restricted_package_name: "com.rykresturant",
                  },
                  priority:'high',
                  data:{
                    type:type,
                    message:message
                  },
              }
          fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'key=AAAAC7fZ3W8:APA91bF60wO06P36eZYdPV4iDq79pSFOoT1GLg3nCY5IwDw7Wnu_3BsDFXzm0ryeiH8qSHIOkfsNND0ncm2OGvXY7fqJMVNTkdRNyImL9uuIqY3fs4Y3VNDmQ_PNzMtxAsIwDSn3pxIV',
            },
            body: JSON.stringify(data),
          })
            .then(res => {
              console.log('res.status12', res);
            })
            .catch(err => {
              console.log('res.status12 error', err);
            });
        } else {
          console.log('token not available');
        }
      });
    });
};