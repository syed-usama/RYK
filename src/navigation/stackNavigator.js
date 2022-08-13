import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen/splashScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import SignupScreen from "../screens/signupScreen/signupScreen";
import FoodScreen from "../screens/rykfoods/foodScreen/foodScreen";
import CartScreen from "../screens/rykfoods/cartScreen/cartScreen";
import ProductScreen from "../screens/rykfoods/productScreen/productScreen";
import ResturantScreen from "../screens/rykfoods/resturantScreen/resturantScreen";
import CheckoutScreen from "../screens/rykfoods/checkoutScreen/checkoutScreen";
import StoreScreen from "../screens/rykStore/storeScreen/storeScreen";
import StoreCart from "../screens/rykStore/storeCart/storeCart";
import StoreProduct from "../screens/rykStore/storeProduct/storeProduct";
import ShopScreen from "../screens/rykStore/shopScreen/shopScreen";
import StoreCheckout from "../screens/rykStore/storeCheckout/storeCheckout";


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

const StoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="StoreHome" component={StoreScreen} />
       <Stack.Screen name="StoreCart" component={StoreCart} />
       <Stack.Screen name="StoreCheckout" component={StoreCheckout} />
       <Stack.Screen name="StoreProduct" component={StoreProduct} />
       <Stack.Screen name="ShopScreen" component={ShopScreen} />
    </Stack.Navigator>
  );
}

export { OnBoardStackNavigator,FoodStackNavigator,StoreStackNavigator };