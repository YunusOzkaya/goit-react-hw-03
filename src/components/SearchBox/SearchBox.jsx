import React from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchbox}>
      <label>
        Search:
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
          placeholder="Type a name..."
        />
      </label>
    </div>
  );
}
