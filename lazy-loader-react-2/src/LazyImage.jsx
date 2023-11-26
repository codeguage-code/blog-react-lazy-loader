import { useState, useEffect, useRef } from 'react';


function LazyImage({ src, width, height }) {
   const [srcExists, setSrcExists] = useState(false);
   const divRef = useRef();

   useEffect(() => {
      divRef.current.setSrcExists = setSrcExists;
      LazyImage.io.observe(divRef.current);
   }, []);

   return (
      <div style={{ maxWidth: width }}>
         <div
            style={{ paddingBottom: `${height / width * 100}%` }}
            ref={divRef}
            className="lazy"
         >
            <img src={srcExists ? src : null}/>
         </div>
      </div>
   );
}

function ioCallback(entries, io) {
   entries.forEach(entry => {
      if (entry.intersectionRatio >= 0 && entry.isIntersecting) {
         setTimeout(() => {
            io.unobserve(entry.target);
            entry.target.setSrcExists(true);
         }, 1000);
      }
   });
}

LazyImage.io = new IntersectionObserver(ioCallback, {
   root: null,
   threshold: [0]
});

export default LazyImage;