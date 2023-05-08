import { useMemo, useState } from 'react'

import { Icon } from 'leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import ParkList from '../ParkList/ParkList'

const HomePage = () => {
  const [location, setLocation] = useState('')
  const [parks, setParks] = useState([])
  const [mapCenter, setMapCenter] = useState([51.505, -0.09])

  const handleSearch = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
      )

      const data = await response.json()
      const { lat, lon } = data[0]

      const response2 = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      )
      const data2 = await response2.json()
      const city = data2.address.city
      const state = data2.address.state
      const response3 = await fetch(
        `https://nominatim.openstreetmap.org/search?q=parks+in+${city}+${state}&format=json`
      )
      const data3 = await response3.json()
      const parkList = data3.map((park) => {
        return {
          name: park.display_name,
          lat: park.lat,
          lon: park.lon,
        }
      })
      setParks(parkList)
      setMapCenter([lat, lon])
    } catch (error) {
      console.error(error)
    }
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const renderMap = useMemo(
    () => (
      <MapContainer
        key={location}
        center={[55.505, -0.09]}
        zoom={13}
        style={{ height: '80vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {parks.map((park) => (
          <Marker
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
            key={park.name}
            position={[park.lat, park.lon]}
          >
            <Popup>{park.name}</Popup>
          </Marker>
        ))}
        <SetViewOnClick coords={mapCenter} />
      </MapContainer>
    ),
    [mapCenter]
  )

  function SetViewOnClick({ coords }) {
    const map = useMap()
    map.setView(coords, map.getZoom())
    return null
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="location">Enter your location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit">Search</button>
      </form>
      {renderMap}
      <ParkList parks={parks} />
    </div>
  )
}

export default HomePage
