import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonIOS = ({ title, onPress }) => (
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text style={styles.buttonText}>{title}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
});

export default ButtonIOS;
