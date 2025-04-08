import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import toast from "react-hot-toast";
import "./App.css";
import {fetchImage} from "./services/api"
import SearchBar from "./components/SearchBar/SearchBar"
import ImageGallery from "./components/ImageGallery/ImageGallery";


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("office");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(12);
  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchImage(query, page, perPage, abortController.signal);
        setImages(prev => [...prev, ...data]);
        console.log(data);
      } catch (error) {
        console.log(error);
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          toast.error('Try again later...');
        }
      } finally {
        setLoading(false);
      }
    }
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, page, perPage]);

  return (
    <>
    <SearchBar />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader loading={loading} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    </>
  );
}

export default App;
