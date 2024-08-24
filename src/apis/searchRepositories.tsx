import { githubApi } from ".";

// Function to search GitHub repositories
export const searchGithubRepositories = async (query: string) => {
	try {
		const response = await githubApi.get(`/search/repositories`, {
			params: {
				q: query,
			},
		});
		return response.data;
	} catch (error) {
		throw new Error(`Failed to search repositories: ${error}`);
	}
};
