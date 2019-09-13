/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import configuration from '../configuration';

const { baseUrl } = configuration;

export function getPostComments(postId) {
  return axios.get(`${baseUrl}/comments`, { params: { postId } })
    .then((response) => (response.data))
    .catch(() => {
      throw new Error('Error getting posts Comments');
    });
}

export function savePostComments(postId, body) {
  return axios.post(`${baseUrl}/comments`, body)
    .then((response) => (response.data))
    .catch(() => {
      throw new Error('Comment was not saved');
    });
}
