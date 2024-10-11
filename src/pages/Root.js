import { Outlet } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function RootLayout() {
    return (
        <>
            <Header />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout;