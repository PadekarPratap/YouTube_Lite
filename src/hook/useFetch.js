import axios from "axios";
import { BASE_URL, options } from "../utils/api";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL + url, options)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  const refetch = () =>{
    setLoading(true);
    axios
      .get(BASE_URL + url, options)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return { data, loading, error, refetch };
};

export default useFetch;
