import {
	createMaterialTopTabNavigator,
	MaterialTopTabNavigationOptions,
	MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext<
	MaterialTopTabNavigationOptions,
	typeof Navigator,
	TabNavigationState<ParamListBase>,
	MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
	return (
		<MaterialTopTabs
			screenOptions={{
				tabBarActiveTintColor: "#000",
				tabBarIndicatorStyle: {
					backgroundColor: "#3CB44B",
					height: 3,
				},
				tabBarLabelStyle: {
					fontWeight: "bold",
					textTransform: "capitalize",
					fontSize: 14,
				},
			}}
		>
			<MaterialTopTabs.Screen name="index" options={{ title: "Users" }} />
			<MaterialTopTabs.Screen
				name="repositories"
				options={{ title: "Repositories" }}
			/>
		</MaterialTopTabs>
	);
};

export default Layout;
