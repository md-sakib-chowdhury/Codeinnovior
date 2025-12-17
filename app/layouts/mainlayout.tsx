import { Outlet } from "react-router";
import Footer from "~/shared/footer";
import Navber from "~/shared/navber";

export default function mainlayout() {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />

        </div>
    );
}