import css from "./ErrorMessage.module.css"
const ErrorMessage =()=>{
    return (
        <p className={css.message}>Whoops, something went wrong! Please try reloading this page!</p>
        
    )
}
export default ErrorMessage;
