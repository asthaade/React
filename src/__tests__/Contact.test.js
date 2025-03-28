import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Contact from '../components/Contact';

test("Should load Contact component", ()=>{
    render(<Contact/>)

    const heading = screen.getByPlaceholderText('name');

    expect(heading).toBeInTheDocument();
});

test("Should find input Box Contact component", ()=>{
    render(<Contact/>)

    const inputBox = screen.getAllByRole('textbox');

    expect(inputBox.length).not.toBe(3);
});