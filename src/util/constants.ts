export const CONSTANTS = {
  EMPTY_STRING: "",
  API_URL: {
    GITHUB_BASE_URL: "https://api.github.com/",
  },
};

export const GITHUB_API_URLS = {
  GITHUB_GET_REPOS_URL: (userName: string) =>
    `${CONSTANTS.API_URL.GITHUB_BASE_URL}users/${userName}/repos`,
};
