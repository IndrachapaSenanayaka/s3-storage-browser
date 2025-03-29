import * as s3 from 'aws-cdk-lib/aws-s3';
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
  storage,
  secondaryStorage
});


const s3Bucket = backend.storage.resources.bucket;


const cfnBucket = s3Bucket.node.defaultChild as s3.CfnBucket;


cfnBucket.accelerateConfiguration = {
  accelerationStatus: "Enabled" // 'Suspended' if you want to disable transfer acceleration
}


