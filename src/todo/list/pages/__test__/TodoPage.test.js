import React from 'react';
import { render, fireEvent } from  "@testing-library/react";
import TodoPage from "../TodoPage"

it("Renders correctly", () => {
    const { queryByTestId } = render(<TodoPage />)
   expect( queryByTestId("decrement-limit-btn")).toBeTruthy()
   expect( queryByTestId("increment-limit-btn")).toBeTruthy()
})