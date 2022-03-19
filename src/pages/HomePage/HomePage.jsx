import react from "react";
import { Categories } from "./Categories";
import { Footer } from "../../components/Footer";
import { HomeBanner } from "./HomeBanner";

export const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <Categories />
            <Footer/>
        </div>
    )
}