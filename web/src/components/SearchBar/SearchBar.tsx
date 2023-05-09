import styles from './SearchBar.module.css'

function SearchBar(props) {
  return (
    <form onSubmit={props.handleSearch} className={styles.form}>
      <h2 style={{ color: 'white' }} className={styles.heading}>
        Search
      </h2>
      <input
        type="text"
        id="location"
        value={props.location}
        onChange={props.handleLocationChange}
        className={styles.input}
      />
      <button
        style={{
          backgroundColor: '#4b4b4b',
          color: 'white',
          marginTop: '10px',
        }}
        type="submit"
        className={styles.button}
      >
        Submit
      </button>
    </form>
  )
}

export default SearchBar
