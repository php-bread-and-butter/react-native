import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonAndroid = ({ title, onPress }) => (
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text style={styles.buttonText}>{title}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#2196F3",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
});

export default ButtonAndroid;
