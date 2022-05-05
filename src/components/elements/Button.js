import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={`${props.className} btn`} onClick={props.action}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    action: PropTypes.func.isRequired,
    className: PropTypes.string,
}

export default Button