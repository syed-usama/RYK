import messaging from '@react-native-firebase/messaging';
import firestore from "@react-native-firebase/firestore";

export const PushController = async (email) => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    messaging().getToken().then((token) => {
      console.log('Authorization status:', token);
      firestore()
        .collection('users')
        // Filter results 
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach((documentSnapshot) => {
            let id = documentSnapshot.id;
            firestore()
              .collection("users")
              .doc(id)
              .update({
                token: token,
              })
              .then(() => {
                console.log("token updated!");
              })
              .catch((error) => {
                console.log("error", error);
              });
          });
        });
      // console.log("TOKEN:", token.token);
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:',remoteMessage.notification,remoteMessage.data);
          //navigation.navigate(remoteMessage.data.type);
        }
      });
  }
};
