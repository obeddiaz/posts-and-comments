/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import configuration from '../configuration';

const { baseUrl } = configuration;

export function getPosts() {
  return axios.get(`${baseUrl}/posts`)
    .then((response) => (response.data))
    .catch(() => {
      throw new Error('Error getting posts');
    });
}
