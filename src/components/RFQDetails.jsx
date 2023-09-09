import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { BiFileBlank } from "react-icons/bi";

const RFQDetails = () => {
  return (
    <>
      <Box
        background={"white"}
        rounded={"xl"}
        border={"4px solid"}
        borderColor={"gray.200"}
        w="full"
        p="6"
      >
        <VStack spacing={"4"} alignItems={"start"}>
          <Heading as="h2" size="md">
            RFQ Details
          </Heading>
          <HStack
            justifyContent={"space-between"}
            alignItems={"start"}
            w="full"
          >
            <HStack spacing={"10"}>
              <Text fontSize={"md"}>RFQ_123456789</Text>
              <Text fontSize={"md"}>23 Jun 2022, 09:13am</Text>
              <Button variant={"link"} colorScheme="brand" size="md">
                <HStack spacing={"1"}>
                  <BiFileBlank />
                  <Text fontWeight={"light"}>View</Text>
                </HStack>
              </Button>
              <Text fontSize={"md"}>Jonathan wick</Text>
              <Text fontSize={"md"}>9876543210</Text>
            </HStack>
            <Button size="xs">Requested</Button>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default RFQDetails;
