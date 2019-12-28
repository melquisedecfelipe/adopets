import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';

import api from './services/api';
import history from './services/history';

import Routes from './routes';

import './App.scss';
import 'antd/dist/antd.css';

export default function App() {
  useEffect(() => {
    async function getAuth() {
      const { data } = await api.post('auth/session-request', {
        system_api_key: '505763d6-4202-4b05-9efc-93b366939bcf',
      });

      localStorage.setItem('session-request', data.data.access_key);
    }

    getAuth();
  }, []);

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
