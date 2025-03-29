"use client";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "../config/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { StorageBrowser } from '../components/StorageBrowser';

Amplify.configure(outputs);

console.log(outputs);


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
