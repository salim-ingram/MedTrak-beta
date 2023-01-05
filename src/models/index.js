// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Medication } = initSchema(schema);

export {
  Note,
  Medication
};