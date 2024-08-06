import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent"; // Create this component for custom drawer content

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen name="Main" component={BottomTabNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
