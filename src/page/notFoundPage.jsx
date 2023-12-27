import { Image, Text } from "@chakra-ui/react";
import notFound from "../assets/404.png";

export default function NotFoundPage() {
  return (
    <div className="m-full flex flex-col justify-center items-center">
      <Image src={notFound} className="h-44 mt-20 mb-5" />
      <Text className="text-3xl text-white">PAGE NOT FOUND</Text>
    </div>
  );
}
