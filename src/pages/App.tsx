import React from 'react';
import style from './app.module.scss'
import { Form } from '../components/forms/form'
import { List } from '../components/list/list'
import { Stopwatch } from '../components/stopwatch/stopwatch'

function App() {
  return (
    <div className={style.App}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
