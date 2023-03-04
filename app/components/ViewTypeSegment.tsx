import { SegmentedControl } from "@mantine/core";
import { IconGridDots, IconList } from "@tabler/icons-react";
import React from "react";

interface Props {
  value: "grid" | "list";
  onChange: (value: "grid" | "list") => void;
}

const ViewTypeSegment: React.FC<Props> = (props) => {
  return (
    <SegmentedControl
      data={[
        {
          label: <IconGridDots size="1rem" />,
          value: "grid",
        },
        {
          label: <IconList size="1rem" />,
          value: "list",
        },
      ]}
      color="indigo"
      size="md"
      styles={{
        label: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      display={{
        base: "none",
        xs: "none",
        sm: "none",
        md: "flex",
        lg: "flex",
        xl: "flex",
      }}
      {...props}
    />
  );
};

export default ViewTypeSegment;
