import React, { useRef, useCallback, useEffect } from 'react';

import useConsole from '../../../hooks/useConsole';
import styles from './Main.module.css';

const Main = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { messages, dispatch } = useConsole();

  const handleKeyPress = useCallback(
    ({ key, currentTarget }: React.KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter') {
        const raw = currentTarget.value;
        const line = raw.trim();
        if (line === '') return;
        const [command, arg] = line.split(' ');
        dispatch(command, arg, raw);
        currentTarget.value = '';
      }
    },
    [dispatch]
  );

  const handleClick = useCallback(() => {
    inputEl.current?.focus();
  }, []);

  useEffect(() => {
    inputEl.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={`${styles.main} border`} onClick={handleClick}>
      <ul className={styles.list}>
        {messages.map(({ text }, id) => (
          <li className={styles.item} key={id}>
            <pre className={styles.pre}>{text}</pre>
          </li>
        ))}
      </ul>
      <div className={styles.wrapper}>
        <input className={styles.input} type="text" onKeyPress={handleKeyPress} ref={inputEl} autoFocus />
      </div>
    </div>
  );
};

export default Main;
