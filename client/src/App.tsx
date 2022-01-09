import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from './ResetStyles';
import Chat from './components/Chat';

function App() {
  return (
    <div>
      <Global styles={resetStyles} />
      <Chat />
    </div>
  );
}

export default App;
