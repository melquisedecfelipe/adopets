import React, { useState } from 'react';

import './styles.scss';

import Button from '../../components/Button';
import Select from '../../components/Select';

import api from '../../services/api';

export default function Search() {
  const auth = localStorage.getItem('auth');
  const [sexKey, setSexKey] = useState('');
  const sexKeys = [
    {
      value: 'MALE',
      description: 'Male',
    },
    {
      value: 'FEMALE',
      description: 'Female',
    },
  ];

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const { data } = await api.post(
        'pet/search',
        {
          search: {
            sex_key: sexKey,
          },
        },
        {
          headers: { Authorization: auth },
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  function handleWallet(e) {
    setSexKey(e);
  }

  return (
    <div>
      <Select value={sexKey} onChange={handleWallet} option={sexKeys} placeholder="Selecione" />
      <Button classe="button -red" label="Entrar" onClick={handleSearch} />
    </div>
  );
}
