import React, { ChangeEvent } from 'react'
import styles from "./search.module.css";

type Props = {
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void,
    search: string
}

const SearchBar = ({handleSearchChange, search}: Props) => {
  return (
    <div>
        <input 
            className={styles.searchInput}
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder='Search List...' 
        />
    </div>
  )
}

export default SearchBar