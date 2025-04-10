import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";
import { fetchImage } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      if (query === "") return;
      try {
        setLoading(true);
        const data = await fetchImage(query, page, abortController.signal);
        setImages((prev) => [...prev, ...data.results]);
        settotalPages(data.total_pages);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage(page + 1);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleChangeQuery} />
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          {images.length > 0 && (
            <ImageGallery images={images} onImageClick={handleImageClick} />
          )}
          {loading && <Loader loading={loading} />}
          {page < totalPages && !loading && (
            <LoadMoreBtn handleLoadMore={handleLoadMore} />
          )}
          <ImageModal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            image={selectedImage}
          />
        </>
      )}
    </>
  );
}

export default App;
