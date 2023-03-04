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
  useParams,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import { useCallback, useRef, useState, useEffect } from "react";
import MovieList from "~/components/MovieList";
import searchService from "~/services/search/searchService";
import { numberFormatter } from "~/utils/formatters";

const getParams = (searchParams: URLSearchParams) => ({
  page: Number(searchParams.get("page") || "1"),
  query: searchParams.get("q") || "",
});

export const loader = async ({ request }: LoaderArgs) => {
  const { query, page } = getParams(new URL(request.url).searchParams);
  const data = await searchService.searchMovies({ query, page });
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
  const [params] = useSearchParams();

  const searchText = params.get("q");

  const loadMore = useCallback(() => {
    if (!hasNextPage || isLoadingMore) return;
    page.current += 1;
    fetcher.load(`/search?page=${page.current}&q=${searchText}`);
  }, [fetcher, hasNextPage, isLoadingMore, searchText]);

  useEffect(() => {
    if (fetcher.data) {
      setMovies((prevItems) => [
        ...prevItems,
        ...(fetcher?.data?.results || []),
      ]);
    }
  }, [fetcher.data]);

  const transition = useTransition();

  return (
    <Container size="lg" px={{ xs: "md" }} my="md">
      <Text ml="md" mb="md" mt={-16}>
        {numberFormatter(data?.total_results)} movies for: <b>{searchText}</b>
      </Text>
      <MovieList
        data={movies}
        onLoadMore={loadMore}
        isLoadingMore={isLoadingMore}
      />
    </Container>
  );
};

export default Index;
