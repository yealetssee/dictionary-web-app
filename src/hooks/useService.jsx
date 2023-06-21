import axios from "axios";
import { useEffect, useState } from "react";

const useService = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(false);

  const fetchWord = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`,
      );
      setError(false);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  console.log(error);

  const searchClickHandler = () => {
    if (searchInput.trim() !== "") {
      fetchWord();
    } else {
      setIsEmpty(true);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    setIsEmpty(false);
  };

  return {
    searchInput,
    searchResult,
    searchClickHandler,
    handleInputChange,
    isEmpty,
    error,
  };
};

export default useService;
