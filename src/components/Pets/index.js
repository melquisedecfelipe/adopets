import React, { useState } from 'react';

import './styles.scss';

import cao from '../../image/dog.jpg';

import Select from '../Select';
import orders from './orders';

export default function Pets({ pets, onChange }) {
  const [order, setOrder] = useState('');
  const { count } = pets;
  const { result } = pets;

  function handleOrder(e) {
    setOrder(e);
    onChange(e);
  }

  return (
    <div className="pets-container">
      {result.length !== 0 ? (
        <div className="found">
          <div className="header">
            <p>
              Pets{' '}
              <span>
                - <strong>{count}</strong> pets encontrados
              </span>
            </p>
            <Select value={order} onChange={handleOrder} option={orders} />
          </div>
          <div className="pets-content">
            {result.map(elem => (
              <div className="pets-card" key={elem.id}>
                <div className="header">
                  <div>
                    <h2>{elem.name}</h2>
                    <p>{elem.sex_key}</p>
                  </div>
                  <p>
                    Preço: <strong>{elem.price}</strong>
                  </p>
                </div>
                <div className="hr" />
                <div className="body">
                  <p>{elem.description}</p>
                  <ul>
                    <li>
                      Idade: <strong>{elem.age_key}</strong>
                    </li>
                    <li>
                      Tamanho: <strong>{elem.size_key}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="not-found">
          <img src={cao} alt="cão farejador" />
          <div>
            <h1>Poxa...</h1>
            <h2>Nosso cão farejador não encontrou nehum pet com esse filtro.</h2>
            <p>Selecione outro filtro e busque novamente.</p>
          </div>
        </div>
      )}
    </div>
  );
}
