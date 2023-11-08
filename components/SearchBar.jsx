import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search a person..."
          className={`input w-full pr-10 ${
            isFocused ? "input-bordered input-primary" : "input-ghost"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
      </div>
    </div>
  );
}
