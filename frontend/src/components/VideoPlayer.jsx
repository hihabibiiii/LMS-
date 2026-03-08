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
<button
className="bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-600"
>
Buy Course ₹499
</button>
</div>

  )

}

export default VideoPlayer