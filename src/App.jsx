import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { RouterObject } from "./RouterList"; // Import RouterObject instead of RouterList
import "./styles/index.css";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import { NavermapsProvider } from "react-naver-maps";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Reintroduce GoogleOAuthProvider to provide context for GoogleLogin */}
    {/* <NavermapsProvider ncpClientId={naverMapClientId}> */}
    <GoogleOAuthProvider clientId={clientId}>
      <RecoilRoot>
        <RouterProvider router={RouterObject} />
      </RecoilRoot>
    </GoogleOAuthProvider>
    {/* </NavermapsProvider> */}
  </StrictMode>
);
