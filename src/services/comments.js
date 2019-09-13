/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const baseUrl = 'https://jsonplaceholder.typicode.com';
const baseUrl = 'http://www.somaku.com';

export function getPostComments(postId) {
  return axios.get(`${baseUrl}/comments`, { params: { postId } })
    .then((response) => (response.data))
    .catch(() => {
      throw new Error('Error getting posts Comments');
    });
}
