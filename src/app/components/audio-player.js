import { forwardRef } from "react";

export default forwardRef(function AudioPlayer({ src, setProgress }, ref) {
  return (
    <audio
      onTimeUpdate={(e) =>
        // console.log(
        //   e.currentTarget.currentTime,
        //   e.currentTarget.duration,
        //   Math.round(
        //     (e.currentTarget.currentTime / e.currentTarget.duration) * 100 * 100
        //   ) / 100
        // )
        setProgress(
          Math.round(
            (e.currentTarget.currentTime / e.currentTarget.duration) * 100 * 100
          ) / 100
        )
      }
      ref={ref}
      onEnded={() => setProgress(0)}
    >
      <source src={src} type="audio/ogg" />
    </audio>
  );
});
