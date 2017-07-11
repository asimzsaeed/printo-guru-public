/**
 * Created by asimz on 10/01/2017.
 */
const path = require('path');
const datastore = require('@google-cloud/datastore')({
    projectId: 'com-vizob-printo-guru',
    keyFilename: path.join(__dirname, '../gcloud/com-vizob-printo-guru-b4ab3254d2c5.json')
});

export { datastore }