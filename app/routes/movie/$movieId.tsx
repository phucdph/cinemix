import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Rating,
  SimpleGrid,
  Text,
} from "@mantine/core";
import type { MetaFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
import {
  IconCalendarEvent,
  IconClock,
  IconHeadphones,
} from "@tabler/icons-react";
import React from "react";
import ErrorHandler from "~/components/errors/ErrorHandler";
import ProgressiveImage from "~/components/ProgressiveImage";
import useGetImagePath from "~/hooks/useGetImagePath";
import movieService from "~/services/movie/movieService";
import { numberFormatter } from "~/utils/formatters";
import type { loader as rootLoader } from "~/root";

interface Props {}

export const loader = async ({ request, params }: LoaderArgs) => {
  const { movieId = "" } = params;

  try {
    return json(
      {
        data: await movieService.getMovie(movieId || ""),
        similarMovies: await movieService.getSimilarMovies({
          movie_id: movieId,
        }),
      },
      {
        headers: { "Cache-Control": "public, max-age=120" },
      }
    );
  } catch (e) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export const meta: MetaFunction<typeof loader, { root: typeof rootLoader }> = ({
  data,
  parentsData,
}) => {
  const config = parentsData?.root?.config;
  const ogImg = `${config?.images?.base_url}/${
    config?.images?.backdrop_sizes?.[0] || "original"
  }/${data?.data?.backdrop_path}`;
  return {
    "og:image": ogImg,
    description: data?.data?.overview,
    title: data?.data?.title ? `${data?.data?.title} | Cinemix` : undefined,
  };
};

const MovieDetail: React.FC<Props> = (props) => {
  const { data, similarMovies } = useLoaderData<typeof loader>();
  const getImagePath = useGetImagePath();

  return (
    <Container size="lg" px={{ xs: "md" }} my="md">
      <Grid>
        <Grid.Col xs={12} sm={4} md={4}>
          <AspectRatio ratio={2 / 3} w="100%">
            <ProgressiveImage
              placeholder={getImagePath(data?.poster_path, "w92")}
              src={getImagePath(data?.poster_path)}
              width="100%"
              height="100%"
              alt={data?.title}
              fit="cover"
            />
          </AspectRatio>
        </Grid.Col>
        <Grid.Col xs={12} sm={8} md={8}>
          <Text weight={500} size="xl">
            {data?.title}
            {data?.status && (
              <Badge variant="filled" size="md" color="teal" mb={6} ml={6}>
                {data.status}
              </Badge>
            )}
            {data?.adult && (
              <Badge variant="filled" size="xs" color="red" mb={6} ml={6}>
                18+
              </Badge>
            )}
          </Text>

          {data?.original_title !== data?.title && (
            <Text weight={500} size="md" color="dimmed">
              {data?.original_title}
            </Text>
          )}
          <Text size="xs" italic color="dimmed">
            {data?.tagline}
          </Text>
          {!!data?.production_companies?.length && (
            <Text size="sm" mt={4}>
              {data?.production_companies?.map((c) => c.name).join(", ")}
            </Text>
          )}

          <Rating
            mt={4}
            mb={6}
            value={(data?.vote_average ?? 0) / 2}
            fractions={3}
            readOnly
          />
          {data?.genres?.map((genre) => (
            <Badge mr={4} mb={4} mt={4} key={genre.id} size="sm" color="indigo">
              {genre?.name}
            </Badge>
          ))}
          <Flex direction="row" align="center" color="dimmed" mt={4}>
            <IconCalendarEvent />
            <Text ml={4} size="sm" component="span">
              {data?.release_date}
            </Text>
          </Flex>
          <Flex direction="row" align="center" color="dimmed" mt={6}>
            <IconClock />
            <Text ml={4} size="sm" component="span">
              {data?.runtime} mins
            </Text>
          </Flex>
          <Flex direction="row" align="center" color="dimmed" mt={6}>
            <IconHeadphones />
            {data?.spoken_languages?.map((lng) => (
              <Badge mr={6} size="sm" key={lng.iso_639_1}>
                {lng.english_name}
              </Badge>
            ))}
          </Flex>
          {!!data?.budget && (
            <Text mt={4} size="sm">
              <b>Production Budget</b>: ${numberFormatter(data?.budget)}
            </Text>
          )}
          {!!data?.revenue && (
            <Text mt={4} size="sm">
              <b>Revenue</b>: ${numberFormatter(data?.revenue)}
            </Text>
          )}
          <Text mt={4} title={data?.overview} color="dimmed" size="sm">
            {data?.overview}
          </Text>
          <Group mt="sm">
            <Button
              component="a"
              href={`https://www.imdb.com/title/${data?.imdb_id}`}
              target="_blank"
              color="indigo"
              variant="outline"
            >
              IMDB
            </Button>
            <Button
              component="a"
              href={data?.homepage}
              target="_blank"
              color="indigo"
            >
              Book Now
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
      <Box mt="md">
        <Text weight={500} size="lg">
          Similar Movies
        </Text>
        <SimpleGrid
          mt="sm"
          cols={6}
          breakpoints={[
            { maxWidth: "xl", cols: 6, spacing: "md" },
            { maxWidth: "lg", cols: 5, spacing: "md" },
            { maxWidth: "md", cols: 4, spacing: "md" },
            { maxWidth: "sm", cols: 3, spacing: "sm" },
            { maxWidth: "xs", cols: 2, spacing: "sm" },
          ]}
        >
          {similarMovies?.results?.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              style={{ textDecoration: "none" }}
            >
              <Card
                p={0}
                h="100%"
                sx={(theme) => ({
                  "&:hover": {
                    backgroundColor: theme.colors.dark[5],
                    boxShadow: theme.shadows.lg,
                  },
                })}
              >
                <AspectRatio ratio={2 / 3} w="100%" key={movie.id}>
                  <ProgressiveImage
                    placeholder={getImagePath(movie?.poster_path, "w92")}
                    src={getImagePath(movie?.poster_path, "w300")}
                    width="100%"
                    height="100%"
                    alt={movie?.title}
                    caption={movie?.title}
                    fit="cover"
                    styles={{
                      figure: {
                        width: "100%",
                        height: "100%",
                      },
                      imageWrapper: {
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  />
                </AspectRatio>
                <Text size="sm" mx="xs" my="sm" align="center">
                  {movie?.title}
                </Text>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export function CatchBoundary() {
  const caught = useCatch();
  return <ErrorHandler status={caught.status} />;
}

export default MovieDetail;
