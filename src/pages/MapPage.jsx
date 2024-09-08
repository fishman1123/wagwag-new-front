import { NavermapsProvider } from "react-naver-maps";
import NaverMapContainer from "./NaverMapContainer";

function MapPage() {
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

  return (
    <>
      <NavermapsProvider ncpClientId={naverMapClientId}>
        <NaverMapContainer />
      </NavermapsProvider>
    </>
  );
}

export default MapPage;
