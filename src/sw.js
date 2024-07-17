// import { Wayne } from 'wayne';
import { Wayne } from '@jcubic/wayne';
import { genResponse, serverListen, methodArr } from './utils';

const app = new Wayne();

serverListen(methodArr, app, method => async (req, res) => {
    try {
        const networkResponse = await fetch(req.url, {
            method,
            headers: req.headers
        }).catch(() => ({ status: 500, statusText: 'Internal Server Error', ok: false }));
        if (networkResponse && networkResponse.status === 200 && networkResponse.statusText === 'OK' && networkResponse.ok) {
            return res.text(await networkResponse.text());
        } else { // replace response if network request fails
            return res.text(genResponse(200, method.toUpperCase(), req));
        }
    } catch (_e) {}
});