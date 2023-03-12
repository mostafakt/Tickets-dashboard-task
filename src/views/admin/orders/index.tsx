import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";

const Orders = () => {
  const textColorSecondary = useColorModeValue("black", "white");
  const boxBg = useColorModeValue("green.200", "whiteAlpha.100");
  const secoundboxBg = useColorModeValue("secondaryGray.200", "whiteAlpha.100");
  return (
    <Flex mt={"75px"} direction={"column"}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Button
          bg={secoundboxBg}
          fontSize="2xl"
          fontWeight="500"
          color={textColorSecondary}
          maxWidth={"250px"}
          borderRadius="25px"
        >
          Create Order
        </Button>
      </Flex>
    </Flex>
  );
};

export default Orders;
