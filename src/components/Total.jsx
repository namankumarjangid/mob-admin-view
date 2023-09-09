import { Box, Button, Checkbox, Divider, HStack, Highlight, Text, VStack } from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

const Total = ({itemList,additionalDiscount}) => {
  let totalDiscount = 0
  let totaltax = 0
  let subtotal = 0
  itemList.map((item)=>{
    const price = parseInt(item.price)
    const gst = parseInt(item.gst) 
    const quantity = parseInt(item.quantity)
    const discount = parseInt(item.discount)
    const afterPrice = ((price/100)*gst) + price
    const tax = ((price/100)*gst) * quantity
    const total = (afterPrice - discount) * quantity

    totalDiscount += discount;
    totaltax += tax
    subtotal += total
  })
  return (
    <>
      <Box background={"white"} rounded={"xl"} border={"4px solid"} borderColor={"gray.200"} w="full">
        <VStack spacing={2} alignItems={"start"} w="full">
          <VStack spacing={2} alignItems={"start"} w="full" p="5">
            <Checkbox colorScheme="brand">Use your ₹1800 wallet money</Checkbox>
            <Checkbox colorScheme="brand">
              <HStack>
                <Text>Use your 2500 points</Text>
                <Text color={"green"}>(₹250)</Text>
              </HStack>
            </Checkbox>
          </VStack>
          <Divider />
          <VStack spacing={2} alignItems={"start"} w="full" p="5">
            <HStack w="full" justifyContent={"space-between"}>
              <Text fontSize="md">Subtotal</Text>
              <Text fontSize="md">₹ {subtotal}</Text>
            </HStack>
            <HStack w="full" justifyContent={"space-between"}>
              <Text fontSize="md">Discount</Text>
              <Text fontSize="md" color={"green"}>
                - ₹ {totalDiscount}
              </Text>
            </HStack>
            <HStack w="full" justifyContent={"space-between"}>
              <HStack gap={2}>
                <Text fontSize="md">Tax @ 12%</Text>
                <Text fontSize="md" color={"gray.400"}>
                  <AiOutlineInfoCircle />
                </Text>
              </HStack>
              <Text fontSize="md">₹ 0</Text>
            </HStack>
            <HStack w="full" justifyContent={"space-between"}>
              <HStack gap={2}>
                <Text fontSize="md">Tax @ 18%</Text>
                <Text fontSize="md" color={"gray.400"}>
                  <AiOutlineInfoCircle />
                </Text>
              </HStack>
              <Text fontSize="md">₹ {totaltax}</Text>
            </HStack>
            <HStack w="full" justifyContent={"space-between"}>
              <Text fontSize="md">Add additional discount</Text>
              <HStack gap={2} justifyContent={"space-between"}>
                <HStack justifyContent={"space-between"} alignItems={"center"} w="72" p="1" borderRadius="md" border={"1px solid"} borderColor={"gray.300"}>
                  <HStack bg="gray.200" p="1" rounded="md">
                    <Button variant={"link"} fontSize="md" px="4" py="1" bg="white" color={"brand.500"} rounded="md" textAlign={"center"}>
                      ₹
                    </Button>
                    <Button variant={"link"} fontSize="md" px="4" py="1" color={"gray.700"} rounded="md" textAlign={"center"}>
                      %
                    </Button>
                  </HStack>
                  <Text>₹ {additionalDiscount}</Text>
                </HStack>
                <Button variant={"link"} color="gray.400" mx={-3}>
                  <AiOutlineClose />
                </Button>
              </HStack>
            </HStack>
            <Button variant={"link"} colorScheme="blue" size="md">
              + Add delivery fee
            </Button>
          </VStack>
          <Divider />
          <HStack w="full" justifyContent={"space-between"} px="5">
            <HStack gap={2} my="3">
              <Text fontSize="xl" fontWeight={"semibold"}>
                Total
              </Text>
            </HStack>
            <Text fontSize="xl" fontWeight={"semibold"}>
              ₹ {subtotal - parseInt(additionalDiscount)}
            </Text>
          </HStack>
          <Divider />
          <HStack w="full" justifyContent={"end"} p="5">
            <Highlight query="328 points" styles={{ fontWeight: "semibold" }}>
              You will earn 328 points on this purchase
            </Highlight>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Total;
