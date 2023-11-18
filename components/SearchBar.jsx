import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRequest } from "@src/service/useRequest";
import { getPeopleByPartialName } from "@src/service/apis/mbtiapp";
import { useThrottle } from '../src/service/useThrottle';

export default function SearchBar({ onSelectName }) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const throttledQuery = useThrottle(searchQuery, 700);
  const [getPeople, peopleSuggestions] = useRequest(getPeopleByPartialName);

  const handleSelectName = (name) => {
    setSearchQuery(name);
    onSelectName(name);
  }

  const clearSearch = () => {
    setSearchQuery('');
    onSelectName(null);
  };

  useEffect(() => {
    if (throttledQuery) {
      getPeople({ query: throttledQuery })
    }
  }, [throttledQuery, getPeople]);

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search a STAR"
          className={`input w-full pr-10 ${isFocused ? "input-bordered input-primary" : "input-ghost"}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          {searchQuery && (
            <button onClick={clearSearch} className="px-2">
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          )}
          <div className="px-2">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </div>
        </div>
        {searchQuery && peopleSuggestions && (
          <ul
            style={{
              position: 'absolute',
              width: '100%',
              backgroundColor: '#333',
              border: '1px solid #ddd',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              maxHeight: '200px',
              overflowY: 'auto',
              zIndex: 1000
            }}
          >
            {peopleSuggestions.data.data.map((suggestion, index) => {
              // console.log("Suggestion at index", index, ":", suggestion.name);
              return (
                <li key={index} onClick={() => handleSelectName(suggestion.name)} style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee',
                  color: 'white',
                }}>
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
