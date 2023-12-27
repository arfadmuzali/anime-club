import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search?q=${search}&page=1`);
  }

  return (
    <>
      <Box className="bg-gray-700 p-3 flex justify-between items-center md:px-20">
        <Box>
          <Image
            src={logo}
            className="w-8 h-8 ml-5 md:w-10 md:h-10"
            onClick={() => navigate(`/`)}
          ></Image>
        </Box>

        <Box className="flex content-center justify-center">
          <form
            onSubmit={(e) => {
              handleSearch(e);
            }}
          >
            <InputGroup>
              <Input
                focusBorderColor="orange.500"
                color={"white"}
                placeholder="Search Anime..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <InputRightElement>
                <Button
                  isDisabled={search.length == 0}
                  backgroundColor={"inherit"}
                  borderLeftRadius={"0"}
                  type="submit"
                >
                  <SearchIcon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
