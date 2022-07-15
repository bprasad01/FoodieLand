import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const InputData = ({ name, label, value, error, onChange, placeholder }) => {
  return (
    <>
      <FormLabel htmlFor={name} color={"gray.400"}>
        {label}
      </FormLabel>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        id="first-name"
        placeholder={placeholder}
        borderRadius={15}
        w={250}
      />
      {/* <input
        type="text"
        className="form-control"
        name={name}
        id="username"
        value={value}
        onChange={onChange}
        aria-describedby="emailHelp"
      />
      {error && <div className="alert alert-danger">{error}</div>} */}
    </>
  );
};

export default InputData;
