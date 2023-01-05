import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { studioTheme } from "./ui-components";

import { Amplify } from 'aws-amplify'
import config from './aws-exports'

import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const roots = ReactDOM.createRoot(document.getElementById('root'))
roots.render(
  <AmplifyProvider theme={studioTheme}>
    <App />
  </AmplifyProvider>
)