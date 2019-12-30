import React from 'react';

import './styles.scss';

export default function Pets({ pets }) {
  const { result } = pets;

  return (
    <div className="pets-container">
      <p>
        Pets{' '}
        <span>
          - <strong>{result.length}</strong> pets encontrados
        </span>
      </p>
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
  );
}
