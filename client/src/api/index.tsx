import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'

export const getCommits = () => axios.get(`${BASE_URL}/commits`).then(res => res.data)