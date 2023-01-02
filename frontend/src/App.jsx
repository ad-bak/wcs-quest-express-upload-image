import { useRef } from "react";
import axios from "axios";

import "./App.css";

const url = import.meta.env.VITE_BACKEND_URL;

function App() {
  const inputRef = useRef();

  const hSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);
    axios.post(url, formData);
  };
  return (
    <div className="App">
      <form encType="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="avatar" ref={inputRef} />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
}

export default App;
