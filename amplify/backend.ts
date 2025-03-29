import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { storage } from './storage/resource';
import { secondaryStorage } from './storage/resource';

defineBackend({
  auth,
  data,
  storage,
  secondaryStorage
});
