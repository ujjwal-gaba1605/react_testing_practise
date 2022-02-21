import {BrowserRouter} from "react-router-dom";
import Footer from "./Footer";
import {render,screen} from "@testing-library/react";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <Footer
                numberOfIncompleteTasks={numberOfIncompleteTasks}
            />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
    it('should render the correct amount of incomplete tasks', () => {
        render(
            <MockTodoFooter
                numberOfIncompleteTasks={5}
            />
        );
        const pElement = screen.getByText(/5 tasks left/i);
        expect(pElement).toBeInTheDocument();
    });

    it('should render "task" when the number of incomplete tasks is one', () => {
        render(
            <MockTodoFooter
                numberOfIncompleteTasks={1}
            />
        );
        const pElement = screen.getByText(/1 task left/i);
        expect(pElement).toBeInTheDocument();
    });
})