import { useState } from 'react';
import './App.css'
import type { Yaycha } from './types/yaycha';
import List from './List';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import ShowFormDialog from './ShowFormDialog';

const mockData: Yaycha[] = [
  { id: uuidv4(), content: "Hello, World!", name: "Alice" },
  { id: uuidv4(), content: "React is fun.", name: "Bob" },
  { id: uuidv4(), content: "Yay, interesting.", name: "Chris" },
]

export default function App() {
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
    setShowForm(!showForm)
  }

  const handleShowForm = () => {
    setShowForm(!showForm);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }


  return (
    <div
      style={{
        paddingTop: 20,
      }}
    >
      <div style={{
        maxWidth: 600,
        margin: "20px auto"
      }}>
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
              border: "0 none",
              padding: "0 15px",
              height: 30,
              background: "#0d6efd",
              color: "white",
            }}
            onClick={handleShowForm}
          >
            Add
          </button>
        </h1>
        {
          showForm && <ShowFormDialog
            onShowForm={handleShowForm}
            onAdd={handleAdd}
          />
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
