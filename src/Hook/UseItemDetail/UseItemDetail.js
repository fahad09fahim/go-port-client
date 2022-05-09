import { useEffect, useState } from "react";

const UseItemDetail = (itemId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://herokugoport.herokuapp.com/items/${itemId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item];
};

export default UseItemDetail;
