// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
// Assets

export default function Project(props: {
  eventsNumber: string;
  [x: string]: any;
}) {
  const { eventsNumber, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p="14px">
      <Flex
        align="center"
        gap={"10px"}
        direction={{ base: "column", md: "row" }}
      >
        <Text color={textColorPrimary} fontWeight="500" fontSize="md" mb="4px">
          {eventsNumber}
        </Text>
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            events are live
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
