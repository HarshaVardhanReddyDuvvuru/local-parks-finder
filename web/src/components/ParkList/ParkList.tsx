import styles from './ParkList.module.css'

function ParkList({ parks }) {
  console.log(parks)
  return (
    <>
      <h1 className={styles.heading}>List of Parks in this location are </h1>
      <ul>
        {parks.map((park) => (
          <li key={park.id}>
            <p>{park.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ParkList
