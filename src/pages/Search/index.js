import React, { useState, useEffect } from 'react';

import './styles.scss';

import Button from '../../components/Button';
import Paginate from '../../components/Paginate';
import Pets from '../../components/Pets';
import Select from '../../components/Select';

import api from '../../services/api';

import logo from '../../image/logo.svg';

import ageKeys from './ageKeys';
import optionsSelect from './optionsSelect';
import sexKeys from './sexKeys';
import sizeKeys from './sizeKeys';

export default function Search() {
  const organizationUser = JSON.parse(localStorage.getItem('organization-user'));
  const sessionRegister = localStorage.getItem('session-register');
  const firstName = organizationUser.first_name;
  const lastName = organizationUser.last_name;

  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('');
  const [petPerPage, setPetPerPage] = useState(12);
  const [pets, setPets] = useState(undefined);
  const [totalPages, setTotalPages] = useState(undefined);

  const [ageKey, setAgeKey] = useState('');
  const [sexKey, setSexKey] = useState('');
  const [sizeKey, setSizeKey] = useState('');

  let search = {};
  let options = {};

  const paginate = pageNumber => setCurrentPage(pageNumber);

  async function handleSearch(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    if (sexKey !== '') {
      search = { ...search, sex_key: sexKey };
    }
    if (sizeKey !== '') {
      search = { ...search, size_key: sizeKey };
    }
    if (ageKey !== '') {
      search = { ...search, age_key: ageKey };
    }
    if (order !== '') {
      options = { ...options, sort: [order] };
    }
    options = { ...options, page: currentPage, limit: petPerPage };

    try {
      const { data } = await api.post(
        'pet/search',
        {
          search,
          options,
        },
        {
          headers: { Authorization: sessionRegister },
        },
      );
      setPets(data.data);
      setTotalPages(data.data.pages);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [order, currentPage, petPerPage]);

  function handleSex(e) {
    setSexKey(e);
  }

  function handleSize(e) {
    setSizeKey(e);
  }

  function handleAge(e) {
    setAgeKey(e);
  }

  function handlePetPerPage(e) {
    setPetPerPage(e);
  }

  function handleOrder(e) {
    setOrder(e);
    options = { ...options, sort: [e] };
  }

  return (
    <>
      <div
        className={
          pets !== undefined && pets.length !== 0 ? 'search-container -pets' : 'search-container'
        }
      >
        <header>
          <img src={logo} alt="Adopets" />
          <p>
            {firstName} <strong>{lastName}</strong>
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
            <Select value={sizeKey} onChange={handleSize} option={sizeKeys} />
            <Select value={ageKey} onChange={handleAge} option={ageKeys} />
            <Button classe="-white" label="Buscar" onClick={handleSearch} />
          </div>
        </form>
      </div>
      {pets !== undefined && <Pets pets={pets} onChange={handleOrder} />}
      {pets !== undefined && pets.result.length !== 0 && (
        <div className="footer">
          <div className="register">
            <div className="select">
              <p>Mostrando</p>
              <Select value={petPerPage} onChange={handlePetPerPage} option={optionsSelect} />
              <p>
                de <strong>{pets.count}</strong> registros encontrados.{' '}
              </p>
            </div>
            <div className="paginate">
              <Paginate
                currentPage={currentPage}
                petPerPage={petPerPage}
                totalPages={totalPages}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
