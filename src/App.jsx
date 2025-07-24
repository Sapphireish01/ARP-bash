import { useState } from "react";
import "./App.css"
import StartScreen from "./components/Startscreen";
import Carousel from "./components/Carousel";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="min-h-screen bg-emerald-900 flex items-center justify-center">
      {!showCarousel ? (
        <StartScreen onClick={() => setShowCarousel(true)} />
      ) : (
        <div className="flex flex-col items-center justify-center text-emerald-50 p-6 max-w-xl text-center">
          <h1 className="text-4xl font-serif font-bold mb-6 text-emerald-50">
            Happy Birthday Sir!
            <br />
            🥳✨🥳🎉🥳🎂
          </h1>
          <Carousel />
          <AudioPlayer />          
        </div>
      )}
    </div>
  );
}