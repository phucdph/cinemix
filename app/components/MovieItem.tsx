import {
  AspectRatio,
  Badge,
  Box,
  Card,
  Flex,
  Image,
  Overlay,
  Rating,
  Text,
  Transition,
} from "@mantine/core";
import React from "react";
import { InView, useInView } from "react-intersection-observer";
import { useGenresById } from "~/hooks/useGenres";
import useGetImagePath from "~/hooks/useGetImagePath";
import type { IMovie } from "~/services/movie/typings";
import { IconCalendarEvent } from "@tabler/icons-react";
import { Link } from "@remix-run/react";
import ProgressiveImage from "./ProgressiveImage";

interface Props {
  data: IMovie;
}

const MovieItem: React.FC<Props> = (props) => {
  const { data } = props;

  const getImagePath = useGetImagePath();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 50,
  });

  const genres = useGenresById();

  return (
    <Box ref={ref}>
      <Transition
        mounted={inView}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(style) => (
          <Link
            to={`/movie/${data.id}`}
            style={{ textDecoration: "none" }}
            prefetch="intent"
          >
            <Card
              shadow="sm"
              radius="md"
              p={0}
              withBorder
              h="100%"
              sx={(theme) => ({
                "&:hover": {
                  backgroundColor: theme.colors.dark[5],
                  boxShadow: theme.shadows.lg,
                },
              })}
              style={{
                ...style,
              }}
            >
              <Flex direction="row">
                {!!data?.adult && (
                  <Badge
                    variant="filled"
                    size="xs"
                    color="red"
                    sx={{ position: "absolute", right: 16, top: 18 }}
                  >
                    18+
                  </Badge>
                )}
                <Box
                  w={{ base: 120, xs: 140, sm: 200, md: 200, lg: 200, xl: 200 }}
                >
                  <AspectRatio
                    ratio={2 / 3}
                    w={{
                      base: 120,
                      xs: 140,
                      sm: 200,
                      md: 200,
                      lg: 200,
                      xl: 200,
                    }}
                  >
                    <ProgressiveImage
                      placeholder={getImagePath(data?.poster_path, "w92")}
                      src={getImagePath(data?.poster_path, "w300")}
                      width={"100%"}
                      height="100%"
                      alt={data?.title}
                      fit="cover"
                    />
                  </AspectRatio>
                </Box>

                <Box
                  mx={{
                    base: "xs",
                    xs: "sm",
                    sm: "sm",
                    md: "md",
                    lg: "md",
                    xl: "md",
                  }}
                  mt={{
                    base: 4,
                    xs: 4,
                    sm: "xs",
                    md: "sm",
                    lg: "sm",
                    xl: "sm",
                  }}
                >
                  <Text
                    weight={500}
                    mr={36}
                    sx={(theme) => ({
                      [theme.fn.largerThan("sm")]: {
                        fontSize: theme.fontSizes.lg,
                      },
                      [theme.fn.smallerThan("sm")]: {
                        fontSize: theme.fontSizes.sm,
                      },
                    })}
                  >
                    {data?.title}
                  </Text>
                  <Flex
                    wrap="wrap"
                    sx={(theme) => ({
                      [theme.fn.smallerThan("xs")]: {
                        display: "none",
                      },
                    })}
                  >
                    {data?.genre_ids?.map((id) => (
                      <Badge mr={4} mb={4} key={id} size="sm" color="indigo">
                        {genres?.[id]?.name}
                      </Badge>
                    ))}
                  </Flex>
                  <Flex
                    direction="row"
                    align="center"
                    justify="space-between"
                    mt={4}
                    wrap="wrap"
                  >
                    <Flex direction="row" align="center" color="dimmed" mt={4}>
                      <IconCalendarEvent />
                      <Text ml={4} size="xs" component="span">
                        {data?.release_date}
                      </Text>
                    </Flex>
                    <Rating
                      size="sm"
                      mt={4}
                      value={(data?.vote_average ?? 0) / 2}
                      fractions={3}
                      readOnly
                    />
                  </Flex>
                  <Text
                    mt={4}
                    title={data?.overview}
                    color="dimmed"
                    size="sm"
                    lineClamp={4}
                  >
                    {data?.overview}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Link>
        )}
      </Transition>
    </Box>
  );
};

export default React.memo(MovieItem);
