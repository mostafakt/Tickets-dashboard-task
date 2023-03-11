import React from "react";
import Card from "components/card/Card";

const OverviewEvent = (props: {}) => {
  const { ...rest } = props;
  return (
    <Card
      alignItems="center"
      flexDirection="column"
      w="100%"
      maxW="max-content"
      p="20px 15px"
      h="max-content"
      {...rest}
    ></Card>
  );
};

export { OverviewEvent };
