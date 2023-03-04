// components/RouterTransition.tsx
import { useEffect } from "react";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { useTransition } from "@remix-run/react";

export function RouterTransition() {
  const { state } = useTransition();

  useEffect(() => {
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    if (state === "loading") nprogress.start();
    // when the state is idle then we can to complete the progress bar
    if (state === "idle") nprogress.complete();
  }, [state]);

  return <NavigationProgress autoReset={true} color="indigo" />;
}
