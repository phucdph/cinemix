import { Button, Container, Flex, Header, Input, Text } from "@mantine/core";
import { Link, useTransition } from "@remix-run/react";
import { IconSearch } from "@tabler/icons-react";

const AppHeader: React.FC = (props) => {
  const transition = useTransition();

  const isSearching = transition.state === "submitting";

  return (
    <Header height={60} p="xs">
      <Container
        size="lg"
        w="100%"
        h="100%"
        display="flex"
        sx={{ alignItems: "center" }}
      >
        <Flex w="100%" align="center" justify="space-between">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text weight={800} size="xl" color="indigo">
              CINEMIX
            </Text>
          </Link>
          <form method="get" action="/search">
            <Flex>
              <Input
                name="q"
                size="sm"
                placeholder="Search"
                variant="filled"
                disabled={isSearching}
              />
              <Button
                size="sm"
                color="indigo"
                type="submit"
                disabled={isSearching}
                loading={isSearching}
              >
                <IconSearch size="1.2rem" />
              </Button>
            </Flex>
          </form>
        </Flex>
      </Container>
    </Header>
  );
};

export default AppHeader;
