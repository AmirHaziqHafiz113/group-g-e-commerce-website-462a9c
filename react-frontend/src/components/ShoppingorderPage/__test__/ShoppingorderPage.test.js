import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppingorderPage from "../ShoppingorderPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppingorder page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppingorderPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppingorder-datatable")).toBeInTheDocument();
    expect(screen.getByRole("shoppingorder-add-button")).toBeInTheDocument();
});
