import {
	TouchableWithoutFeedback,
	View,
	Keyboard,
	FlatList,
	Pressable,
} from "react-native";
import { TextInput } from "react-native-paper";
import { GitHubIcon } from "../components/Icons";
import { useEffect, useState } from "react";
import { UsersInterface } from "../interfaces/UsersInterface";
import { searchGithubUsers } from "../apis/searchUsers";
import ActivityIndicatorScreen from "../components/ActivityIndicator";
import UserCard from "../components/UserCard";

const UsersScreen = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<UsersInterface>({
		incomplete_results: false,
		items: [],
		total_count: 0,
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const handleInputChange = (text: string) => {
		setSearchQuery(text);
	};

	useEffect(() => {
		const timer = setTimeout(async () => {
			if (searchQuery.length !== 0) {
				setLoading(true);
				setError(false);
				try {
					const results = await searchGithubUsers(searchQuery);
					if (results) {
						setSearchResults(results);
						setLoading(false);
					}
				} catch (error) {
					setError(true);
				} finally {
					setError(false);
				}
			} else {
				setLoading(false);
				setSearchResults({
					incomplete_results: false,
					items: [],
					total_count: 0,
				});
			}
		}, 2000);

		return () => clearTimeout(timer);
	}, [searchQuery]);

	return (
		<View className="flex-1 px-3">
			<View className="justify-center items-center py-5">
				<GitHubIcon width={80} height={80} />
				<TextInput
					mode={"outlined"}
					dense
					returnKeyType="search"
					placeholder="Search github users"
					// autoFocus
					style={{ width: "100%" }}
					outlineColor="#3CB44B"
					activeOutlineColor="#3CB44B"
					onChangeText={(text) => handleInputChange(text)}
				/>
			</View>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={Keyboard.dismiss}
			>
				<View>
					{loading && <ActivityIndicatorScreen />}
					{!loading && !error && searchResults && (
						<FlatList
							data={searchResults ? searchResults.items : []}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({
								item: { login, url, id, avatar_url },
							}) => (
								<Pressable>
									<UserCard
										avatarUrl={avatar_url}
										githubUsername={login}
										githubProfile={url}
										id={id}
									/>
								</Pressable>
							)}
						/>
					)}
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default UsersScreen;
