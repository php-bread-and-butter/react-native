import * as Keychain from "react-native-keychain";

export const setToken = async (token) => {
	try {
		// await Keychain.setGenericPassword("token", token);
		await Keychain.setGenericPassword("token", token, { service: "token" });
	} catch (error) {
		console.error("Keychain setToken error: ", error);
	}
};

export const getToken = async () => {
	try {
		const credentials = await Keychain.getGenericPassword();
		return credentials ? credentials.password : null;
	} catch (error) {
		console.error("Keychain getToken error: ", error);
	}
};

export const removeToken = async () => {
	try {
		await Keychain.resetGenericPassword();
	} catch (error) {
		console.error("Keychain removeToken error: ", error);
	}
};
