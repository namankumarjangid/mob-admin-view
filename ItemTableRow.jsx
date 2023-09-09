import {
  Box,
  Checkbox,
  HStack,
  IconButton,
  Image,
  Input,
  NumberInput,
  NumberInputField,
  Td,
  Textarea,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { LuImagePlus } from "react-icons/lu";
import { formatNumberAsInt, getMoneyFormat } from "../utils/formatNumber";

const ItemTableRow = ({itemList}) => {
  return (
    itemList.map((item)=> { 
      const price = parseInt(item.price)
      const gst = parseInt(item.gst) 
      const afterPrice = ((price/100)*gst) + price
      const discount = parseInt(item.discount)
      const quantity = parseInt(item.quantity)
      const total = (afterPrice - discount) * quantity
    return(<Tr>
      <Td>
        <HStack>
          <Checkbox />
          <IconButton icon={<LuImagePlus />} />
          <Textarea
            h="1"
            size={"xs"}
            fontSize={"xs"}
            color="black"
            defaultValue={item.name}
            value={item.name}
            maxH={"1"}
            placeholder="Add item details"
            onChange={() => {}}
          />
        </HStack>
      </Td>
      <VStack>
        <Box style={{ width: "10%" }}>
          <HStack m="0" p="0">
            <Td>piece</Td>
          </HStack>
        </Box>
        <Input
          placeholder="HSN/SAC"
          _placeholder={{ color: "#808080", fontSize: "sm" }}
          bg="gray.100"
        />
      </VStack>
      <Td>{price}</Td>
      <Td>
        <NumberInput value={gst} onChange={() => {}} p={0}>
          <NumberInputField p={1} />
        </NumberInput>
      </Td>
      <Td isNumeric>{getMoneyFormat(afterPrice)}</Td>
      <Td isNumeric>{getMoneyFormat(discount)}</Td>
      <Td isNumeric>{quantity}</Td>
      <Td isNumeric>{getMoneyFormat(total)}</Td>
    </Tr>
   ) } ))
  ;
};

export default ItemTableRow;
