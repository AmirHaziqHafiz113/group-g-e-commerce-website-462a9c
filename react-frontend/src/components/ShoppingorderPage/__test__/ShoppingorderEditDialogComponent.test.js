import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppingorderEditDialogComponent from "../ShoppingorderEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppingorder edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppingorderEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppingorder-edit-dialog-component")).toBeInTheDocument();
});
