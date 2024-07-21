import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [navigationIdx, setNavigationIdx] = useState(-1);
  const inputRef = useRef(null);
  const timerRef = useRef(() => {});
  function fetchSearchResults() {
    if (searchTerm.length > 0) {
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data.users.splice(0, 7)))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
    } else {
      timerRef.current = setTimeout(() => {
        // console.log(searchTerm);
        fetchSearchResults();
      }, 500);
    }
    setNavigationIdx(-1);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [searchTerm]);

  function handleSelecting(user) {
    if (selectedUsers.find((el) => el.firstName === user.firstName)) {
      return;
    }
    setSelectedUsers((prev) => [...prev, user]);
    inputRef.current.focus();
  }
  function handleUnSelecting(user) {
    let newArr = [...selectedUsers];
    newArr = newArr.filter((el) => el.id !== user.id);
    setSelectedUsers(newArr);
  }
  function handleKeyDown(e) {
    if (
      inputRef.current.value.trim() === "" &&
      selectedUsers.length > 0 &&
      e.key === "Backspace"
    ) {
      const lastUserSelected = selectedUsers[selectedUsers.length - 1];
      const newArr = selectedUsers.filter(
        (el) => el.id !== lastUserSelected.id
      );
      setSelectedUsers(newArr);
      setSuggestions([]);
    }
    if (suggestions.length > 0 && e.key === "ArrowUp") {
      if (navigationIdx === -1) {
        setNavigationIdx(suggestions.length - 1);
        return;
      }
      setNavigationIdx((prev) => prev - 1);
    }
    if (suggestions.length > 0 && e.key === "ArrowDown") {
      if (navigationIdx === suggestions.length - 1) {
        setNavigationIdx(-1);
      }
      setNavigationIdx((prev) => prev + 1);
    }
    if (suggestions.length > 0 && e.key === "Enter") {
      handleSelecting(suggestions[navigationIdx]);
    }
  }
  function handleMouseEntry() {
    setNavigationIdx(-1);
  }
  return (
    <div className="container">
      <div className="input">
        {/* <div className="pill"></div> */}
        {selectedUsers.map((user) => (
          <span key={user.email} onClick={() => handleUnSelecting(user)}>
            {user.firstName} <p>x</p>
          </span>
        ))}
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ul onMouseEnter={handleMouseEntry}>
        {suggestions.map((user, idx) => (
          <li
            className={`user ${idx === navigationIdx && "active"}`}
            key={user.email}
            onClick={() => handleSelecting(user)}
          >
            {/* {console.log(idx, navigationIdx)} */}
            {user.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}
