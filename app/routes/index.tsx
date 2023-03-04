import { Container, Flex, SegmentedControl } from "@mantine/core";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { useFetcher, useLoaderData, useSearchParams } from "@remix-run/react";
import movieService from "~/services/movie/movieService";
import { useCallback, useRef, useState, useEffect } from "react";
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

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
  formMethod,
  defaultShouldRevalidate,
  currentUrl,
  nextUrl,
}) => {
  if (currentUrl.searchParams.get("tab") === nextUrl.searchParams.get("tab")) {
    return false;
  }
  return defaultShouldRevalidate;
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

  const viewType: "grid" | "list" = (params.get("view_type") as any) || "grid";

  const setTab = (t: string) => setParams({ tab: t, view_type: viewType });

  const setViewType = (view_type: "grid" | "list") =>
    setParams({ view_type, tab });

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
        <ViewTypeSegment value={viewType} onChange={setViewType} />
      </Flex>
      <MovieList
        data={movies}
        onLoadMore={loadMore}
        isLoadingMore={isLoadingMore}
        viewType={viewType}
      />
    </Container>
  );
};

export default Index;
