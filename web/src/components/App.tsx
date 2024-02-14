import React, { useState } from "react";
import "./App.css";
import { useNuiEvent } from "../hooks/useNuiEvent";
import TextUI from "./TextUI";

interface TextUIProps {
  id: string;
  label: string;
  keybind: string;
  visible: boolean;
}

const App: React.FC = () => {
  const [textuis, setTextUIs] = useState<TextUIProps[]>([]);

  function addTextUI(id: string, label: string, keybind: string) {
    const newAlert: TextUIProps = {
      id: id,
      label: label,
      keybind: keybind,
      visible: true
    };

    setTextUIs((prevAlerts) => [...prevAlerts, newAlert]);
  }

  function hideTextUI(id: string) {
    setTextUIs((prevTextUIs: Array<TextUIProps>) =>
      prevTextUIs.map((textui: TextUIProps) =>
        textui.id === id ? { ...textui, visible: false } : textui
      )
    );
  }

  useNuiEvent<{ id: string, label: string, keybind: string }>('showTextUI', (data) => {
    addTextUI(data.id, data.label, data.keybind);
  });

  useNuiEvent<{ id: string }>('hideTextUI', (data) => {
    hideTextUI(data.id);
  });

  return (
    <div className="nui-wrapper">
      {textuis.map((textui: TextUIProps) => (
        textui.visible && <TextUI {...textui} />
      ))}
    </div>
  );
};

export default App;