import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';

export const meta: MetaFunction = () => {
  return [];
};

export default function Index() {
  const [data, setData] = useState(null);
  const url = '/api';


  useEffect(() => {
    fetch(url)
      .then(response => response.text())
      .then(text => setData(text))
      .catch(console.log);
  }, []);

  return (
    <p>
      Response from backend: {data}
    </p>
  );
}
