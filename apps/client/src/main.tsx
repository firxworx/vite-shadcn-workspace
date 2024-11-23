import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource-variable/inter'
import '@fontsource-variable/inter/opsz-italic.css'
import './style/tailwind.css'

import App from './App'
import { IS_CLIENT } from '@/config'

const mountNode = document.getElementById('root')

if (!mountNode) {
  throw new Error("React mount point 'root' not found in document.")
}

/**
 * Refresh the page if a dynamic import fails.
 * @see https://vitejs.dev/guide/build#load-error-handling
 */
if (IS_CLIENT) {
  window.addEventListener('vite:preloadError', (_event) => {
    window.location.reload()
  })
}

ReactDOM.createRoot(mountNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
