import { Box, Card, Flex, Skeleton } from "@mantine/core";
import React from "react";

interface Props {}

const MovieItemPlaceholder: React.FC<Props> = (props) => {
  return (
    <Card shadow="sm" radius="md" p={0} withBorder h="100%">
      <Flex direction="row">
        <Box w={200}>
          <Skeleton width={"200px"} h={300} bg="gray.0" />
        </Box>
        <Box ml="md" mr="md" mt="sm" w="100%">
          <Skeleton height="1rem" width="100%" bg="gray.0" />
          <Skeleton height="1rem" width="70%" bg="gray.0" mt="sm" />
          <Skeleton height="1rem" width="30%" bg="gray.0" mt="sm" />
          <Skeleton height="0.75rem" width="100%" bg="gray.0" mt="md" />
          <Skeleton height="0.75rem" width="100%" bg="gray.0" mt="sm" />
          <Skeleton height="0.75rem" width="100%" bg="gray.0" mt="sm" />
          <Skeleton height="0.75rem" width="100%" bg="gray.0" mt="sm" />
          <Skeleton height="0.75rem" width="50%" bg="gray.0" mt="sm" />
        </Box>
      </Flex>
    </Card>
  );
};

export default React.memo(MovieItemPlaceholder);
