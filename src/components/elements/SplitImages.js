import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSpring, animated } from 'react-spring';

const SplitImages = ({ image, isFlipped, action }) => {

    const containerRef = useRef(null);

    const { transform, opacity } = useSpring({
        opacity: isFlipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${isFlipped ? 0 : 180}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    useEffect(() => {
        gsap.fromTo(containerRef.current, { margin: 10 }, {margin: 0, duration: 0.8, ease: 'power1.out'});
    }, [])

    return (
        <div className="image-container" ref={containerRef} onClick={action}>
            <animated.div style={{ opacity: 1, transform, backgroundImage: `url(${image[1]})`, backgroundSize: "cover" }} onClick={action} />
            <animated.div style={{ opacity, transform, backgroundImage: `url(${image[0]})`, backgroundSize: "cover" }} />
        </div>
      )
}
export default SplitImages