export default function VideoHero({ video }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-2xl mb-12 bg-gray-900">
      {/* Portrait Video Container */}
      <div className="flex justify-center items-center max-h-[600px]">
        <video
          src={video.src}
          controls
          preload="metadata"
          playsInline
          className="max-h-[600px] w-auto max-w-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
        <h3 className="text-white text-xl font-bold">{video.title}</h3>
        <p className="text-white/90 text-sm">{video.description}</p>
      </div>
    </div>
  );
}
