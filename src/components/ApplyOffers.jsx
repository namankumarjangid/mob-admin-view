import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { BsChevronRight, BsTag } from "react-icons/bs";

const ApplyOffers = () => {
  return (
    <>
      <HStack background={"white"} rounded={"xl"} justifyContent={"space-between"} border={"4px solid"} borderColor={"gray.200"} w="full" p="6">
        <HStack spacing={"2"} alignItems={"center"} w="full">
          <Text p="2" rounded={"full"} background={"gray.100"}>
            <BsTag size={24} />
          </Text>
          <Text>Apply coupons and offers</Text>
        </HStack>
        <Button variant={"link"}>
          <BsChevronRight size={22} />
        </Button>
      </HStack>
    </>
  );
};

export default ApplyOffers;
