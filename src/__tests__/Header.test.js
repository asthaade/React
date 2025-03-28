import '@testing-library/dom';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import Header from '../components/Header';

it('Should load header with a login button ', ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
})