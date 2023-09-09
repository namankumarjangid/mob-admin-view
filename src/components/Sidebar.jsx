import { FiHome } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import { MdContentPaste } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { LiaChartBarSolid } from "react-icons/lia";
import { AiOutlineSetting } from "react-icons/ai";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

const Pages = [
  {
    title: "Dashboard",
    icon: <FiHome />,
    active: true,
  },
  {
    title: "Orders",
    icon: <BsBoxSeam />,
    notificationCount: 13,
  },
  {
    title: "Return/Exchange",
    icon: <TbArrowsExchange />,
    notificationCount: 4,
  },
  {
    title: "Request/Enquiries",
    icon: <MdContentPaste />,
  },
  {
    title: "Customers",
    icon: <FiUsers />,
  },
  {
    title: "Sellers",
    icon: <BsShop />,
  },
  {
    title: "Reports",
    icon: <LiaChartBarSolid />,
  },
  {
    title: "Advance & Settings",
    icon: <AiOutlineSetting />,
  },
];

const Sidebar = () => {
  return (
    <>
      <VStack p="3" w="full" spacing={4}>
        {Pages.map((page, index) => (
          <Button variant={"unstyled"} w="full">
            <HStack
              key={index}
              textAlign={"left"}
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing="2"
              p="3"
              w="full"
              borderRadius="lg"
              color={page.active ? "white" : "gray.700"}
              transition={"all .3s ease"}
              bg={page.active ? "brand.900" : "transparent"}
              _hover={{ bg: "gray.100" }}
            >
              <HStack spacing="2" alignItems={"center"}>
                <Box>{page.icon}</Box>
                <Box>{page.title}</Box>
              </HStack>
              {page.notificationCount && (
                <HStack justifyContent={"center"} bg="gray.200" color="gray.700" borderRadius="md" w="30px" h="30px" textAlign="center" fontSize="xs">
                  <Text>{page.notificationCount}</Text>
                </HStack>
              )}
            </HStack>
          </Button>
        ))}
      </VStack>
    </>
  );
};

export default Sidebar;
