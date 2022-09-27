import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen/splashScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import SignupScreen from "../screens/signupScreen/signupScreen";
import CartScreen from "../screens/rykfoods/cartScreen/cartScreen";
import ProductScreen from "../screens/rykfoods/productScreen/productScreen";
import ResturantScreen from "../screens/rykfoods/resturantScreen/resturantScreen";
import CheckoutScreen from "../screens/rykfoods/checkoutScreen/checkoutScreen";
import StoreCart from "../screens/rykStore/storeCart/storeCart";
import StoreProduct from "../screens/rykStore/storeProduct/storeProduct";
import ShopScreen from "../screens/rykStore/shopScreen/shopScreen";
import StoreCheckout from "../screens/rykStore/storeCheckout/storeCheckout";
import Confirmation from "../screens/rykStore/confirmation/confirmation";
import { CourierDrawer, FoodDrawer, StoreDrawer } from "./drawerNavigator";
import HomeScreen from "../screens/homeScreen/homeScreen";
import ComingSoon from "../screens/comingSoon/comingSoon";


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
const DrawerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="FoodDrawer" component={FoodStackNavigator} />
       <Stack.Screen name="StoreDrawer" component={StoreStackNavigator} />
       <Stack.Screen name="CourierDrawer" component={CourierDrawer} />
       <Stack.Screen name="ComingSoon" component={ComingSoon} />
    </Stack.Navigator>
  );
}
const FoodStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="FoodHome" component={FoodDrawer} />
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
       <Stack.Screen name="StoreHome" component={StoreDrawer} />
       <Stack.Screen name="StoreCart" component={StoreCart} />
       <Stack.Screen name="StoreCheckout" component={StoreCheckout} />
       <Stack.Screen name="StoreProduct" component={StoreProduct} />
       <Stack.Screen name="ShopScreen" component={ShopScreen} />
       <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
}

export { OnBoardStackNavigator,FoodStackNavigator,StoreStackNavigator,DrawerStackNavigator };