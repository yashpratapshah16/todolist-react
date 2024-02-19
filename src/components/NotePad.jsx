import React, { useEffect, useRef, useState } from "react";
import Note from "./Note";
import axios from "axios";

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

  const getAllItems = async () => {
    const res = await axios.get("https://todolistdb-7tdr.onrender.com/lists");
    console.log(res.data);
    setItems(res.data);
  };
  const addItem = async (item) => {
    await axios.post("https://todolistdb-7tdr.onrender.com/lists", {
      note: item,
    });
  };
  useEffect(() => {
    getAllItems();
  });

  const handleClick = () => {
    const element = document.getElementById("TEXT");
    if (!Bool) {
      setBool(true);
      element.classList.remove("notadd");
      element.classList.add("add");
    } else {
      setBool(false);
      if (curItem !== "") {
        addItem(curItem);
      }
      setCurItem("");
      element.classList.remove("add");
      element.classList.add("notadd");
    }
  };

  const deleteItem =async (id) => {
    await axios.delete("https://todolistdb-7tdr.onrender.com//lists/"+id);
  };

  return (
    <div
      id="pad"
      className=" bg-sec1 text-sec3 mt-8 text-3xl   rounded-xl shadow-xl border border-black py-5"
    >
      <ul>
        <li className=" w-11/12 m-auto">
          <ul className=" mx-2  max-w-full">
            {items.map((item) => {
              return (
                <Note
                  text={item.note}
                  id={item._id}
                  handleDelete={deleteItem}
                />
              );
            })}
          </ul>
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
