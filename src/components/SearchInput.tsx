import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div>
      <InputGroup
        maxWidth="1000px"
        width={{ base: "90%", md: "500px", lg: "800px" }}
        startElement={<BsSearch />}
      >
        <Input
          borderRadius={20}
          placeholder="Search Games ... "
          variant="subtle"
     
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
