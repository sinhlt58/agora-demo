import dynamic from "next/dynamic";

const VideoCall = dynamic(import("./components/video-call"), { ssr: false });

export default function Home() {
  return <VideoCall />;
}
