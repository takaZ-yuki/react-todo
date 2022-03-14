import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onClickComplate = (index) => {
    const newInComplateTodos = [...incomplateTodos];
    newInComplateTodos.splice(index, 1);

    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newInComplateTodos);
    setComplateTodos(newComplateTodos);
  };

  const onClickBacl = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);

    const newInComplateTodos = [...incomplateTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newInComplateTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickComplate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complate-area">
        <p className="title">完了のTODO</p>
        <ul>
          {complateTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickBacl(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
