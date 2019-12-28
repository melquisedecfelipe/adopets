import React, { useState } from 'react';

import './styles.scss';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

import logo from '../../image/logo.svg';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sessionRequest = localStorage.getItem('session-request');

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
          headers: { Authorization: sessionRequest },
        },
      );

      localStorage.setItem('session-register', data.data.access_key);
      localStorage.setItem('organization-user', JSON.stringify(data.data.organization_user));
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
    <div className="login-container">
      <form>
        <img src={logo} alt="Adopets" />
        <h2>Bem-vindo(a)</h2>
        <p>Digite seu e-mail e senha para acessar o sistema</p>
        <Input type="text" placeholder="Seu e-mail" defaultValue={email} onBlur={handleEmail} />
        <Input
          type="password"
          placeholder="Sua senha"
          defaultValue={password}
          onBlur={handlePassword}
        />
        <Button classe="-rose" label="Entrar" onClick={handleSubmit} />
      </form>
    </div>
  );
}
