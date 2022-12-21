import * as React from "react";
import Button from "@mui/material/Button";
import { Nav, Ol, OptionButton } from "./Styles";

export const List = ({ data = [], onSelect = () => null }) => {
  return (
    <Nav>
      <Ol>
        {data.map(({ id, name }, index) => (
          <Button
            component={"li"}
            textAlign="center"
            key={id}
            sx={OptionButton}
            variant="text"
            onClick={() => onSelect(data[index])}
          >
            {name}
          </Button>
        ))}
      </Ol>
    </Nav>
  );
};
