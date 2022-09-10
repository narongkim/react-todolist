import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../reducer/actions';

function AddTodo() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const onChangeText = (e) => {
    setName(e.target.value);
  };
  const submitADD = () => {
    dispatch({
      type: Actions.ADD,
      data: {
        name: name,
        isCompleted: false,
      },
    });
    setName('');
  };
  return (
    <>
      <input
        type="text"
        placeholder={'할 일 추가'}
        value={name}
        onChange={onChangeText}
      />
      <button onClick={submitADD}> ADD </button>
    </>
  );
}

export default AddTodo;
