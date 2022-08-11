import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen/splashScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import SignupScreen from "../screens/signupScreen/signupScreen";
import FoodScreen from "../screens/foodScreen/foodScreen";
import CartScreen from "../screens/cartScreen/cartScreen";
import ProductScreen from "../screens/productScreen/productScreen";
import ResturantScreen from "../screens/resturantScreen/resturantScreen";
import CheckoutScreen from "../screens/checkoutScreen/checkoutScreen";


const Stack = createStackNavigator();

const OnBoardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
          <Stack.Screen name={'SignupScreen'} component={SignupScreen} />
    </Stack.Navigator>
  );
}

const FoodStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="FoodHome" component={FoodScreen} />
       <Stack.Screen name="CartScreen" component={CartScreen} />
       <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
       <Stack.Screen name="ProductScreen" component={ProductScreen} />
       <Stack.Screen name="ResturantScreen" component={ResturantScreen} />
    </Stack.Navigator>
  );
}

export { OnBoardStackNavigator,FoodStackNavigator };