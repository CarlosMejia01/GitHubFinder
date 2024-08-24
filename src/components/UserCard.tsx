import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	Button,
} from "react-native";

type UserCardType = {
	avatarUrl: string;
	githubUsername: string;
	id: number;
	githubProfile: string;
};
const UserCard = ({
	githubUsername,
	id,
	githubProfile,
	avatarUrl,
}: UserCardType) => {
	const handleProfilePress = () => {
		Linking.openURL(githubProfile).catch((err) =>
			console.error("Failed to open URL:", err),
		);
	};

	return (
		<View className="flex flex-row p-4 bg-gray-300 rounded-lg w-100 mb-4">
			<View className="bg-purple-200 w-24 h-36 rounded-lg mr-4">
				<Image
					className="w-full h-full"
					source={{ uri: avatarUrl }}
					resizeMode="cover"
				/>
			</View>
			<View className="flex-1">
				<Text className="text-white text-lg font-bold mb-1">
					{githubUsername.toUpperCase()}
				</Text>
				<View className="flex flex-row items-center mb-2">
					<Text className="text-black text-base font-semibold">
						ID: #{id}
					</Text>
				</View>
				<Button
					title="Go to Profile"
					onPress={handleProfilePress}
					color="#3CB44B"
				/>
			</View>
		</View>
	);
};
export default UserCard;
