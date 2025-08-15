import { useContext } from 'react';
import ThemedContext from './ThemedContext';
import Form from './Form';

interface ShowFormDialogProps {
  onShowForm: () => void;
  onAdd: (content: string, name: string) => void;
}

export default function ShowFormDialog({
  onShowForm,
  onAdd,
}: ShowFormDialogProps) {
  const { mode } = useContext(ThemedContext);

  return (
    < div
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onShowForm}
    >
      <div
        style={{
          background: mode === "dark" ? "#222" : "white",
          padding: 20,
          borderRadius: 8,
          width: "90%",
          maxWidth: 500,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            width: 20,
            height: 20,
            borderRadius: 60,
            border: "0 none",
            background: "#dc3545",
            color: "white",
          }}
          onClick={onShowForm}
        >
          x
        </button>
        <Form onAdd={onAdd} />
      </div>
    </div >

  )
}
