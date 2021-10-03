import axios from 'axios';
import { response } from 'express';

const fetcher = (url: string) => axios.get(url).then((response) => response.data);

export default fetcher;
