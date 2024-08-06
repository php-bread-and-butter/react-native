import React from "react";
import { Platform } from "react-native";
import ButtonAndroid from "./Button/Button.android";
import ButtonIOS from "./Button/Button.ios";
import ButtonWeb from "./Button/Button.web";

const Button = (props) => {
	if (Platform.OS === "android") {
		return <ButtonAndroid {...props} />;
	} else if (Platform.OS === "ios") {
		return <ButtonIOS {...props} />;
	} else {
		return <ButtonWeb {...props} />;
	}
};

export default Button;
