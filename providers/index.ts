import axios from 'axios';

export const Api = axios.create({baseURL: 'https://champstats.braveground-00413869.eastus.azurecontainerapps.io'});