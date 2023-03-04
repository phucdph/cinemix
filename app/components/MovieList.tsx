import { Grid, Stack } from "@mantine/core";
import { useTransition } from "@remix-run/react";
import React from "react";
import { InView } from "react-intersection-observer";
import type { IMovie } from "~/services/movie/typings";
import MovieItem from "./MovieItem";
import MovieItemPlaceholder from "./MovieItemPlaceholder";

interface Props {
  data?: IMovie[];
  total?: number;
  onLoadMore?: () => void;
  isLoadingMore?: boolean;
  viewType?: "grid" | "list";
}

const MovieList: React.FC<Props> = (props) => {
  const { data: movies, onLoadMore, isLoadingMore, viewType = "grid" } = props;

  const transition = useTransition();

  const isTransitioning = transition.state === "loading";

  if (viewType === "grid")
    return (
      <>
        <Grid gutter="md" mih="150vh">
          {movies?.map((item, index) => (
            <Grid.Col key={item.id} xs={12} sm={6} md={6} lg={6}>
              <MovieItem data={item} index={index} />
            </Grid.Col>
          ))}
          {isLoadingMore && !isTransitioning && (
            <>
              <Grid.Col xs={12} sm={6} md={6} lg={6}>
                <MovieItemPlaceholder />
              </Grid.Col>
              <Grid.Col xs={12} sm={6} md={6} lg={6}>
                <MovieItemPlaceholder />
              </Grid.Col>
            </>
          )}
        </Grid>
        {!!movies?.length && !isLoadingMore && !isTransitioning && (
          <InView
            as="div"
            initialInView={false}
            onChange={(inView) => {
              if (inView) onLoadMore?.();
            }}
          />
        )}
      </>
    );
  else {
    return (
      <>
        <Stack spacing="xs" mih="150vh">
          {movies?.map((item, index) => (
            <MovieItem key={item.id} data={item} index={index} />
          ))}
          {isLoadingMore && !isTransitioning && (
            <>
              <MovieItemPlaceholder />
            </>
          )}
        </Stack>
        {!!movies?.length && !isLoadingMore && !isTransitioning && (
          <InView
            as="div"
            initialInView={false}
            onChange={(inView) => {
              if (inView) onLoadMore?.();
            }}
          />
        )}
      </>
    );
  }
};

export default MovieList;
