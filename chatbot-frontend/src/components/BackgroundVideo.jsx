const BackgroundVideo = () => (
    <video className="bg-video" autoPlay muted loop>
      <source src="/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
  export default BackgroundVideo;