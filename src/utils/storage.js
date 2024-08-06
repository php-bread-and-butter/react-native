import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error("AsyncStorage setItem error: ", error);
	}
};

export const getItem = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value ? JSON.parse(value) : null;
	} catch (error) {
		console.error("AsyncStorage getItem error: ", error);
	}
};

export const removeItem = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		console.error("AsyncStorage removeItem error: ", error);
	}
};
