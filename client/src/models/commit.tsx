type Committer = {
    avatar_url: string;
    html_url: string;
}

type Author = {
    name: string;
    email: string;
}

type CommitDetails = {
    message: string;
    author: Author;
}

export interface Commit {
    sha: String,
    committer: Committer,
    commit: CommitDetails,
}