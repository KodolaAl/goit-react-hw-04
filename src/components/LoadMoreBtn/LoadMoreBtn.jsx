import css from "./LoadMoreBtn.module.css"
const LoadMoreBtn =({handleLoadMore})=>{
    return (
       <button className={css.button} type="button" onClick={handleLoadMore}>Search</button> 
    )
}

export default LoadMoreBtn;