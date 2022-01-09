import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import { styleForm, styleChat } from './styles';

const socket = io('http://localhost:4000');

function Index() {
  const [user, setUser] = useState({ message: '', name: '' });
  const [chat, setChat] = useState<Array<{ name: string; message: string }>>(
    []
  );
  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  }, [chat]);
  console.log(socket.connect().connected);
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { name, message } = user;
      socket.emit('message', { name, message });
      setUser({ message: '', name });
    },
    [user]
  );

  const onChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    },
    [user]
  );

  const renderChat = useCallback(() => {
    return chat.map(({ name, message }, index) => (
      <li key={index} css={styleChat}>
        {name}: <span>{message}</span>
      </li>
    ));
  }, [chat]);
  return (
    <div>
      <h1>Chat</h1>
      <div>{renderChat()}</div>

      <form css={styleForm} onSubmit={onSubmit}>
        <input type="text" name="name" value={user.name} onChange={onChange} />
        <input
          type="text"
          name="message"
          value={user.message}
          onChange={onChange}
        />
        <button>전송</button>
      </form>
    </div>
  );
}

export default Index;
