import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Gmap = ({produit}) => {
    return (
        <MapContainer className="markercluster-map" center={[48.856613, 2.352222]} zoom={12} maxZoom={18}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            produit['attributes'].lienrevendeurproduits['data'].map(lienrevendeurproduit=>
                console.log(lienrevendeurproduit['attributes'].exposant['data']['attributes']['LAT']),
                <Marker position={[lienrevendeurproduit['attributes'].exposant['data']['attributes']['LAT'], lienrevendeurproduit['attributes'].exposant['data']['attributes']['LNG']]}>
                    <Popup>Ici</Popup>
                </Marker>   
            )
            }
        </MapContainer>
    );
};

export default Gmap;
