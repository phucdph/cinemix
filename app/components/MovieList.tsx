import { Grid, Stack } from "@mantine/core";
import { useTransition } from "@remix-run/react";
import React, { useCallback, useMemo } from "react";
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
          <GridItemWrapper key={item.id} viewType={viewType}>
            <MovieItem data={item} />
          </GridItemWrapper>
        ))}
        {isLoadingMore && !isTransitioning && (
          <>
            <GridItemWrapper viewType={viewType}>
              <MovieItemPlaceholder />
            </GridItemWrapper>
            <GridItemWrapper viewType={viewType}>
              <MovieItemPlaceholder />
            </GridItemWrapper>
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

const GridItemWrapper = ({ children, viewType }: any) => (
  <Grid.Col
    {...(viewType === "grid"
      ? {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
        }
      : {
          span: 12,
        })}
  >
    {children}
  </Grid.Col>
);

export default MovieList;
