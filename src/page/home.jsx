import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosAnimeInstance } from "../lib/axiosInstance";
import {
  Box,
  Button,
  Image,
  Text,
  Card,
  Heading,
  Link as LinkChakra,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listDay } from "../lib/listDay";
import { SkeletonCarousel, SkeletonSchedule } from "../component/skeletonPage";

export default function Home() {
  const date = new Date();
  // loading state
  const [isTopLoading, setIsTopLoading] = useState(false);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [isSeasonLoading, setIsSeasonLoading] = useState(false);

  const [animeRecomend, setAnimeRecomend] = useState([]);
  const [animeSchedules, setAnimeSchedules] = useState([]);
  const [animeSeason, setAnimeSeason] = useState([]);

  const navigate = useNavigate();

  async function fetchAnimeData() {
    setIsTopLoading(true);
    setIsScheduleLoading(true);
    setIsSeasonLoading(true);
    try {
      const top = await axiosAnimeInstance.get("/top/anime?limit=15");
      setAnimeRecomend(top.data.data);
      setIsTopLoading(false);
    } catch (error) {
      console.log(error);
    }
    setTimeout(async () => {
      try {
        const schedules = await axiosAnimeInstance.get(
          `/schedules?filter=${listDay[date.getDay()]}`
        );
        setAnimeSchedules(schedules.data.data);
        setIsScheduleLoading(false);
      } catch (error) {
        console.log(error);
      }
      setTimeout(async () => {
        try {
          const season = await axiosAnimeInstance.get(`/seasons/now?limit=10`);
          setAnimeSeason(season.data.data);
          setIsSeasonLoading(false);
        } catch (error) {
          console.log(error);
        }
      });
    }, 1000);
  }
  useEffect(() => {
    fetchAnimeData();
  }, []);

  const setting = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="mx-10 md:mx-28 mt-3">
      {isTopLoading ? (
        <SkeletonCarousel />
      ) : (
        <div className="mb-10">
          <h3 className="text-orange-400 md:mx-10 m-auto w-fit mb-2">
            Top Anime
          </h3>
          <Slider {...setting} className="bg-gray-600">
            {animeRecomend.map((e) => {
              return (
                <div key={e.mal_id} className=" m-2">
                  <Box>
                    <Image
                      src={e.images.jpg.image_url}
                      className="m-auto h-40 md:h-80"
                    />
                  </Box>

                  <Text
                    isTruncated
                    className="text-center text-sm md:text-lg text-orange-500 w-3/4 m-auto"
                  >
                    {e.title}
                  </Text>
                  <Text isTruncated className="text-center m-2 text-gray-100">
                    {e.synopsis}
                  </Text>
                  <Button
                    className="md:mx-2 m-0"
                    onClick={() => {
                      navigate(`/anime/${e.mal_id}`);
                    }}
                  >
                    Read More
                  </Button>
                </div>
              );
            })}
          </Slider>
        </div>
      )}

      <div className="flex md:flex-row flex-col gap-2 justify-around md:mx-10 mb-4">
        {isScheduleLoading ? (
          <SkeletonSchedule />
        ) : (
          <div>
            <h3 className="text-orange-400  m-auto w-fit mb-2">
              Schedule Today
            </h3>
            <div>
              {animeSchedules.map((e) => {
                return (
                  <Card
                    key={e.mal_id}
                    borderRadius={"0"}
                    backgroundColor={"gray.600"}
                    className="my-px flex"
                  >
                    <div className="flex flex-row mx-5 my-2">
                      <Image
                        src={e.images?.jpg.image_url}
                        height={"3rem"}
                        alt="gambar"
                        className="mr-4"
                      />
                      <div className="flex flex-col gap-2">
                        <div>
                          <h1 className="text-lg hover:underline hover:text-orange-400 transition-all">
                            <Link to={`/anime/${e.mal_id}`}>{e.title}</Link>
                          </h1>

                          <Text className="mt-2">{`${e.type}, scored ${e.score}`}</Text>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
        {isSeasonLoading ? (
          <SkeletonSchedule />
        ) : (
          <div>
            <h3 className="text-orange-400  m-auto w-fit mb-2">Season Now</h3>
            <div>
              {animeSeason.map((e) => {
                return (
                  <Card
                    key={e.mal_id}
                    borderRadius={"0"}
                    backgroundColor={"gray.600"}
                    className="my-px flex"
                  >
                    <div className="flex flex-row mx-5 my-2">
                      <Image
                        src={e.images?.jpg.image_url}
                        height={"3rem"}
                        alt="gambar"
                        className="mr-4"
                      />
                      <div className="flex flex-col gap-2">
                        <div>
                          <h1 className="text-lg hover:underline hover:text-orange-400 transition-all">
                            <Link to={`/anime/${e.mal_id}`}>{e.title}</Link>
                          </h1>

                          <Text className="mt-2">{`${e.type}, scored ${e.score} Every ${e.broadcast?.day}`}</Text>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
