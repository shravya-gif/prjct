import React from "react";

function Abtask() {
  const element = [0, 1, 2, 3, 4];

  //   for(let i=0;i<=5;i++)
  return (
    <div>
      {element.map((item) => (
        <div key={item}>
          <h1>hii</h1>
          <p>hello</p>
          <small>shravya</small>
        </div>
      ))}
    </div>
  );
}
export default Abtask;

{
  /* //   return <div>{element}</div>; */
}
