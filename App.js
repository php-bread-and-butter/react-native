import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/store";
import { getItem } from "./src/utils/storage";
import { authenticate } from "./src/modules/auth/authSlice";

const Root = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const initializeAuth = async () => {
			const token = await getItem("token");
			if (token) {
				dispatch(authenticate(token));
			}
		};

		initializeAuth();
	}, [dispatch]);

	return <AppNavigator />;
};

const App = () => {
	return (
		<Provider store={store}>
			<Root />
		</Provider>
	);
};

export default App;
