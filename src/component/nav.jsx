import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Button,
  Divider,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search?q=${search}&page=1`);
  }

  return (
    <>
      <Box className="bg-gray-700 p-3 flex justify-between items-center md:px-20 md:gap-0 gap-8">
        <Box>
          <Heading
            size={"lg"}
            className="fontRockNRoll text-orange-300 shadow-white"
          >
            <Link to={"/"} className="cursor-default">
              AnimeClub
            </Link>
          </Heading>
        </Box>
        <Box className="md:flex gap-5 hidden ">
          <Link
            to={`/top-anime?page=1`}
            className="text-lg text-white hover:underline hover:text-orange-400 transition-all hover:bg-gray-800 p-2 rounded"
          >
            Top Anime
          </Link>
          <Menu isLazy closeOnSelect={false}>
            <MenuButton as={Button} size={"lg"}>
              Genre
            </MenuButton>
            <MenuList className="flex">
              <MenuGroup className="pr-14 flex" title="Genres">
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=1"}>Action</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=2"}>Adventure</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=4"}>Comedy</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=10"}>Fantasy</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=14"}>Horror</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=8"}>Drama</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=37"}>Supranatural</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=22"}>Romance</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=24"}>Sci-Fi</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=36"}>Slice Of Life</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=30"}>Sports</Link>
                </MenuItem>
              </MenuGroup>
              <MenuGroup className="pr-5" title="Explicit Genres">
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=9"}>Ecchi</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=49"}>Erotica</Link>
                </MenuItem>
                <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                  <Link to={"/search?genres=12"}>Hentai</Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>

        <Box className="flex justify-center">
          <form
            onSubmit={(e) => {
              handleSearch(e);
            }}
          >
            <InputGroup>
              <Input
                fontSize={"0.8rem"}
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

        <Box className="md:hidden">
          <Button className="p-0" colorScheme="inherit" onClick={onOpen}>
            <HamburgerIcon boxSize={6} />
          </Button>
          <Drawer
            placement={"right"}
            onClose={onClose}
            isOpen={isOpen}
            size={"xs"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                boxSize={10}
                className="hover:bg-orange-300 text-lg"
              />
              <DrawerBody marginTop={"3rem"}>
                <Flex flexDirection={"column"} gap={"1rem"}>
                  <Link
                    to={`/top-anime?page=1`}
                    className="text-lg font-medium text-center text-black hover:underline hover:text-orange-700 transition-all bg-gray-300 p-2 rounded"
                    onClick={onClose}
                  >
                    Top Anime
                  </Link>
                  <Menu isLazy closeOnSelect={false}>
                    <MenuButton as={Button} size={"lg"}>
                      Genre
                    </MenuButton>
                    <MenuList className="flex">
                      <MenuGroup className="pr-14 flex" title="Genres">
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=1"}>Action</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=2"}>Adventure</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=4"}>Comedy</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=10"}>Fantasy</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=14"}>Horror</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=8"}>Drama</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=37"}>Supranatural</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=22"}>Romance</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=24"}>Sci-Fi</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=36"}>Slice Of Life</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=30"}>Sports</Link>
                        </MenuItem>
                      </MenuGroup>
                      <MenuGroup className="pr-5" title="Explicit Genres">
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=9"}>Ecchi</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=49"}>Erotica</Link>
                        </MenuItem>
                        <MenuItem as={"button"} closeOnSelect onClick={onClose}>
                          <Link to={"/search?genres=12"}>Hentai</Link>
                        </MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
