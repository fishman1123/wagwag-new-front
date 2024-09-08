import { Marker, NaverMap, useNavermaps } from "react-naver-maps";

function Map() {
  const navermaps = useNavermaps();
  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
      defaultZoom={10}
    >
      <Marker defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)} />
    </NaverMap>
  );
}

export default Map;
