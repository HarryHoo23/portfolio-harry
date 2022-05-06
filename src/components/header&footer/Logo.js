import logoDark from '../../assets/icons/logo/logo-dark.png';
import logoLight from '../../assets/icons/logo/logo-light.png';
import { useGlobalContext } from '../../context/app_context';

const Logo = () => {
    const { theme } = useGlobalContext();

    if (theme === "dark-theme") {
        return <img className="logo" src={logoDark} alt="logo-dark" />
    } 
    return (
        <img className="logo" src={logoLight} alt="logo-light" />
    )
}

export default Logo