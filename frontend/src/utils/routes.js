export const apiPath = '/api/v1'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  NOT_FOUND: '*',
  MESSAGES: () => [apiPath, 'messages'].join('/'),
  CHANNELS: () => [apiPath, 'channels'].join('/'),
}
