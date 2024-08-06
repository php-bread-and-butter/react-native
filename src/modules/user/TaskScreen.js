// TaskScreen.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const TaskScreen = ({ navigation }) => {
	return (
		<ScrollView style={styles.container}>
			
			<Text style={styles.title}>TaskScreen</Text>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 1</Text>
				<Text style={styles.cardContent}>
					This is some content for the first card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 2</Text>
				<Text style={styles.cardContent}>
					This is some content for the second card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 3</Text>
				<Text style={styles.cardContent}>
					This is some content for the first card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 4</Text>
				<Text style={styles.cardContent}>
					This is some content for the second card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 5</Text>
				<Text style={styles.cardContent}>
					This is some content for the first card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 6</Text>
				<Text style={styles.cardContent}>
					This is some content for the second card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 7</Text>
				<Text style={styles.cardContent}>
					This is some content for the first card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 8</Text>
				<Text style={styles.cardContent}>
					This is some content for the second card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 9</Text>
				<Text style={styles.cardContent}>
					This is some content for the first card.
				</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Card 10</Text>
				<Text style={styles.cardContent}>
					This is some content for the second card.
				</Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Dashboard")}
			>
				<Text style={styles.buttonText}>Back to Dashboard</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 20,
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
		marginBottom: 20,
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	},
	cardTitle: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	cardContent: {
		fontSize: 16,
		color: "#555",
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

export default TaskScreen;
