// use superagent to make the http requests, though we could use jquery, etc.
import request from 'superagent/lib/client';

export default {
    getContacts: (url) => {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .end((err, response) => {
                  if(err) reject(err);
                  resolve(JSON.parse(response.text));
                })
        });
    }
}