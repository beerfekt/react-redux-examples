import React from "react";

const List = ({ list }) => {
  if (list) {
    const listItems = list.map(item => <li key={item}>{item}</li>);
    return <ul>{listItems}</ul>;
  }
  return <p> no listitem</p>;
};

export default List;
