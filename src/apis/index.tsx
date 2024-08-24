import axios from "axios";

export const githubApi = axios.create({
	baseURL: "http://api.github.com",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
});
