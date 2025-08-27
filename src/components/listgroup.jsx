import { Fragment } from "react";

function Listgroup() {
const items=[
'New York',
'San Fransisco',
'Tokyo',
'London',
'Paris'
];

  return (
    <>
      <h1>List</h1>
      <ul class="list-group">
{items.map(item =>(<li>{item}</li>))}        
      </ul>
    </>
  );
}
export default Listgroup;
