import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Note(props) {
  return (
    <li className=" flex justify-around my-5">
      <input type="checkbox" name="" id={"id" + props.id} />
      <label id={"V"+props.id} htmlFor={"id" + props.id} className=" w-4/5 break-words">
        {props.text}
      </label>
      <button onClick={() =>{
        document.getElementById("V"+props.id).classList.add("del");
        document.getElementById("id"+props.id).classList.add("del");
        setTimeout(()=>{
        document.getElementById("id"+props.id).classList.remove("del");
        document.getElementById("V"+props.id).classList.remove("del");
        props.handleDelete(props.id)
        },2100)
        }}>
        <RiDeleteBinLine />
      </button>
    </li>
  );
}
