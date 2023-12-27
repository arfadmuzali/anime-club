import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";

export default function Pagination(props) {
  return (
    <Box width={"100%"} className="flex justify-center gap-10 my-4">
      <Button
        isDisabled={props.page == 1}
        size={"sm"}
        backgroundColor={"orange.500"}
        onClick={props.previous}
      >
        <ArrowLeftIcon />
      </Button>
      <Text className="text-xl text-white">{props.page}</Text>
      <Button
        isDisabled={props.totalPage == props.page}
        size={"sm"}
        backgroundColor={"orange.500"}
        onClick={props.next}
      >
        <ArrowRightIcon />
      </Button>
    </Box>
  );
}
