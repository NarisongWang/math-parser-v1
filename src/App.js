import React, { useState } from "react";
import { validateInput } from "./lexer";
import nearley from "nearley";
import grammar from "./math.js";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [invalidContent, setInvalidContent] = useState([]);

  const handleParse = () => {
    const { valid, cleanedInput, message, invalidContent } = validateInput(input);
    setInput(cleanedInput);
    setIsValid(valid);
    setInvalidContent(invalidContent);
    if (valid) {
      const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
      parser.feed(cleanedInput);
      setResult(parser.results[0]?"True":"False");
    }else{
      setResult(message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mathematical Equation Parser</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter expression..."
        style={{ width: "350px", padding: "10px", marginBottom: "10px" }}
        />
      <button onClick={handleParse} style={{ padding: "10px 20px" }}>
        Parse
      </button>
      <div style={{ marginTop: "20px", fontSize: "18px", color: isValid === null ? "black" : isValid ? "green" : "red", }}>
        <strong>{result}</strong> 
      </div>
      {/* Highlight invalid content */}
      {invalidContent.length > 0 && (
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          <strong>Invalid Content:</strong>
          {invalidContent.map((char, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "yellow",
                color: "black",
                padding: "2px 5px",
                margin: "0 2px",
                borderRadius: "3px",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
