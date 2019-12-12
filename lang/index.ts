import ISO6391 from 'iso-639-1';
import axios from 'axios';
import * as _ from 'lodash';

export interface ILang {
  code: string;
  name: string;
  nativeName: string;
  // file: string;
}

export default async function getLanguages() {
  const messages: {
    [code: string]: { [key: string]: string };
  } = await new Promise(resolve => {
    axios
      .get('http://localhost:3000/i18n', { timeout: 5000 })
      .then(res => {
        if (
          res.data &&
          typeof res.data === 'object' &&
          Object.keys(res.data).length
        ) {
          const messages = require('./messages.json');

          resolve(_.merge(messages, res.data));
        } else {
          resolve(require('./messages.json'));
        }
      })
      .catch(() => {
        resolve(require('./messages.json'));
      });
  });

  const languages: ILang[] = ISO6391.getLanguages(Object.keys(messages));

  return { messages, languages };
}
