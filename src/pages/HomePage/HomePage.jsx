
import { Categories } from "./Categories";
import { Footer } from "../../components/Footer";
import { HomeBanner } from "./Homebanner";

export const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <Categories />
            <Footer/>
        </div>
    )
}