import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";
import { BsBell, BsChevronDown } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <header>
        <HStack bg="brand.700" px={6} py={4} justifyContent={"space-between"} color="white">
          <Text color={"white"}>
            <GrMenu color="white" />
          </Text>
          <Heading as="h2" size="md" color={"white"}>
            MOB Admin View
          </Heading>
          <HStack spacing={2}>
            <Button variant={"unstyled"}>
              <BsBell size={22} />
            </Button>
            <Button variant={"unstyled"}>
              <AiOutlineQuestionCircle size={24} />
            </Button>
            <Button variant={"link"}>
              <HStack spacing={2}>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=50&q=80"
                  alt="Dan Abramov"
                  height={8}
                  width={8}
                  rounded={"full"}
                />
                <HStack color={"white"}>
                  <Text>Johnathan</Text>
                  <BsChevronDown />
                </HStack>
              </HStack>
            </Button>
          </HStack>
        </HStack>
      </header>
    </>
  );
};

export default Navbar;
