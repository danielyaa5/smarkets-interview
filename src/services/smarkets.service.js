import ax from 'axios';

const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com';
const SMARKETS_API_URL = CORS_ANYWHERE + '/https://fe-api.smarkets.com';
const POPULAR_EVENTS = SMARKETS_API_URL + '/v0/events/popular';
const EVENT = SMARKETS_API_URL + '/v0/events/id';

export const getPopularEvents = () => ax.get(POPULAR_EVENTS);
export const getEvent = id => ax.get(`${EVENT}/${id}`);
