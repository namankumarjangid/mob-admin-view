import { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import ItemTableRow from "./ItemTableRow";


const ItemsTable = ({onNewItemAdding,itemList,callbackAdded}) => {
  const [modal,setModal] = useState(false)
  const [price,setPrice] = useState()
  const [productName,setProductName] = useState()
  const [gst,setGst] = useState('18')
  const [discount,setDiscount] = useState()
  const [quantity,setQuantity] = useState();
 

  useEffect(()=>{
    console.log("items list --> ", itemList);
  },[])


  const onNewItem=()=>{
    onNewItemAdding(price,discount,productName ,quantity ,gst, (status)=>{
        if(status){
          setPrice('')
          setDiscount('')
          setQuantity('')
          setGst('18')
          setProductName('')
          setModal(false)
        }
    });
    
  }

   callbackAdded=()=>{
    console.log("callbackAdded calling----->");

  }
  
  return (
    <>
      <Box
        background={"white"}
        rounded={"xl"}
        border={"4px solid"}
        borderColor={"gray.200"}
        w="full"
        // p="6"
      >
        <VStack spacing={"4"}>
          <HStack
            p="6"
            w="100%"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack spacing={4}>
              <Text fontWeight={"bold"}>Mob ALL 23 </Text>
              <IoMdArrowDropdown />
              <Button leftIcon={<FaClipboardList />} size={"xs"}>
                View catalogue
              </Button>
            </HStack>
            <Button
              px="5"
              fontSize={"xs"}
              py="0"
              color="white"
              variant={"blue"}
              leftIcon={<BiPlus />}
              onClick={()=>{
                setModal(true)
              }}
            >
              Add Item
            </Button>
          </HStack>
          <TableContainer width={"100%"}>
            <Table variant="simple">
              <Thead bg="gray.100">
                <Tr>
                  <Th textTransform={"none"} color={"black"}>
                    3 Items
                  </Th>
                  <Th textTransform={"none"} color={"black"}>
                    Unit name
                  </Th>
                  <Th textTransform={"none"} color={"black"}>
                    Price (Before tax)
                  </Th>
                  <Th textTransform={"none"} color={"black"}>
                    GST %
                  </Th>
                  <Th textTransform={"none"} color={"black"}>
                    Price (After tax)
                  </Th>
                  <Th textTransform={"none"} color={"black"}>
                    Discount
                  </Th>
                  <Th textTransform={"none"} color={"black"}>
                    Quantity
                  </Th>
                  <Th textTransform={"none"} color={"black"}>
                    Total
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <ItemTableRow  itemList={itemList}/>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Box>
      {modal === true && (
        <div class="modal show fade" style={{display : 'block'}}>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Enter product details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{
          setModal(false)
        }}></button>
      </div>
      <div class="modal-body">
        <div className="row">
          <div className="col-6">
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fs-6">Product Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Product Name" value={productName} onChange={(e)=>{
    setProductName(e.target.value)
  }}/>
</div>
          </div>
          <div className="col-6">
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fs-6">Product Price</label>
  <input type="number" class="form-control"  placeholder="Product Price" value={price} onChange={(e)=>{
    setPrice(e.target.value)
  }}/>
</div>
          </div>
          <div className="col-6">
          <label for="exampleFormControlInput1" class="form-label fs-6">Select GST%</label>
          <select class="form-select mb-3" aria-label="Default select example" value={gst} onChange={(e)=>{
            setGst(e.target.value)
          }}>
  <option value="18">18%</option>
</select>
          </div>
          <div className="col-6">
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fs-6">Discount</label>
  <input type="number" class="form-control"  placeholder="Discount" value={discount} onChange={(e)=>{
    setDiscount(e.target.value)
  }}/>
</div>
          </div>
          <div className="col-6">
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fs-6">Quantity</label>
  <input type="number" class="form-control"  placeholder="Quantity" value={quantity} onChange={(e)=>{
    setQuantity(e.target.value)
  }}/>
</div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
          setModal(false)
        }}>Close</button>
        <button type="button" class="btn btn-primary" onClick={onNewItem}>Save changes</button>
      </div>
    </div>
  </div>
</div>
      )}
      
    </>
  );
};

export default ItemsTable;
