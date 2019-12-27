import React from 'react';

import { Button } from 'antd';

import './styles.scss';

export default function ButtonComponent({ classe, label, onClick }) {
  return (
    <Button className={classe} onClick={onClick} type="submit">
      {label}
    </Button>
  );
}
