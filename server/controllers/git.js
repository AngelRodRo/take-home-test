const axios = require("axios");

const { BASE_URL, GIT_USER, GIT_REPO } = process.env;

const getGitPublicURL = () =>
  `${BASE_URL}/repos/${GIT_USER}/${GIT_REPO}/commits`;

module.exports.getCommits = async (_, res) => {
  try {
    const { data: commits } = await axios.get(getGitPublicURL());
    const formatedCommits = commits.map(({ sha, commit, html_url, committer }) => ({
      sha,
      commit,
      html_url,
      committer
    }));
    res.json(formatedCommits);
  } catch (error) {
    res.send(error);
  }
};
