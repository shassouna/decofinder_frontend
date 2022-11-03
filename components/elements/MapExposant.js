
import {MapContainer, TileLayer, Popup, CircleMarker} from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Gmap = ({items}) => {
    return (
        <MapContainer className="markercluster-map" center={[items[0]['attributes']['LAT'], items[0]['attributes']['LNG']]} zoom={5} maxZoom={30}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            items.map(item=>(
                <CircleMarker  center={[item['attributes']['LAT'], item['attributes']['LNG']]} pathOptions={{ color: 'red' }} radius={7}>
                    <Popup>{item['attributes']['ADRESSE']}</Popup>
                </CircleMarker>
            )) 
            }
        </MapContainer>
    )
}

export default Gmap
