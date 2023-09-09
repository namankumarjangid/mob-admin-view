import { useEffect, useState } from "react";
import { Box, Button, Divider, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Subtotal = ({itemList,counter,setAdditionalDisCount,additionalDiscount}) => {
  //const [additionalDiscount,setAdditionalDiscount] = useState('')
  console.log("item---->",itemList)
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
      <Box w="full" bg="white" p="4">
        <VStack spacing={14} alignItems={"start"} w="full">
          <VStack spacing={4} alignItems={"start"} w="full">
            <VStack spacing={2} alignItems={"start"} w="full">
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
            </VStack>
            <VStack spacing={2} alignItems={"start"}>
              <div className="d-flex">
              <Button variant={"link"} colorScheme="blue" marginStart={10} size="md">
                + Add additional discount
              </Button>
              <Input placeholder="Additional Discount" marginStart={20} size={'md'} value={additionalDiscount} onChange={(e)=>{
     
     setAdditionalDisCount(e?.target?.value|| 0)

              }}/>
              </div>
              <Button variant={"link"} colorScheme="blue" size="md">
                + Add delivery fee
              </Button>
            </VStack>
          </VStack>
          <VStack spacing={2} alignItems={"start"} w="full">
            <Divider />
            <HStack w="full" justifyContent={"space-between"}>
              <HStack gap={2}>
                <Text fontSize="xl" fontWeight={"semibold"}>
                  Subtotal
                </Text>
              </HStack>
              <Text fontSize="xl" fontWeight={"semibold"}>
                ₹ {subtotal - parseInt(additionalDiscount)}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default Subtotal;
