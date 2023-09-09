import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement pl="2" pt="2" pointerEvents={"none"}>
          <LuSearch size={20} />
        </InputLeftElement>
        <Input size="lg" w="96" background={"white"} border={"1px solid"} borderColor={"gray.300"} placeholder="Type to search..." />
      </InputGroup>
    </>
  );
};

export default Search;
