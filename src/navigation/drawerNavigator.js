import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { FoodStackNavigator, StoreStackNavigator } from "./stackNavigator";
import HomeScreen from "../screens/homeScreen/homeScreen";
import CourierScreen from "../screens/courierScreen/courierScreen";
import { DrawerContent } from "../screens/drawerContent/drawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <DrawerContent {...props} />}
     >
       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
       <Drawer.Screen name="FoodScreen" component={FoodStackNavigator} />
       <Drawer.Screen name="CourierScreen" component={CourierScreen} />
       <Drawer.Screen name="StoreScreen" component={StoreStackNavigator} />
     </Drawer.Navigator>
  );
}

export default DrawerNavigator;