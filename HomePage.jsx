import {useState} from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import Search from "../components/Search";
import UserProfile from "../components/UserProfile";
import Addresses from "../components/Addresses";
import RFQDetails from "../components/RFQDetails";
import Subtotal from "../components/Subtotal";
import Total from "../components/Total";
import ApplyOffers from "../components/ApplyOffers";
import ItemsTable from "../components/ItemsTable";

const HomePage = () => {
  const [itemList,setItemList] = useState([]);
  const [counter,setCounter] = useState(0);
  const [additionalDiscount,setAdditionalDisCount] = useState("");


  const onNewItemAdding=(price, discount ,productName ,quantity,gst, callback)=>{
    console.log("button clicked ---->", price !=="" || discount !=="" || productName !== "" || quantity !== "");
          console.log("price -> ", price," discount -> ", discount," productName -> ", productName);
          if(price !=="" || discount !=="" || productName !== "" || quantity !== ""){
            const item = {
              id: new Date().getTime(),
              name : productName,
              price : price,
              gst : gst,
              discount : discount,
              quantity : quantity, 
            }
            console.log("itemList --> ",itemList);
            let subItems = itemList;
            console.log("subItems -> ",subItems);
            subItems.push(item);
            setItemList(subItems);
            callback(true);
            setCounter(cout => ++cout);
          }
          else{
            alert('Fields cannot be empty!');
            callback(false);
          }
  }
  
  return (
    <>
      <Box
        p="10"
        __css={{
          background: "linear-gradient(180deg, #BCDBDE 0%, #F3F3EE 20%)",
        }}
      >
        <VStack spacing={10} alignItems={"start"}>
          <HStack h={"20"} alignItems={"start"}>
            <Heading as="h1" size="lg">
              Create Quote
            </Heading>
          </HStack>

          <HStack w="full" justifyContent={"space-between"}>
            <Search />
            <HStack spacing={4}>
              <Button variant={"light"} colorScheme="blue" size="md" w="36">
                CANCEL
              </Button>
              <Button
                variant={"darkBlue"}
                fontSize={"md"}
                colorScheme="brand"
                size="md"
                w="52"
              >
                CREATE QUOTE
              </Button>
            </HStack>
          </HStack>
          <UserProfile />
          <Addresses />
          <RFQDetails />
          <ItemsTable onNewItemAdding={onNewItemAdding}  itemList={itemList}/>
          <Subtotal itemList={itemList} counter={counter} setAdditionalDisCount={setAdditionalDisCount} additionalDiscount={additionalDiscount}/>
          <Grid templateColumns="repeat(10, 1fr)" w="full">
            <GridItem colSpan={6} />
            <GridItem colSpan={4}>
              <VStack spacing={10} alignItems={"start"} w="full">
                <Total itemList = {itemList} additionalDiscount = {additionalDiscount}/>
                <ApplyOffers />
                <HStack w="full" gap={4} justifyContent={"flex-end"}>
                  <Button variant={"light"} colorScheme="blue" size="md" w="36">
                    CANCEL
                  </Button>
                  <Button
                    variant={"darkBlue"}
                    fontSize={"md"}
                    colorScheme="brand"
                    size="md"
                    w="52"
                  >
                    CREATE QUOTE
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    </>
  );
};

export default HomePage;
