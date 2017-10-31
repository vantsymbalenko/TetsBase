import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 50.4501, lng: 30.5234 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 50.4501, lng: 30.5234 }} />}
    </GoogleMap>
));
