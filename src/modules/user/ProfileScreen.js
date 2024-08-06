// ProfileScreen.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProfileScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.profileImage}
				source={{ uri: "https://example.com/your-profile-image.jpg" }}
			/>
			<Text style={styles.name}>John Doe</Text>
			<Text style={styles.email}>john.doe@example.com</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Dashboard")}
			>
				<Text style={styles.buttonText}>Back to Dashboard</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	profileImage: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	email: {
		fontSize: 16,
		color: "#555",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#007bff",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
});

export default ProfileScreen;
