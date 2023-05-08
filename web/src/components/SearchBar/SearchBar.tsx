// import { useState } from 'react'

// function SearchBar({ onSearch }) {
//   const [location, setLocation] = useState('')

//   function handleSubmit(event) {
//     event.preventDefault()
//     onSearch(location)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={location}
//         onChange={(event) => setLocation(event.target.value)}
//         placeholder="Enter your location"
//       />
//       <button type="submit">Search</button>
//     </form>
//   )
// }

// export default SearchBar

const positions = [
  [51.505, -0.09],
  [55.505, -0.01],
]

{
  positions.map((map) => {
    render(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  })
}
