
const Button = (props) => {
    return (
        <button className={`${props.className} btn`} onClick={props.action}>
            {props.children}
        </button>
    )
}

export default Button