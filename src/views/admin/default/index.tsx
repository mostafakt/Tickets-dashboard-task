import Card from "components/card/Card";
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import TotalSpent from "views/admin/default/components/TotalSpent";
import Project from "./components/Project";

export default function UserReports() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        <Card height={"170px"} mb={{ base: "0px", "2xl": "20px" }}>
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            fontSize="2xl"
            mt="10px"
            mb="4px"
          >
            Notices
          </Text>

          <Project boxShadow={cardShadow} eventsNumber={"13"} mb="20px" />
        </Card>
      </SimpleGrid>
    </Box>
  );
}
