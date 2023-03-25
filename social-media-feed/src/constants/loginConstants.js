export const DEFAULT_USER = {
    id: 0,
    username: 'admin',
    password: 'asdfgh',
    loginCap: new Date(Date.now() + (12 * 60 * 60 * 1000)).toISOString(),
}