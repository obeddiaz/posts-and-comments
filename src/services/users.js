/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import configuration from '../configuration';

const { baseUrl } = configuration;

export function getUsers() {
  return axios.get(`${baseUrl}/users`)
    .then((response) => (response.data))
    .catch(() => {
      throw new Error('Error getting users');
    });
}
