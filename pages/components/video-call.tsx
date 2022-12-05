import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

export default function VideoCall() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "b84167854ccb4b03a50ae63bfe79fee3",
    channel: "demo-lap",
    token:
      "007eJxTYDAsuNK7v0Q/Ku1at3Zkxdsw6TV6C77/lGJTeb0uNeWRwUcFhiQLE0MzcwtTk+TkJJMkA+NEU4PEVDPjpLRUc8u01FTjvn+9yQ2BjAxJm8UYGRkgEMTnYEhJzc3XzUksYGAAAPrPIb0=",
    // tokenUrl: "https://agora-token-service-production-b1cc.up.railway.app",
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}
