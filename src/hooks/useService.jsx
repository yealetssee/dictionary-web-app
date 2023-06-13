import axios from "axios";
import { useState } from "react";

const useService = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState({});

  const fetchWord = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`,
      );
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchClickHandler = () => {
    if (searchInput !== "") {
      fetchWord();
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return {
    searchInput,
    searchResult,
    searchClickHandler,
    handleInputChange,
  };
};

export default useService;