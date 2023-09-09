import { Box, Button, Checkbox, Grid, GridItem, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const Addresses = () => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="full">
        <GridItem colSpan={1}>
          <Box background={"white"} rounded={"xl"} border={"4px solid"} borderColor={"gray.200"} w="full" p="6">
            <VStack spacing={4} alignItems={"start"} w="full">
              <HStack justifyContent={"space-between"} alignItems={"start"} w="full">
                <Heading as="h2" size="md">
                  Delivery Address
                </Heading>
                <Button variant={"link"} colorScheme="brand" size="md">
                  Edit
                </Button>
              </HStack>
              <VStack spacing={"1"} alignItems={"start"}>
                <Text fontSize={"md"} fontWeight={"medium"} w="45%">
                  Catlos Sainz 10 Downing Street, 4th floot, Chennaim 600005
                </Text>
                <Text fontSize={"md"} fontWeight={"medium"}>
                  +91 9876543210
                </Text>
              </VStack>
              <Checkbox colorScheme="brand" size="lg" w="full">
                <Text fontSize={"md"} color="gray.600">
                  Bill Address same as Delivery Address
                </Text>
              </Checkbox>
            </VStack>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box background={"white"} rounded={"xl"} border={"4px solid"} borderColor={"gray.200"} w="full" p="6">
            <VStack spacing={4} alignItems={"start"} w="full">
              <HStack justifyContent={"space-between"} alignItems={"start"} w="full">
                <Heading as="h2" size="md">
                  Billing Address
                </Heading>
                <Button variant={"link"} colorScheme="brand" size="md">
                  Edit
                </Button>
              </HStack>
              <VStack spacing={"1"} alignItems={"start"}>
                <Text fontSize={"md"} fontWeight={"medium"}>
                  Zen Interiors
                </Text>
                <Text fontSize={"md"} fontWeight={"medium"} background={"brand.800"} px="2" py="1" color={"white"} rounded={"lg"}>
                  GST NO: 18AABCZ1234A1Z5
                </Text>
                <Text fontSize={"md"} fontWeight={"medium"} w="60%">
                  Catlos Sainz 10 Downing Street, 4th floot, Chennaim 600005
                </Text>
                <Text fontSize={"md"} fontWeight={"medium"}>
                  +91 9876543210
                </Text>
              </VStack>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Addresses;
