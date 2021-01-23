import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addpeople,
  decrement,
  deletepeople,
  increment,
  updatepeople,
} from "./actions/Actions";

function App() {
  const [name, setname] = useState("");
  const [modal, setmodal] = useState(false);
  const [edit, setedit] = useState("");
  const [idholder, setidholder] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector((e) => e.CounterReducer);
  const peoples = useSelector((e) => e.PeopleReducer);

  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostpage] = useState(5);

  //////*~*~*~*~**~*~*~*~redux**~*~*~*~*~*~*~**~*~**~////////////
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addpeople({ name, id: Math.random() }));
    console.log(peoples.peoples);
  };

  const dele = (id) => {
    dispatch(deletepeople(id));
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit = (e) => {
    e.preventDefault();
    dispatch(updatepeople({ idholder, edit }));
  };

  //////*~*~*~*~**~*~*~*~PAGINATION**~*~*~*~*~*~*~**~*~**~////////////
  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = peoples.peoples.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(peoples.peoples.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div className="App">
      {counter}{" "}
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        add
      </button>{" "}
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        MINUS
      </button>
      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </form>
      {modal && (
        <form action="submit" onSubmit={handleedit}>
          <input
            type="text"
            value={edit}
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />
        </form>
      )}
      {posts.map((e) => (
        <div key={e.id}>
          {e.name}{" "}
          <button
            onClick={() => {
              dele(e.id);
            }}>
            DELETE
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
      page-{" "}
      {pagenum.map((e) => (
        <div
          onClick={() => {
            setcurrentpage(e);
          }}
          key={e}>
          {e}
        </div>
      ))}
    </div>
  );
}

export default App;
