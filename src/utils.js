export const genReponseText = (statusCode, method, url, userAgent) => `${statusCode} [${new Date().toISOString().split('.')[0]}] ${method} ${url} ${userAgent}`;
export const genResponse = (statusCode, method, req) => genReponseText(statusCode, method, req.url.replace('http://localhost:3001', ''), req.headers.get(['user-agent']));
export const serverListen = (methodArr, app, cb) => methodArr.forEach(method => app[method]('/api/*', cb(method)));
export const methodArr = ['get', 'post', 'put', 'delete'];