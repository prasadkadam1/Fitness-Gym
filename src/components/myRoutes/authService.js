// authService.js

import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import { Auth0Client } from '@auth0/auth0-spa-js';

const authService = {
  configureAuth0() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const callbackUrl = `${baseUrl}/auth/callback`;

    return new Auth0Client({
      domain: 'your-auth0-domain',
      client_id: 'your-client-id',
      redirect_uri: callbackUrl
    });
  },
  // Add more authentication-related functions as needed
};

export default authService;
