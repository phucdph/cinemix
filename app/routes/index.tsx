import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Image,
  SegmentedControl,
  Text,
} from "@mantine/core";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  useFetcher,
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import useGetImagePath from "~/hooks/useGetImagePath";
import movieService from "~/services/movie/movieService";
import { useCallback, useRef, useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import MovieItem from "~/components/MovieItem";
import MovieItemPlaceholder from "~/components/MovieItemPlaceholder";
import MovieList from "~/components/MovieList";
import ViewTypeSegment from "~/components/ViewTypeSegment";

const getParams = (searchParams: URLSearchParams) => ({
  page: Number(searchParams.get("page") || "1"),
  tab: searchParams.get("tab") || "now-playing",
});

export const loader = async ({ request }: LoaderArgs) => {
  const { page, tab } = getParams(new URL(request.url).searchParams);
  const data =
    tab === "now-playing"
      ? await movieService.getNowPlayingMovies({ page })
      : await movieService.getTopRatedMovies({ page });
  return json(data, {
    headers: { "Cache-Control": "public, max-age=120" },
  });
};

const Index = () => {
  const data = useLoaderData<typeof loader>();

  const [movies, setMovies] = useState(data?.results || []);

  useEffect(() => {
    setMovies(data?.results || []);
  }, [data]);

  const hasNextPage = movies?.length < data?.total_results;

  const fetcher = useFetcher();
  const page = useRef(1);

  const isLoadingMore = fetcher.state === "loading" && page.current > 1;

  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore) return;
    page.current += 1;
    fetcher.load(`/?index&page=${page.current}`);
  }, [fetcher, hasNextPage, isLoadingMore]);

  useEffect(() => {
    if (fetcher.data) {
      setMovies((prevItems) => [
        ...prevItems,
        ...(fetcher?.data?.results || []),
      ]);
    }
  }, [fetcher.data]);

  const [params, setParams] = useSearchParams();

  const tab = params.get("tab") || "now-playing";

  const setTab = (t: string) => setParams({ tab: t });

  return (
    <Container size="lg" px={{ xs: "md" }} my="md">
      <Flex mb="lg" mt={-16} align="center" justify="space-between">
        <SegmentedControl
          onChange={setTab}
          value={tab}
          data={[
            {
              label: "Now Playing",
              value: "now-playing",
            },
            {
              label: "Top Rated",
              value: "top-rated",
            },
          ]}
          color="indigo"
        />
        <ViewTypeSegment/>
      </Flex>
      <MovieList
        data={movies}
        onLoadMore={loadMore}
        isLoadingMore={isLoadingMore}
      />
    </Container>
  );
};

export default Index;
