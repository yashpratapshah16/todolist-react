import React, { useRef, useState } from "react";
import Note from "./Note";

const useFocus = () => {
  const ref = useRef(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };
  return [ref, setFocus];
};

export default function NotePad() {
  const [Bool, setBool] = useState(false);
  const [curItem, setCurItem] = useState("");
  const [items, setItems] = useState([]);
  const [inputFocus, setInputFocus] = useFocus();

  const handleClick = () => {
    const element = document.getElementById("TEXT");
    if (!Bool) {
      setBool(true);
      element.classList.remove("notadd");
      element.classList.add("add");
    } else {
      setBool(false);
      setItems((prevalue) => {
        if (curItem === "") {
          return [...prevalue];
        }
        return [...prevalue, curItem];
      });
      setCurItem("");
      element.classList.remove("add");
      element.classList.add("notadd");
    }
  };

  const deleteItem=(id)=>{
    setItems((preValue)=>{
      return preValue.filter((b,a)=>a!==id);
    })
  }


  return (
    <div id="pad" className=" bg-sec1 text-sec3 mt-8 text-3xl   rounded-xl shadow-xl border border-black py-5">
      <ul>
        <li className=" w-11/12 m-auto">
          <ul className=" mx-2  max-w-full">{items.map((item,index) =>{
            return <Note text={item} id={index} handleDelete={deleteItem}/>
            })}</ul>
        </li>
        <li className=" relative ">
          <div className=" absolute flex  items-center justify-center w-full">
            <input
              id="TEXT"
              ref={inputFocus}
              className=" bg-sec2 rounded-xl shadow-xl border-none outline-none w-0 text-center"
              type="text"
              value={curItem}
              placeholder="Enter The Task"
              // hidden={!Bool}
              onChange={(e) => {
                Bool && setCurItem(e.target.value);
              }}
              onKeyDown={(e) => e.key === "Enter" && Bool && handleClick()}
            />
            <button
              onClick={() => {
                handleClick();
                setInputFocus();
              }}
              className=" py-1 bg-sec2 text-sec3 border-2 border-black rounded-xl shadow-xl px-4"
            >
              {!Bool ? "Add Task" : "+"}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
