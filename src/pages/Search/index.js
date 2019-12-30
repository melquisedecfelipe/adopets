import React, { useState } from 'react';

import './styles.scss';

import Button from '../../components/Button';
import Pets from '../../components/Pets';
import Select from '../../components/Select';

import api from '../../services/api';

import logo from '../../image/logo.svg';

export default function Search() {
  const organizationUser = JSON.parse(localStorage.getItem('organization-user'));
  const sessionRegister = localStorage.getItem('session-register');
  const [dataPets, setDataPets] = useState(undefined);
  const { first_name, last_name } = organizationUser;
  const [sexKey, setSexKey] = useState('');
  const [sizeKey, setSizeKey] = useState('');
  const [ageKey, setAgeKey] = useState('');
  let search = {};
  const sexKeys = [
    {
      value: '',
      description: 'Select',
    },
    {
      value: 'MALE',
      description: 'Male',
    },
    {
      value: 'FEMALE',
      description: 'Female',
    },
  ];
  const sizekeys = [
    {
      value: '',
      description: 'Select',
    },
    {
      value: 'S',
      description: 'S',
    },
    {
      value: 'M',
      description: 'M',
    },
    {
      value: 'L',
      description: 'L',
    },
    {
      value: 'XL',
      description: 'XL',
    },
  ];
  const agekeys = [
    {
      value: '',
      description: 'Select',
    },
    {
      value: 'BABY',
      description: 'Baby',
    },
    {
      value: 'YOUNG',
      description: 'Young',
    },
    {
      value: 'ADULT',
      description: 'Adult',
    },
    {
      value: 'SENIOR',
      description: 'Senior',
    },
  ];

  async function handleSearch(e) {
    e.preventDefault();
    if (sexKey !== '') {
      search = { ...search, sex_key: sexKey };
    }
    if (sizeKey !== '') {
      search = { ...search, size_key: sizeKey };
    }
    if (ageKey !== '') {
      search = { ...search, age_key: ageKey };
    }
    try {
      const { data } = await api.post(
        'pet/search',
        {
          search,
        },
        {
          headers: { Authorization: sessionRegister },
        },
      );

      setDataPets(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSex(e) {
    setSexKey(e);
  }

  function handleSize(e) {
    setSizeKey(e);
  }

  function handleAge(e) {
    setAgeKey(e);
  }

  return (
    <>
      <div
        className={
          dataPets !== undefined && dataPets.length !== 0
            ? 'search-container -pets'
            : 'search-container'
        }
      >
        <header>
          <img src={logo} alt="Adopets" />
          <p>
            {first_name} <strong>{last_name}</strong>
          </p>
        </header>
        <form>
          <div className="header">
            <h1>Buscar</h1>
            <div>
              <h2>Preparado para um novo amigo?</h2>
              <p>selecione os filtros e seja feliz.</p>
            </div>
          </div>
          <div className="search">
            <Select value={sexKey} onChange={handleSex} option={sexKeys} />
            <Select value={sizeKey} onChange={handleSize} option={sizekeys} />
            <Select value={ageKey} onChange={handleAge} option={agekeys} />
            <Button classe="-white" label="Buscar" onClick={handleSearch} />
          </div>
        </form>
      </div>
      {dataPets !== undefined && dataPets.result !== 0 && <Pets pets={dataPets} />}
    </>
  );
}
