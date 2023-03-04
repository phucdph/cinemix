import type { BoxProps } from "@mantine/core";
import { Box, SimpleGrid, Card, AspectRatio, Text } from "@mantine/core";
import { Link } from "@remix-run/react";
import React from "react";
import useGetImagePath from "~/hooks/useGetImagePath";
import type { IMovie } from "~/services/movie/typings";
import ProgressiveImage from "../ProgressiveImage";

interface Props extends BoxProps {
  data: IMovie[];
}

const SimilarMovies: React.FC<Props> = (props) => {
  const { data, ...rest } = props;
  const getImagePath = useGetImagePath();
  if (!data?.length) return null;
  return (
    <Box {...rest}>
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
        {data?.map((movie) => (
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
  );
};

export default SimilarMovies;
