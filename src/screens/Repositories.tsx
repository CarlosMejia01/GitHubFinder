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
import ActivityIndicatorScreen from "../components/ActivityIndicator";
import { RepositoriesInterface } from "../interfaces/RepositoriesInterface";
import RepoCard from "../components/RepoCard";
import { searchGithubRepositories } from "../apis/searchRepositories";

const RepositoriesScreen = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<RepositoriesInterface>({
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
					const results = await searchGithubRepositories(searchQuery);
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
					placeholder="Search github repositories"
					// autoFocus
					style={{ width: "100%" }}
					activeOutlineColor="#3CB44B"
					outlineColor="#3CB44B"
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
								item: {
									name,
									description,
									stargazers_count,
									language,
									owner,
									forks,
								},
							}) => (
								<Pressable>
									<RepoCard
										repoAvatar={owner?.avatar_url}
										repoDescription={
											description || "No Description"
										}
										repoLanguage={language || "N/A"}
										repoStarts={stargazers_count}
										repoName={name}
										repoForks={forks}
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

export default RepositoriesScreen;
