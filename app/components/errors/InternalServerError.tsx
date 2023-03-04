import BaseError from "./BaseError";

const InternalServerError = () => {
  return (
    <BaseError
      status={500}
      title="Internal Server Error."
      description={
        "There was an error processing your request. Please try again later."
      }
    />
  );
};

export default InternalServerError;
