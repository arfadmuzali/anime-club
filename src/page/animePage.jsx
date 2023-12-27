import { useParams } from "react-router-dom";
import { axiosAnimeInstance } from "../lib/axiosInstance";
import { useEffect, useState } from "react";
import { Divider, Heading, Image, Link, Text } from "@chakra-ui/react";
import { SkeletonAnimePage } from "../component/skeletonPage";

export default function AnimePage() {
  const [animeDetails, setAnimeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  async function fetchAnime() {
    setIsLoading(true);
    try {
      const anime = await axiosAnimeInstance.get(`/anime/${params.id}/full`);
      setAnimeDetails(anime.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return isLoading ? (
    <SkeletonAnimePage />
  ) : (
    <div className="flex md:flex-row flex-col mx-10 my-5">
      <div className="flex flex-col p-2 md:w-1/5">
        {animeDetails.images && animeDetails.images.jpg && (
          <Image src={animeDetails.images.jpg.image_url} />
        )}
        <div className="flex flex-col justify-center  mt-5 gap-1">
          {animeDetails.streaming &&
            animeDetails.streaming.map((e, index) => (
              <Link
                key={index}
                href={e.url}
                color={"orange.400"}
                className="w-full bg-gray-800 p-2 pl-3 rounded"
              >
                {e.name}
              </Link>
            ))}
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col m-1 text-orange-300 md:w-4/5">
        <header>
          <Heading size="xl" className="md:m-0 m-auto w-fit">
            {animeDetails.title}
          </Heading>
          <Heading size="lg" className="text-orange-500 md:m-0 m-auto w-fit">
            {animeDetails.title_english}
          </Heading>
          <Divider />
        </header>

        <div className="flex flex-row md:gap-4 md:m-4  my-4 m-auto md:ml-10 mb-3">
          <div className="flex flex-col justify-center items-center border md:p-2 p-1">
            <Text className="text-xs p-1 bg-orange-400 rounded text-black m-3 mb-1 mt-1">
              score
            </Text>
            <Text className="md:text-3xl text-gray-100">
              {animeDetails.score}
            </Text>
          </div>
          <div className="flex flex-col justify-center items-center border md:p-2 p-1">
            <Text className="text-xs p-1 bg-orange-400 rounded text-black m-3 mb-1 mt-1">
              ranked
            </Text>
            <Text className="md:text-3xl text-gray-100">
              {"#" + animeDetails.rank}
            </Text>
          </div>
          <div className="flex flex-col justify-center items-center border md:p-2 p-1">
            <Text className="text-xs p-1 bg-orange-400 rounded text-black m-3 mb-1 mt-1">
              popularity
            </Text>
            <Text className="md:text-3xl text-gray-100">
              {animeDetails.popularity}
            </Text>
          </div>
          <div className="md:flex hidden flex-col justify-center items-center border md:p-2 p-1 ">
            <Text className="text-xs p-1 bg-orange-400 rounded text-black m-3 mb-1 mt-1">
              members
            </Text>
            <Text className="md:text-3xl text-gray-100">
              {animeDetails.members}
            </Text>
          </div>
        </div>

        <div className="">
          <Heading size={"lg"} className="text-orange-300 border-b p-1 w-fit">
            Synopsis
          </Heading>
          <Text className="text-white w-full p-3">{animeDetails.synopsis}</Text>
          <Divider />
          <Heading size={"lg"} className="text-orange-300 border-b p-1 w-fit">
            Information
          </Heading>
          <Text color={"white"} className="pl-3 pt-3">
            {"Type: " + animeDetails.type}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Episodes: " + animeDetails.episodes}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Status: " + animeDetails.status}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Aired: " + animeDetails?.aired?.string}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Studios: " + animeDetails?.studios?.map((e) => e.name)}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Source: " + animeDetails?.source}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Genre: " + animeDetails?.genres?.map((e) => e.name)}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Theme: " + animeDetails?.themes?.map((e) => e.name)}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Demographic: " + animeDetails?.demographics?.map((e) => e.name)}
          </Text>
          <Text color={"white"} className="pl-3">
            {"Duration: " + animeDetails.duration}
          </Text>
          <Text color={"white"} className="pl-3">
            {" "}
            {"Rating: " + animeDetails.rating}
          </Text>
        </div>
      </div>
    </div>
  );
}
