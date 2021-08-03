import "bootstrap/dist/css/bootstrap.min.css"
import "firebase/auth"
import React from 'react';
import AuthProvider from './src/context/auth'
import './src/styles/global.css';

export const wrapRootElement = ({element}) => <AuthProvider>{element}</AuthProvider>