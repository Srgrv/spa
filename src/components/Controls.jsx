import React from "react";
import { useState } from "react";
import { useEffect } from "react";

//components
import Search from "./Search";
import CustomSelect from "./CustomSelect";

const options = [
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "America",
    label: "America",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Oceania",
    label: "Oceania",
  },
];

const Controls = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect options={options} />
    </div>
  );
};

export default Controls;
