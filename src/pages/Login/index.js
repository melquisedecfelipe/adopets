import React, { useState } from 'react';

import './styles.scss';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = localStorage.getItem('auth');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await api.post(
        'auth/session-register',
        {
          organization_user: {
            email,
            password,
          },
        },
        {
          headers: { Authorization: auth },
        },
      );

      localStorage.setItem('auth', data.data.access_key);
      localStorage.setItem('user', JSON.stringify(data.data.organization_user));
      history.push('/buscar');
    } catch (error) {
      console.error(error);
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <Input type="text" placeholder="Seu e-mail" defaultValue={email} onBlur={handleEmail} />
      <Input
        type="password"
        placeholder="Sua senha"
        defaultValue={password}
        onBlur={handlePassword}
      />
      <Button classe="button -red" label="Entrar" onClick={handleSubmit} />
    </div>
  );
}
