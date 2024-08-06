import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../modules/auth/LoginScreen";
import ForgotPasswordScreen from "../modules/auth/ForgotPasswordScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
				<Stack.Screen name="Dashboard" component={DrawerNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
