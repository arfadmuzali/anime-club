import { useEffect, useState } from "react";
import {
  Card,
  Heading,
  Text,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { axiosAnimeInstance } from "../lib/axiosInstance";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SkeletonSearchAnimePage } from "../component/skeletonPage";
import Pagination from "../component/pagination";
import noResult from "../assets/no-results.png";

export default function AnimeList() {
  const locationURL = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(locationURL.search);
  if (!queryParams.has("page")) {
    queryParams.append("page", "1");
  }
  const queryQ = queryParams.get("q");
  const queryPage = queryParams.get("page");
  const queryGenres = queryParams.get("genres");

  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);

  const nextPage = () => {
    const inc = Number(queryParams.get("page")) + 1;
    navigate(
      `/search?${queryQ ? "q=" + queryQ + "&" : ""}${
        queryGenres ? "genres=" + queryGenres + "&" : ""
      }page=${inc}`
    );
  };
  const previousPage = () => {
    const dec = Number(queryParams.get("page") - 1);
    navigate(
      `/search?${queryQ ? "q=" + queryQ + "&" : ""}${
        queryGenres ? "genres=" + queryGenres + "&" : ""
      }page=${dec}`
    );
  };

  function AnimeNotFound() {
    return (
      <div className="m-full flex flex-col justify-center items-center">
        <Image src={noResult} className="h-44 mt-20 mb-5" />
        <Text className="text-3xl text-white">
          NO RESULT FOR{" "}
          <span className="text-orange-600">{decodeURIComponent(queryQ)}</span>
        </Text>
      </div>
    );
  }

  function MainCard(props) {
    return (
      <Card
        borderRadius={"0"}
        backgroundColor={"gray.600"}
        className="my-px flex"
      >
        <div className="flex flex-row mx-5 my-2">
          <Image
            src={props.images}
            height={"7rem"}
            alt="gambar"
            className="mr-4"
          />
          <div className="flex flex-col gap-2">
            <div>
              <Heading fontSize={"1rem"}>{props.title}</Heading>

              <Text className="mt-2">{props.score}</Text>
              <Text>{props.rank}</Text>
            </div>

            <Button
              size={"sm"}
              className="w-fit"
              onClick={() => navigate(`/anime/${props.id}`)}
            >
              Read More
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  const fetchAnimeList = async () => {
    setIsLoading(true);
    try {
      const res = await axiosAnimeInstance.get(
        `/anime?${queryQ ? "q=" + queryQ + "&" : ""}${
          queryGenres ? "genres=" + queryGenres + "&" : ""
        }${"page=" + queryPage}`
      );
      setAnimeList(res.data.data);
      setLastPage(res.data.pagination.last_visible_page);
      setCurrentPage(res.data.pagination.current_page);
      setIsLoading(false);
      // console.log(lastPage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnimeList();
  }, [queryQ, queryPage, queryGenres]);

  return isLoading ? (
    <SkeletonSearchAnimePage />
  ) : animeList.length ? (
    <div className="w-5/6 m-auto">
      <div>
        <div className="flex md:justify-end justify-center m-2">
          <Menu>
            <MenuButton
              color={"black"}
              className="p-1 text-lg font-medium bg-orange-500 px-5 rounded text-center"
            >
              <span className="text-green-800 text-2xl font-medium">+</span>{" "}
              Genre
            </MenuButton>
            <MenuList className="flex justify-center">
              <MenuOptionGroup
                type="checkbox"
                defaultValue={queryGenres ? queryGenres.split(",") : []}
                onChange={(listGenre) => {
                  setGenres((prev) => {
                    return listGenre;
                  });
                }}
              >
                <MenuItemOption closeOnSelect={false} value="1">
                  Action
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="2">
                  Adventure
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="4">
                  Comedy
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="10">
                  Fantasy
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="14">
                  Horror
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="8">
                  Drama
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="37">
                  Supranatural
                </MenuItemOption>

                <MenuItemOption closeOnSelect={false} value="22">
                  Romance
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="24">
                  Sci-Fi
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="36">
                  Slice Of Life
                </MenuItemOption>
                <MenuItemOption closeOnSelect={false} value="30">
                  Sports
                </MenuItemOption>
                <MenuItem
                  closeOnSelect={false}
                  value="30"
                  className="hover:bg-inherit"
                ></MenuItem>
                <Link
                  className="text-lg font-semibold text-center p-2 hover:bg-green-300 rounded"
                  to={`/search?${queryQ ? "q=" + queryQ + "&" : ""}${
                    genres ? "genres=" + genres + "&" : ""
                  }page=1`}
                >
                  + Add Genres
                </Link>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </div>
        <Pagination
          page={queryPage}
          totalPage={lastPage}
          previous={previousPage}
          next={nextPage}
        />
        {animeList.map((e) => {
          return (
            <MainCard
              key={e.mal_id}
              title={e.title}
              images={e.images.jpg.image_url}
              rank={`${e.episodes} EPS`}
              score={`Score : ${e.score}`}
              id={e.mal_id}
            />
          );
        })}
        <Pagination
          page={currentPage}
          totalPage={lastPage}
          previous={previousPage}
          next={nextPage}
        />
      </div>
    </div>
  ) : (
    <AnimeNotFound />
  );
}
