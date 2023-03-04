import { Center, SegmentedControl } from "@mantine/core";
import { IconGridDots, IconGridPattern, IconList } from "@tabler/icons-react";
import React from "react";

interface Props {}

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
      size="lg"
      styles={
        {
          label: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
          }
        }
      }
    />
  );
};

export default ViewTypeSegment;
