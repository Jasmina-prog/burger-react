import "./Button.scss"

function Button(props) {
    return(
        <>
        <button onClick={props.btnFn}>{props.name}</button>
        {/* <button onClick={props.removeFn}>{props.name}</button> */}
        </>
    )
}

export default Button