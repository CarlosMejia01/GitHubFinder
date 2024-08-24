import Lottie from "lottie-react-native";

import { View, Text } from "react-native";

const ActivityIndicatorScreen = () => {
	return (
		<View style={{ alignItems: "center" }}>
			<Lottie
				style={{ width: 200, height: 200, alignItems: "center" }}
				source={require("../lotties/loader.json")}
				autoPlay
				loop
			/>
		</View>
	);
};

export default ActivityIndicatorScreen;
