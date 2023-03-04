import { useMemo } from "react";
import BaseError from "./BaseError";
import InternalServerError from "./InternalServerError";
import NotFound from "./NotFound";

interface Props {
  status?: number;
}

const ErrorHandler = (props: Props) => {
  const { status = 0 } = props;
  const errorElement = useMemo(() => {
    switch (true) {
      case status === 404: {
        return <NotFound />;
      }

      case status >= 500: {
        return <InternalServerError />;
      }
      default: {
        return <BaseError />;
      }
    }
  }, [status]);
  return errorElement;
};

export default ErrorHandler;
