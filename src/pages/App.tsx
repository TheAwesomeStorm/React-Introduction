import React from 'react';
import style from './app.module.scss'
import { Form } from '../components/forms/form'
import { List } from '../components/list/list'

function App() {
  return (
    <div className={style.App}>
      <Form />
      <List />
    </div>
  );
}

export default App;
