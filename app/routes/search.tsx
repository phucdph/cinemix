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
  ShouldRevalidateFunction,
  useFetcher,
  useLoaderData,
  useParams,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import { IconSearchOff } from "@tabler/icons-react";
import { useCallback, useRef, useState, useEffect } from "react";
import MovieList from "~/components/MovieList";
import ViewTypeSegment from "~/components/ViewTypeSegment";
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

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
  formMethod,
  defaultShouldRevalidate,
  currentUrl,
  nextUrl,
}) => {
  if (currentUrl.searchParams.get("q") === nextUrl.searchParams.get("q")) {
    return false;
  }
  return defaultShouldRevalidate;
};

const Search = () => {
  const data = useLoaderData<typeof loader>();

  const [movies, setMovies] = useState(data?.results || []);

  useEffect(() => {
    setMovies(data?.results || []);
  }, [data]);

  const hasNextPage = movies?.length < data?.total_results;

  const fetcher = useFetcher();
  const page = useRef(1);

  const isLoadingMore = fetcher.state === "loading" && page.current > 1;
  const [params, setParams] = useSearchParams();

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

  const viewType: "grid" | "list" = (params.get("view_type") as any) || "grid";

  const setViewType = (view_type: "grid" | "list") => setParams({ view_type });

  const isEmpty = !movies?.length;

  return (
    <Container size="lg" px={{ xs: "md" }} my="md">
      {!isEmpty && (
        <Flex mb="lg" mt={-16} align="center" justify="space-between">
          <Text ml="md" mb="md">
            {numberFormatter(data?.total_results)} movies for:{" "}
            <b>{searchText}</b>
          </Text>
          <ViewTypeSegment value={viewType} onChange={setViewType} />
        </Flex>
      )}

      {!isEmpty ? (
        <MovieList
          data={movies}
          onLoadMore={loadMore}
          isLoadingMore={isLoadingMore}
        />
      ) : (
        <Flex pt="5rem" align="center" justify="center" direction="column">
          <IconSearchOff size="8rem" />
          <Text size="lg" mt="lg">
            No result found for <b>{searchText}</b>
          </Text>
        </Flex>
      )}
    </Container>
  );
};

export default Search;
