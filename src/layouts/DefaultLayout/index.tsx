import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Layoutocntainer } from "./styles";

export function DefaultLayout() {
    return (
        <Layoutocntainer>
            <Header />
            <Outlet />
        </Layoutocntainer>
    )
}