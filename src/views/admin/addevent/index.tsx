import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Project1 from "assets/img/profile/Project1.png";
import Card from "components/card/Card";
import { useState } from "react";
import ButtonsRow from "./components/ButtonsRow";
import { EventCard } from "./components/EventCard";
function AddEvent() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [eventState, setEventState] = useState(1);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card mb={{ base: "0px", "2xl": "20px" }}>
        <Flex
          direction={{ base: "row", md: "row" }}
          justifyContent={"space-between"}
        ></Flex>
      </Card>
    </Box>
  );
}
export { AddEvent };
