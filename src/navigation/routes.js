import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../services/firebase/authProvider';
import React, {useContext, useState, useEffect} from 'react';
import LoginScreen from '../screens/loginScreen/loginScreen';
import SignupScreen from '../screens/signupScreen/signupScreen';
import SplashScreen from '../screens/splashScreen/splashScreen';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../screens/drawerContent/drawerContent";
import HomeScreen from "../screens/homeScreen/homeScreen";
import FoodScreen from "../screens/foodScreen/foodScreen";
import CourierScreen from '../screens/courierScreen/courierScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      {!user ? 
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
          <Stack.Screen name={'SignupScreen'} component={SignupScreen} />
        </Stack.Navigator>
       : 
       <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <DrawerContent {...props} />}
     >
       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
       <Drawer.Screen name="FoodScreen" component={FoodScreen} />
       <Drawer.Screen name="CourierScreen" component={CourierScreen} />
     </Drawer.Navigator>
      }
    </NavigationContainer>
  );
};
export default Routes;
