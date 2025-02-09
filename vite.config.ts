import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

export default defineConfig({
  // plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Allows LAN access
  //   port: 5173,
  //   strictPort: true, // Ensures the server always runs on this port
  //   https: {
  //     key: './certs/server.key',
  //     cert: './certs/server.crt',
  //   },
  //   cors: {
  //     origin: ['https://trusted-frontend.com'], // Restrict to specific origins
  //     credentials: true,
  //   },
  //   hmr: {
  //     clientPort: 443, // Ensures HMR works properly over HTTPS
  //   },
  // },

  server: {
    host: true, // Allows access from other devices
    port: 5173,
    strictPort: true,
    https: false, // Disable HTTPS for now
  }  
  
})
