import { forwardRef, useImperativeHandle, useRef } from "react"
import { gsap } from "gsap";
import styled from "styled-components";

const CirclePointer = styled.div`
    position: fixed;
    transform: translate(-50%, -50%);
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: --2;
    border-radius: 50%;
    background-color: var(--primary-300);

    &.sm {
        width: 30px;
        height: 30px;
    }

    &.md {
        width: 50px;
        height: 50px;
    }

    &.lg {
        width: 70px;
        height: 70px;
    }
`

const Circle = forwardRef(({size, delay}, ref) => {
    const el = useRef();

    useImperativeHandle(ref, () => {
        return {
            moveTo(x, y) {
                gsap.to(el.current, { x, y, delay });
            }
        }
    }, [delay]);

    return (
        <CirclePointer className={`${size}`} ref={el}></CirclePointer>
    )
});
export default Circle