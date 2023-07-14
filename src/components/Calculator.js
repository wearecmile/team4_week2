import React, { useState } from "react";
import { run } from "./CommandPattern";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [prev, setPrev] = useState("");
  const buttons = [
    "%",
    "CE",
    "C",
    "⬅",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    "0",
    ".",
    "=",
  ];

  const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const calArray = ["+", "-", "/", "%", "*"];

  const handleCal = (val) => {
    switch (prev[prev.length - 1]) {
      case "+":
        return run("add", Number(val));
      case "-":
        return run("sub", Number(val));
      case "*":
        return run("mul", Number(val));
      case "/":
        return run("div", Number(val));
      case "%":
        return run("mod", Number(val));
    }
  };

  const handleClick = (item) => {
    if (typeof value == "number") {
      if (numberArray.includes(item)) {
        setValue(item);
      } else if (calArray.includes(item)) {
        run("set", value);
        setPrev(value + item);
        setValue("0");
      } else {
        switch (item) {
          case "C":
            setValue("0");
            break;
          case "CE":
            setValue("0");
            setPrev("");
            run("set", 0);
            break;
          case "⬅":
            setValue("0");
            setPrev("");
            run("set", 0);
            break;
          default:
            setValue("0");
            setPrev("");
            run("set", 0);
        }
      }
    } else if (numberArray.includes(item)) {
      if (value === "0") {
        setValue(item);
      } else {
        value?.length < 13 && setValue(value + item);
      }
    } else if (value !== "0" || prev !== "") {
      switch (item) {
        case "C":
          setValue("0");
          break;
        case "CE":
          setValue("0");
          setPrev("");
          run("set", 0);
          break;
        case "⬅":
          setValue(value.slice(0, value?.length - 1));
          value.length === 1 && setValue("0");
          break;

        case "+":
          if (prev !== "") {
            const result = handleCal(value);
            setPrev(String(result + item));
          } else {
            run("add", Number(value));
            setPrev(value + item);
          }
          setValue("0");
          break;
        case "-":
          if (prev !== "") {
            const result = handleCal(value);
            setPrev(String(result + item));
          } else {
            run("add", Number(value));
            setPrev(value + item);
          }
          setValue("0");
          break;
        case "*":
          if (prev !== "") {
            const result = handleCal(value);
            setPrev(String(result + item));
          } else {
            run("add", Number(value));
            setPrev(value + item);
          }
          setValue("0");
          break;
        case "/":
          if (prev !== "") {
            const result = handleCal(value);
            setPrev(String(result + item));
          } else {
            run("add", Number(value));
            setPrev(value + item);
          }
          setValue("0");
          break;
        case "%":
          if (prev !== "") {
            const result = handleCal(value);
            setPrev(String(result + item));
          } else {
            run("add", Number(value));
            setPrev(value + item);
          }
          setValue("0");
          break;
        case "=":
          if (prev !== "") {
            const result = handleCal(value);
            setValue(result);
            setPrev("");
          } else {
          }
          break;
        default:
          setPrev("");
          setValue(value + item);
      }
    }
  };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        width: "400px",
        background: "#FAFAFA",
        padding: "10px",
      }}
    >
      <div
        style={{
          height: "70px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          fontSize: "18px",
          color: "gray",
          fontWeight: 400,
        }}
      >
        {prev}
      </div>
      <div
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "end",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        <div>{value}</div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
        }}
      >
        {buttons?.map((item) => (
          <div
            style={{
              background: item === "=" ? "#187bcd" : "white",
              height: "50px",
              border: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
