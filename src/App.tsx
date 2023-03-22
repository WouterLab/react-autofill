import { ChangeEvent, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { mockData } from "./mock";
import { ComponentDataType } from "./types";

const initialValue = () => {
  return JSON.stringify(mockData, undefined, 2);
};

function App() {
  const [textInArea, setTextInArea] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const handleJsonInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const jsonString = e.target.value;
    try {
      const parsedJson = JSON.parse(jsonString);
      setErrorMessage("");
      const parsedJsonPretty = JSON.stringify(parsedJson, undefined, 2);
      setTextInArea(parsedJsonPretty);
    } catch (error) {
      setTextInArea(jsonString);
      setErrorMessage("Invalid JSON");
    }
  };

  return (
    <div className='App'>
      <div>
        <textarea
          className='textarea'
          onChange={handleJsonInputChange}
          value={textInArea}
        />
      </div>
      <div>
        <form className='form' action='post'>
          {!errorMessage ? (
            JSON.parse(textInArea).map((component: ComponentDataType) => (
              <Input
                key={component.id}
                type={component.type}
                required={component.required}
                id={component.id}
                label={component.label}
                defaultValue={component.defaultValue}
              />
            ))
          ) : (
            <p>{errorMessage}</p>
          )}
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

export default App;
