import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../screens/drawerContent/drawerContent";
import HomeScreen from "../screens/homeScreen/homeScreen";
import FoodScreen from "../screens/foodScreen/foodScreen";

const Drawer = createDrawerNavigator();
export default function DrawerPage() {
  return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="FoodScreen" component={FoodScreen} />
      </Drawer.Navigator>
  );
}
