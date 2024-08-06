import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { authenticate } from "./authSlice";
import { setToken } from "../../components/common/SecureStorage";

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleLogin = async () => {
		// Call your authentication API here
		const token = await mockApiLogin(username, password);
		if (token) {
			await setToken(token);
			dispatch(authenticate(token));
			navigation.replace("Dashboard");
		} else {
			alert("Login failed");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button title="Login" onPress={handleLogin} />
			<Button
				title="Forgot Password?"
				onPress={() => navigation.navigate("ForgotPassword")}
			/>
		</View>
	);
};

const mockApiLogin = async (username, password) => {
	// Mock API call
	if (username === "user" && password === "pass") {
		return "mockToken123";
	}
	return null;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: "center",
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 10,
	},
});

export default LoginScreen;
