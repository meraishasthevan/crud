import React, { useRef } from "react";


function Addlist({ setlist, generateId }) {
  const nameRef = useRef();
  const professionRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const profession = professionRef.current.value;
    const newlist = { id: generateId(), name, profession };
    setlist((prevlist) => prevlist.concat(newlist));
    
    // Clear the input fields
    nameRef.current.value = "";
    professionRef.current.value = "";
  }

  return (
    <div className="addlist">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" ref={nameRef} className="username" />
        <input type="text" name="profession" placeholder="Enter your profession" ref={professionRef} className="userprofession"/>
        <button type="submit">Addlist</button>
      </form>
    </div>
  );
}

export default Addlist;
