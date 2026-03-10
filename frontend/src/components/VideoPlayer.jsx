function VideoPlayer({video}) {

  if(!video) return <p>No video selected</p>;

  return(

<div className="bg-black rounded-xl overflow-hidden shadow-xl">

<iframe
className="w-full h-[450px]"
src={video}
title="video"
allowFullScreen
/>

</div>

  )

}

export default VideoPlayer