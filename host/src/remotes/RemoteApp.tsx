import {lazy} from "react";

const RemoteApp = lazy(() => import('remoteApp/RemoteApp') as never);
export default RemoteApp;