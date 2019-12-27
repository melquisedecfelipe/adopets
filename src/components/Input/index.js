import React from 'react';

import { Input } from 'antd';

import './styles.scss';

export default function InputComponent({ defaultValue, onBlur, placeholder, type }) {
  return (
    <Input defaultValue={defaultValue} onBlur={onBlur} placeholder={placeholder} type={type} />
  );
}
