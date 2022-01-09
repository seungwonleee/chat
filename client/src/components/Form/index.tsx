import React, { useCallback } from 'react';
import { styleForm } from './styles';

function Index() {
  const onSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <>
      <ul id="messages"></ul>
      <form id="form" css={styleForm} onSubmit={onSubmit}>
        <input id="input" type="text" autoComplete="off" tabIndex={1} />
        <button>Send</button>
      </form>
    </>
  );
}

export default Index;
