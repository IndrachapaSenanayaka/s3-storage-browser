"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { StorageBrowser } from '../components/StorageBrowser';

Amplify.configure(outputs);

console.log(outputs);

const client = generateClient<Schema>();



Amplify.configure({
  Storage: {
    S3: {
      bucket: 'amplify-dk5xyu3b46ytw-mai-amplifydataamplifycodege-gkrtof8fomyc',
      region: 'ap-southeast-1',
      // default bucket metadata should be duplicated below with any additional buckets
      buckets: {
        'amplify-dk5xyu3b46ytw-mai-amplifydataamplifycodege-gkrtof8fomyc': {
          bucketName: 'amplify-dk5xyu3b46ytw-mai-amplifydataamplifycodege-gkrtof8fomyc',
          region: 'ap-southeast-1'
        },
        'amplify-test-my': {
          bucketName: 'amplify-test-my',
          region: 'ap-southeast-1'
        }
      }
    }
  }
});



export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>

          {/* StorageBrowser Component */}
          <h2>Your Files</h2>
          <StorageBrowser />

        </main>
      )}
    </Authenticator>
  );
}
