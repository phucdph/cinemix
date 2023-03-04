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

interface Props {
  data: IMovie;
  index?: number;
}

const MovieItem: React.FC<Props> = (props) => {
  const { data, index = 0 } = props;

  const getImagePath = useGetImagePath();

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const genres = useGenresById();

  return (
    <>
      <span ref={ref} />
      <Transition
        mounted={inView}
        transition="fade"
        duration={300}
        timingFunction="ease"
      >
        {(style) => (
          <Link to={`/movie/${data.id}`} style={{ textDecoration: "none" }}>
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
                transitionDelay: (index % 20) * 50 + "ms",
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
                <Box w={200}>
                  <AspectRatio ratio={2 / 3} w={200}>
                    <Image
                      withPlaceholder
                      placeholder={
                        <Box
                          sx={{ position: "relative", width: 200, height: 300 }}
                        >
                          <img
                            src={getImagePath(data?.poster_path, "w92")}
                            width="100%"
                            height="100%"
                            alt={data?.title}
                            style={{ objectFit: "cover" }}
                          />
                          <Overlay blur={10} />
                        </Box>
                      }
                      src={
                        inView ? getImagePath(data?.poster_path, "w300") : null
                      }
                      width={200}
                      height="100%"
                      alt={data?.title}
                      fit="cover"
                    />
                  </AspectRatio>
                </Box>

                <Box ml="md" mr="md" mt="sm">
                  <Text weight={500} size="lg" mr={36}>
                    {data?.title}
                  </Text>
                  {data?.genre_ids?.map((id) => (
                    <Badge mr={4} mb={4} key={id} size="sm" color="indigo">
                      {genres?.[id]?.name}
                    </Badge>
                  ))}
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
    </>
  );
};

export default React.memo(MovieItem);
