import { useContext, useState } from 'react';
import './App.css'
import type { Yaycha } from './types/yaycha';
import List from './List';
import Item from './Item';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import ThemedContext from './ThemedContext';

const mockData: Yaycha[] = [
  { id: uuidv4(), content: "Hello, World!", name: "Alice" },
  { id: uuidv4(), content: "React is fun.", name: "Bob" },
  { id: uuidv4(), content: "Yay, interesting.", name: "Chris" },
]

function App() {
  const { mode, setMode } = useContext(ThemedContext);
  const [data, setData] = useState(mockData);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  }

  const handleAdd = (content: string, name: string) => {
    const newOne = {
      id: uuidv4(),
      content,
      name,
    }
    setData([newOne, ...data]);
  }

  const handleShowForm = () => {
    setShowForm(!showForm);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <div
      style={{
        minHeight: 1500,
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        paddingTop: 20,
      }}
    >
      <div style={{ maxWidth: 600, margin: "20px auto" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Yaycha
          <button
            style={{
              width: 32,
              height: 32, borderRadius: 50,
              border: "0 none",
              background: showForm ? "#dc3545" : "#0d6efd",
              color: "white",
            }}
            onClick={handleShowForm}
          >
            {
              showForm
                ? "x"
                : "+"
            }
          </button>
          <button
            onClick={handleMode}
            style={{
              marginLeft: 8,
              padding: "0 20px",
              height: 32,
              borderRadius: 32,
              border: "0 none",
              background: mode === "dark" ? "#333" : "#ddd",
              color: mode === "dark" ? "white" : "black",
            }}>
            {mode === "dark" ? "Light" : "Dark"}
          </button>
        </h1>

        {
          showForm && <Form onAdd={handleAdd} />
        }

        <List>
          {
            data.map(item =>
              <Item
                key={item.id}
                item={item}
                onDelete={handleDelete}
              />
            )
          }
        </List>
      </div>
    </div>
  )
}

export default App
