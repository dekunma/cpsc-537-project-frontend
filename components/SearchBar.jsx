import { useRef } from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function SearchBar() {
  const mbtiTypes = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-base-100" style={{ padding: "2em 10em" }}>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">PROJECT NAME</a>
      </div>
      <div className="flex items-center" style={{ justifyContent: "right" }}>
        <div
          style={{ width: "50%", alignItems: "flex-end", marginRight: "1.5em" }}
          className="form-control"
        >
          <input
            type="text"
            placeholder="Search"
            className={[
              styles.searchInput,
              "input input-bordered w-24 md:w-auto",
            ].join(" ")}
            // className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <ul className="menu menu-horizontal px-2" ref={dropdownRef}>
          <li>
            <details open={isOpen} onClick={() => setIsOpen(!isOpen)}>
              <summary>MBTI Types</summary>
              <ul
                className="p-2 bg-base-100"
                style={{ overflow: "auto", columns: 3 }}
              >
                {mbtiTypes.map((type) => (
                  <li key={type}>
                    <a>{type}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
