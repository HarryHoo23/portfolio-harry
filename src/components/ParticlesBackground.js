import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 1
                },
                background: { color: "transparent" },
                fpsLimit: 60,
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        onhover: {
                            enable: true,
                            mode: "attract",
                            parallax: { enable: false, force: 60, smooth: 10 }
                        },
                        resize: true
                    },
                    modes: {
                        push: { quantity: 4 },
                        attract: { distance: 200, duration: 0.4, factor: 5 }
                    }
                },
                particles: {
                    color: {
                        value: "044e54"
                    },
                    lineLinked: {
                        color: "#14919b",
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                        bounce: false,
                        direction: "none",
                        enable: true,
                        outMode: "out",
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        value: 20,
                    },
                    opacity: {
                        anim: {
                            enable: false,
                            minimumValue: 0.05,
                            speed: 1,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        },
                        value: 1
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.5
                        },
                        value: 1
                    }
                }
        }} />
  )
}

export default ParticlesBackground