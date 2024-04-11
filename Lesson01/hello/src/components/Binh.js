import React from "react";

export default function Tvc(props) {
  return (
    <div>
      <h2>Trần Trọng Bình - 2210900004</h2>
      <hr />
      <p>Bài thực hành 1</p>
      <p>Email: {props.email}</p>
      <p>Phone:{props.phone}</p>
    </div>
  );
}
