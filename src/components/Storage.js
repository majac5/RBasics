import { useState, useEffect } from "react";

const Storage = () => {

const [name, setName] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("name");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});
  
  console.log(name);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>

  );
};

export default Storage;