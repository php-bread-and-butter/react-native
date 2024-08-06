import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const ForgotPasswordScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");

	const handleForgotPassword = () => {
		// Mock forgot password logic
		Alert.alert("Password Reset", "Password reset link sent to your email");
		navigation.navigate("Login");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Forgot Password</Text>
			<Input placeholder="Email" value={email} onChangeText={setEmail} />
			<Button title="Reset Password" onPress={handleForgotPassword} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 20,
	},
});

export default ForgotPasswordScreen;
