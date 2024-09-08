import { Container as MapDiv } from "react-naver-maps";
import Map from "./Map";
function NaverMapContainer() {
  return (
    <MapDiv style={{ width: "100vw", height: "100vh" }}>
      <Map />
    </MapDiv>
  );
}

export default NaverMapContainer;
