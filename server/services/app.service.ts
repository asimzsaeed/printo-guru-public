/**
 * Created by asimz on 11/01/2017.
 */
import { datastore }   from '../db/gsDatastore';
var appData  = require('../app.constants.json');

export class AppService {

    constructor( ) {

    }

    public submitAppData(): any {
        console.log(`submitAppData>>`);
        // The kind for the new entity
        const kind = 'Application';
        // The name/ID for the new entity
        const name = 'constants';
        // The Cloud Datastore key for the new entity
        const entityKey = datastore.key([kind, name]);

        // Prepares the new entity
        const entity = {
            key: entityKey,
            data: appData
        };

        // Saves the entity
       return datastore.save(entity)
           .then(() => {
               console.log(`Saved ${entity.key.name}`);
               return "a";
           })
           .catch((err) => {
               console.log(`err ${err}`);
               return err;
           })

    }
}
