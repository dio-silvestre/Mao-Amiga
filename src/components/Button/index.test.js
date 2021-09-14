import React from "react";
import Button from "./index";

import { render, waitFor, fireEvent } from "@testing-library/react";

describe("Test for Action register", () => {
  it("should check if the button runs right", async () => {
    //renderizar o componente
    const { getByTestId } = render(<Button />);

    //buscar o botao

    const btnNode = await waitFor(() => getByTestId("form-btn"));
    fireEvent.click(btnNode); //clicar no botao
  });
});
