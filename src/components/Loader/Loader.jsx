import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading }) => {
  return (
    <div>
      <ClipLoader
        color="red"
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Loader;
