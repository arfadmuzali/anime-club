import { useEffect, useState } from "react";
import { Card, Heading, Text, Image, Button } from "@chakra-ui/react";
import { axiosAnimeInstance } from "../lib/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { SkeletonSearchAnimePage } from "../component/skeletonPage";
import Pagination from "../component/pagination";
import noResult from "../assets/no-results.png";

export default function AnimeList() {
  const locationURL = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(locationURL.search);
  const queryQ = queryParams.get("q");
  const queryPage = queryParams.get("page");

  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(0);

  const nextPage = () => {
    const inc = Number(queryParams.get("page")) + 1;
    navigate(`/search?q=${queryQ}&page=${inc}`);
  };
  const previousPage = () => {
    const dec = Number(queryParams.get("page") - 1);
    navigate(`/search?q=${queryQ}&page=${dec}`);
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
        `/anime?q=${queryQ}&page=${queryPage}`
      );
      setAnimeList(res.data.data);
      setLastPage(res.data.pagination.last_visible_page);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnimeList();
  }, [queryQ, queryPage]);

  return isLoading ? (
    <SkeletonSearchAnimePage />
  ) : animeList.length ? (
    <div className="w-5/6 m-auto">
      <div className="">
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
          page={queryPage}
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
