import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CourierScreen from "../screens/courierScreen/courierScreen";
import { FoodDrawerContent } from "./drawerContent/foodDrawerContent/foodDrawerContent";
import { StoreDrawerContent } from "./drawerContent/storeDrawerContent/storeDrawerContent";
import { CourierDrawerContent } from "./drawerContent/courierDrawerContent/courierDrawerContent";
import FoodScreen from "../screens/rykfoods/foodScreen/foodScreen";
import StoreScreen from "../screens/rykStore/storeScreen/storeScreen";

const Drawer = createDrawerNavigator();

const FoodDrawer = () => {
  return (
    <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <FoodDrawerContent {...props} />}
     >
       <Drawer.Screen name="FoodScreen" component={FoodScreen} />
     </Drawer.Navigator>
  );
}
const StoreDrawer = () => {
  return (
    <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <StoreDrawerContent {...props} />}
     >
       <Drawer.Screen name="StoreScreen" component={StoreScreen} />
     </Drawer.Navigator>
  );
}
const CourierDrawer = () => {
  return (
    <Drawer.Navigator
       screenOptions={{ headerShown: false }}
       drawerContent={(props) => <CourierDrawerContent {...props} />}
     >
       <Drawer.Screen name="CourierScreen" component={CourierScreen} />
     </Drawer.Navigator>
  );
}

export { FoodDrawer,StoreDrawer,CourierDrawer };