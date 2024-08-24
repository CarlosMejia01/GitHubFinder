import { View, Text, Image } from "react-native";
import { IconFork, IconRepo } from "./Icons";

type RepoCardType = {
	repoAvatar: string;
	repoName: string;
	repoDescription: string;
	repoStarts: number;
	repoLanguage: string;
	repoForks: number;
};

const RepoCard = ({
	repoAvatar,
	repoName,
	repoDescription,
	repoStarts,
	repoLanguage,
	repoForks,
}: RepoCardType) => (
	<View className="p-4 bg-gray-300 rounded-lg mb-4">
		<View className="flex flex-row items-center">
			<View className="bg-gray-300 w-12 h-12 rounded-full mr-4 flex items-center justify-center">
				{repoAvatar ? (
					<Image
						className="w-full h-full"
						source={{ uri: repoAvatar }}
						resizeMode="cover"
					/>
				) : (
					<IconRepo size={36} />
				)}
			</View>
			<View className="flex-1">
				<Text className="text-white text-lg font-semibold mb-1">
					{repoName}
				</Text>
				<Text className="text-gray-400 text-sm mb-2">
					{repoDescription}
				</Text>
				<View className="flex flex-row items-center mb-2">
					<Text className="text-yellow-400 text-base font-semibold mr-2">
						{repoStarts} stars
					</Text>
					{/* <StyledFontAwesome name="star" size={16} color="yellow" /> */}
					<Text className="text-gray-400 text-sm ml-4">
						Language: {repoLanguage || "N/A"}
					</Text>
				</View>
				<Text className="text-gray-400 text-xs font-semibold mb-1">
					<IconFork /> {repoForks}
				</Text>
			</View>
		</View>
	</View>
);
export default RepoCard;
