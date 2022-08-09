import { FC } from "react";
import { RecoilRoot } from "recoil";
import App from "./App";

const Code : FC = () => {
    return(
        <RecoilRoot>
          <App />
        </RecoilRoot>
    )
}
export default Code;