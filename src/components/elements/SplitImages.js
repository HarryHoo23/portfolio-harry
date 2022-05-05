import { forwardRef, useEffect, useRef} from 'react';
import { gsap } from 'gsap';

const SplitImages = ({ image }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current, { margin: 10 }, {margin: 0, duration: 0.8, ease: 'power1.out'});
    }, [])

    return (
        <div className="image-container" ref={containerRef}>
            <img src={image} alt="image" />
        </div>
      )
}
export default SplitImages