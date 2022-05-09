import { useEffect, useState } from "react";

const ControlItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://herokugoport.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, []);
  return [items, setItems];
};

export default ControlItem;
