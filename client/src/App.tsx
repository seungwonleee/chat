import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from './ResetStyles';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Global styles={resetStyles} />
      <Form></Form>
    </div>
  );
}

export default App;
