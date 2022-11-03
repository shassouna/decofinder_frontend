
import {MapContainer, TileLayer, Popup, CircleMarker} from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Gmap = ({item}) => {
    return (
        <MapContainer className="markercluster-map" center={[item['attributes']['LAT'], item['attributes']['LNG']]} zoom={6} maxZoom={30} scrollWheelZoom={true}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CircleMarker  center={[item['attributes']['LAT'], item['attributes']['LNG']]} pathOptions={{ color: 'red' }} radius={7}>
                <Popup>{item['attributes']['ADRESSE']}</Popup>
            </CircleMarker>
        </MapContainer>
    )
}

export default Gmap
