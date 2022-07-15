import { FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const SelectBox = ({ name, label, value, error, onChange, placeholder }) => {
  return (
    <>
      <FormLabel htmlFor={name} color={"gray.400"}>
        {label}
      </FormLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        id="country"
        placeholder={placeholder}
        borderRadius={15}
        w={250}
      >
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
    </>
  );
};

export default SelectBox;
