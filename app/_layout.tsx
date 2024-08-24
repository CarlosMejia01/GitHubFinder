import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack screenOptions={{ headerShadowVisible: false }}>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerTitle: `GitHubFinder`,
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name="details"
				options={{
					headerTitle: "Details",
					headerBackTitle: "Back",
				}}
			/>
		</Stack>
	);
};

export default Layout;
