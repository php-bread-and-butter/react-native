import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import DashboardScreen from "../modules/user/DashboardScreen";
import ProfileScreen from "../modules/user/ProfileScreen";
import TaskScreen from "../modules/user/TaskScreen";
import SettingsScreen from "../modules/user/SettingsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;
					switch (route.name) {
						case "Home":
							iconName = "home";
							break;
						case "Profile":
							iconName = "person";
							break;
						case "Task":
							iconName = "task";
							break;
						case "Settings":
							iconName = "settings";
							break;
						default:
							iconName = "home";
							break;
					}
					return <Icon name={iconName} size={size} color={color} />;
				},
				headerShown: false,
			})}
		>
			<Tab.Screen name="Home" component={DashboardScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
			<Tab.Screen name="Task" component={TaskScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
