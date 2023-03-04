import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Overlay,
  Rating,
  Text,
} from "@mantine/core";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  IconCalendarEvent,
  IconClock,
  IconDeviceSpeaker,
  IconHeadphones,
} from "@tabler/icons-react";
import React from "react";
import useGetImagePath from "~/hooks/useGetImagePath";
import movieService from "~/services/movie/movieService";
import { numberFormatter } from "~/utils/formatters";

interface Props {}

export const loader = async ({ request, params }: LoaderArgs) => {
  const { movieId = "" } = params;

  try {
    const data = await movieService.getMovie(movieId || "");
    return json(data, {
      headers: { "Cache-Control": "public, max-age=120" },
    });
  } catch (e) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

const MovieDetail: React.FC<Props> = (props) => {
  const data = useLoaderData<typeof loader>();
  const getImagePath = useGetImagePath();

  console.log(data);

  return (
    <Container size="lg" px={{ xs: "md" }} my="md">
      <Grid>
        <Grid.Col xs={12} sm={4} md={4}>
          <AspectRatio ratio={2 / 3} w="100%">
            <Image
              withPlaceholder
              placeholder={
                <Box
                  sx={{ position: "relative", width: "100%", height: "100%" }}
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
              src={getImagePath(data?.poster_path)}
              width="100%"
              height="100%"
              alt={data?.title}
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
    </Container>
  );
};

export function CatchBoundary() {
  return (
    <div>
      <h2>We couldn't find that page!</h2>
    </div>
  );
}

export default MovieDetail;
