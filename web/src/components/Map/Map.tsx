import { Icon } from 'leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

function SetViewOnClick({ coords }) {
  const map = useMap()
  map.setView(coords, map.getZoom())
  return null
}

function Map(props: any) {
  return (
    <MapContainer
      key={props.location}
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
  )
}

export default Map
