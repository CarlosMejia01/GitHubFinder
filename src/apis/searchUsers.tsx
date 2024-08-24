import { githubApi } from ".";

// Function to search GitHub users
export const searchGithubUsers = async (query: string) => {
	try {
		const response = await githubApi.get(`/search/users`, {
			params: {
				q: query,
			},
		});
		if (response.data) return response.data;
	} catch (error) {
		throw new Error(`Failed to search users: ${error}`);
	}
};
