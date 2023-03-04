import { Grid } from "@mantine/core";
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

  return (
    <>
      <Grid gutter="md" mih="100vh">
        {movies?.map((item, index) => (
          <Grid.Col key={item.id} xs={12} sm={6} md={6} lg={6}>
            <MovieItem data={item} index={index} />
          </Grid.Col>
        ))}
        {isLoadingMore && (
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
};

export default MovieList;
