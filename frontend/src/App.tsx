import { useState } from 'react';
import './App.css'
import type { Yaycha } from './types/yaycha';
import List from './List';
import Item from './Item';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';

const mockData: Yaycha[] = [
  { id: uuidv4(), content: "Hello, World!", name: "Alice" },
  { id: uuidv4(), content: "React is fun.", name: "Bob" },
  { id: uuidv4(), content: "Yay, interesting.", name: "Chris" },
]

function App() {
  const [data, setData] = useState(mockData);

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
  }

  const handleAdd = (content, name) => {
    const newOne = {
      id: uuidv4(),
      content,
      name,
    }
    setData([newOne, ...data]);
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>

      <Form onAdd={handleAdd} />

      <List>
        {
          data.map(item => (
            <Item
              key={item.id}
              item={item}
              onDelete={handleDelete}
            />
          ))
        }
      </List>
    </div>
  )
}

export default App
