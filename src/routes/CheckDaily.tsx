import { useState } from "react";

export const CheckDaily = () => {
  const [todos, setTodos] = useState({
    "2022-04-01": [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a todo app", completed: false },
      { id: 3, text: "Build a todo app", completed: false },
      { id: 4, text: "Build a todo app", completed: false },
      { id: 5, text: "Build a todo app", completed: false },
      { id: 6, text: "Build a todo app", completed: false },
    ],
    "2022-04-02": [
      { id: 1, text: "Deploy app", completed: false },
      { id: 2, text: "Deploy app", completed: false },
      { id: 3, text: "Deploy app", completed: false },
      { id: 4, text: "Deploy app", completed: false },
      { id: 5, text: "Deploy app", completed: false },
      { id: 6, text: "Deploy app", completed: false },
      { id: 7, text: "Deploy app", completed: false },
    ],
  });

  const handleToggle = (date:string, id:number) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [date]: prevTodos[date].map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  const removeTodo = (date: string, id: number) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [date]: prevTodos[date].filter((todo) => todo.id !== id),
    }));
  };

  return (
    <div className="h-[500px]">
      <div>
        {Object.entries(todos).map(([date, todoList]) => (
          <div key={date}>
            <div className="p-4 border border-green-400 sticky">
              <h3>{date}</h3>
            </div>
            <ul>
              {todoList.map((todo) => (
                <li
                  key={todo.id}
                  className="p-2 border flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(date, todo.id)}
                  />
                  <span
                    className="cursor-pointer"
                    onClick={() => handleToggle(date, todo.id)}
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                  <button className="px-2 bg-slate-400 text-slate-200 rounded-lg" onClick={() => removeTodo(date, todo.id)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
