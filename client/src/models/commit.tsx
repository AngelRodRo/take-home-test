import { Committer } from './committer'

export interface Commit {
    sha: String,
    committer: Committer,
    message: String,
}