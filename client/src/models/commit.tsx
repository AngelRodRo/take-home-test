type Committer = {
    avatar_url: string;
    html_url: string;
}

type Author = {
    name: string;
    email: string;
}

type CommitterDetails = {
    date: string;
}

type CommitDetails = {
    message: string;
    author: Author;
    committer: CommitterDetails,
}

export interface Commit {
    sha: string,
    committer: Committer,
    commit: CommitDetails,
    html_url: string,
}