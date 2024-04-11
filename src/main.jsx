import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './components/myRoutes/Routes.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import authService from './components/myRoutes/authService.js';
// const auth0Client = authService.configureAuth0();
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      // auth0Client={auth0Client}
      domain="dev-rfpldw6rq46g1o65.us.auth0.com"
      clientId="HTWFJjNNTsFWosqNDoAGeoP7eTLJcFi2"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Auth0Provider>
  </Provider>
)
