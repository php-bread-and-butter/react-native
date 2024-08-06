import React from "react";

const ButtonWeb = ({ title, onClick }) => (
	<button style={styles.button} onClick={onClick}>
		{title}
	</button>
);

const styles = {
	button: {
		backgroundColor: "#007AFF",
		padding: "10px 20px",
		borderRadius: "5px",
		color: "#fff",
		border: "none",
		cursor: "pointer",
	},
};

export default ButtonWeb;
