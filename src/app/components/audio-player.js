import { forwardRef } from "react";
export default forwardRef(function AudioPlayer({ src }, ref) {
  return (
    <audio ref={ref} >
      <source src={src} type="audio/ogg" />
    </audio>
  );
});
