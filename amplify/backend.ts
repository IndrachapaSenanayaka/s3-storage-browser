import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { storage, secondaryStorage } from './storage/resource';

// defineBackend({
//   auth,
//   data,
//   storage,
//   secondaryStorage
// });


const backend = defineBackend({
  auth,
  data,
});


backend.addOutput({
  storage: {
    aws_region: "ap-southeast-1",
    bucket_name: "amplify-test-my"
  },
});