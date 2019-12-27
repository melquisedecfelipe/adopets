import React from 'react';

import './styles.scss';

import { Select } from 'antd';

const { Option } = Select;

export default function SelectComponent({ onChange, option, placeholder, value }) {
  return (
    <Select value={value} onChange={onChange} placeholder={placeholder} showSearch>
      {option
        ? option.map(elem => (
            <Option value={elem.value} key={elem.value}>
              {elem.description}
            </Option>
          ))
        : null}
    </Select>
  );
}
