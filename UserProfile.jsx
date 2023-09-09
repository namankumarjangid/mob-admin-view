import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

const userDetails = [
  {
    name: "Wallet",
    value: "₹1500",
  },
  {
    name: "Mobstar Points",
    value: "328 Points (₹100)",
  },
  {
    name: "Phone number",
    value: "9876543210",
  },
  {
    name: "Email Id",
    value: "jonathanwich@gmail.com",
  },
  {
    name: "GST Details",
    value: "-",
  },
];
const UserProfile = () => {
  return (
    <>
      <Box background={"white"} rounded={"xl"} w="full">
        <VStack spacing={2} alignItems={"start"}>
          <Text bg="cyan.400" rounded="md" px="2" py="1" color="black" fontSize={"sm"}>
            Diamond Member
          </Text>
          <HStack spacing={10} p="5" alignItems={"start"}>
            <Image
              boxSize="100px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80"
              alt="Dan Abramov"
              height={24}
              width={24}
              rounded={"xl"}
            />
            <VStack spacing={5} h="full" justifyContent={"space-between"} alignItems={"start"}>
              <Text fontSize={"md"} fontWeight={"bold"}>
                Jonathan Wick
              </Text>
              <HStack spacing={16}>
                {userDetails.map((user, index) => (
                  <VStack spacing={1} alignItems={"start"}>
                    <Text color="gray.500" fontSize={"sm"}>
                      {user.name}
                    </Text>
                    <Text fontWeight={"medium"} fontSize={"md"}>
                      {user.value}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default UserProfile;
