import { useGlobalContext } from "../../context/app_context";
import PropTypes from 'prop-types';

const SectionCurve = (props) => {

    const { theme } = useGlobalContext();

    const mapColorToHex = {
        'light-theme': '#d9e2ec',
        'dark-theme': '#243b53'
    }

    const TopDesktop = <svg viewBox="0 0 1920 150" className="d-block"><path fill={mapColorToHex[theme]} d="M0,100 C350.359375,100 483.171875,10 724.5,20 C863.597968,25.7638524 1189.12952,85 1414.09375,85 C1639.05798,85 1820.83594,55.5 1920,43.7890625 C1920,96.2578125 1920,138.328125 1920,170 L0,170 C0,154.552083 0,131.21875 0,100 Z" /></svg>;

    const BottomDesktop = <svg viewBox="0 0 1920 150" className="d-block"><path fill={mapColorToHex[theme]} d="M6.82121026e-13,52.3151674 C350.359375,52.3151674 483.171875,-8.89577014 724.5,1.10422986 C863.597968,6.86808222 1180.01515,58.6356261 1414.09375,63.6575837 C1648.17235,68.6795412 1823.625,26.794026 1920,26.7526674 C1920,43.0252079 1920,76.5460412 1920,127.315167 L6.82121026e-13,127.315167 C6.82121026e-13,108.533917 6.82121026e-13,83.5339174 6.82121026e-13,52.3151674 Z" transform="translate(960.000000, 63.657584) rotate(-180.000000) translate(-960.000000, -63.657584) " /></svg>;
    
    return (
        <div className={props.className}>
            {!props.hideTopCurve ? TopDesktop : ''}
                <div className={props.innerClassName}>
                    {props.children}
                </div>
            {!props.hideBottomCurve ? BottomDesktop : ''}
        </div>
    )
}

SectionCurve.propTypes = {
    hideTopCurve: PropTypes.bool,
    hideBottomCurve: PropTypes.bool,
    className: PropTypes.string,
    innerClassName: PropTypes.string
}

SectionCurve.defaultProps = {
    hideTopCurve: false,
    hideBottomCurve: false,
}

export default SectionCurve