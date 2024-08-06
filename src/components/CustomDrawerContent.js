import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomDrawerContent = (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => props.navigation.navigate("Home")}
				style={styles.drawerItem}
			>
				<Icon name="home" size={24} color="#333" />
				<Text style={styles.drawerItemText}>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => props.navigation.navigate("Profile")}
				style={styles.drawerItem}
			>
				<Icon name="person" size={24} color="#333" />
				<Text style={styles.drawerItemText}>Profile</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => props.navigation.navigate("Task")}
				style={styles.drawerItem}
			>
				<Icon name="task" size={24} color="#333" />
				<Text style={styles.drawerItemText}>Task</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => props.navigation.navigate("Settings")}
				style={styles.drawerItem}
			>
				<Icon name="settings" size={24} color="#333" />
				<Text style={styles.drawerItemText}>Settings</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	drawerItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	drawerItemText: {
		marginLeft: 10,
		fontSize: 16,
	},
});

export default CustomDrawerContent;
