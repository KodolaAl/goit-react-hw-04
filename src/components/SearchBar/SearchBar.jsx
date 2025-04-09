import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
 const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const topic = form.elements.query.value.trim();
console.log(topic);
if (topic === "") {
  toast("Please enter a search query.");
    return;}
onSubmit(topic); 
// form.reset();
 }
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
      <Toaster  position="top-right" />
    </header>
   
  );
};
export default SearchBar;
