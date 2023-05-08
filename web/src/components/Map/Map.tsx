import { useState, useEffect } from 'react'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {
  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map)

    setMap(map)
  }, [])

  return <div id="map" style={{ height: '100vh' }} />
}

export default Map
