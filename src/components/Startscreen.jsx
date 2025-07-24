export default function StartScreen({ onClick }) {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-medium mb-4 text-emerald-50">
        A special message just for you, Birthday boy and Assistant Birthday girl.
      </h2>
      <button
        onClick={onClick}
        className="bg-emerald-700 animate-pulse text-white px-8 py-4 text-xl rounded-full shadow-lg hover:bg-emerald-800 transition"
      >
        Surprise
      </button>
    </div>
  );
}