
import { Categories } from "./Categories";
import { Footer } from "../../components/Footer";
import { HomeBanner } from "./Homebanner";
import { Navbar } from "../../components/navbar";

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <Categories />
            <Footer />
        </div>
    )
}