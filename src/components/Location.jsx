const Location = ({ location }) => {
  return (
    <section>
      <h3>{location?.name}</h3>
      <ul>
        <li>Type: {location?.type}</li>
        <li>Dimension: {location?.dimension}</li>
        <li>Population: {location?.residents.length}</li>
      </ul>
    </section>
  )
}
export default Location