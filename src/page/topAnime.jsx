import { useEffect, useState } from "react";
import Pagination from "../component/pagination";
import { axiosAnimeInstance } from "../lib/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Text, Heading, Image, Card } from "@chakra-ui/react";

export default function TopAnimePage() {
  const [topAnime, setTopAnime] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const locationURL = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(locationURL.search);
  const queryPage = queryParams.get("page");

  const nextPage = () => {
    const inc = Number(queryParams.get("page")) + 1;
    navigate(`/top-anime?page=${inc}`);
  };
  const previousPage = () => {
    const dec = Number(queryParams.get("page") - 1);
    navigate(`/top-anime?page=${dec}`);
  };
  const fetch = async () => {
    const anime = await axiosAnimeInstance.get(`/top/anime?page=${queryPage}`);
    setTopAnime(anime.data.data);
    setLastPage(anime.data.pagination.last_visible_page);
  };
  useEffect(() => {
    fetch();
  }, [queryPage]);
  return (
    <div className="w-5/6 m-auto">
      <div className="">
        <Pagination
          page={queryPage}
          totalPage={lastPage}
          previous={previousPage}
          next={nextPage}
        />
        {topAnime.map((e) => {
          return (
            <Card
              key={e.mal_id}
              borderRadius={"0"}
              backgroundColor={"gray.600"}
              className="my-px flex"
            >
              <div className="flex flex-row mx-5 my-2">
                <Image
                  src={e.images.jpg.image_url}
                  height={"7rem"}
                  alt="gambar"
                  className="mr-4"
                />
                <div className="flex flex-col gap-2">
                  <div>
                    <Heading fontSize={"1rem"}>{e.title}</Heading>

                    <Text className="mt-2">{`Scored ${e.score}`}</Text>
                    <Text>{`Ranked #${e.rank}`}</Text>
                  </div>

                  <Button
                    size={"sm"}
                    className="w-fit"
                    onClick={() => navigate(`/anime/${e.id}`)}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
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
  );
}
