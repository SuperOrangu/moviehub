/* Input controllato (value + onChange), stato elevato al genitore. */
/* UseRef per dare il focus automatico al mount. */

import { useEffect, useRef } from "react";

function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="search"
      className="search-bar"
      placeholder="Cerca un film per titolo..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default SearchBar;