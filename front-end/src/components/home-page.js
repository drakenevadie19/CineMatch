import HeaderComponent from "./header";
import MovieContainer from "../container/moviesContainers";
import AddMovie from "./add-movie";
import FooterComponent from "./footer";

const HomePage = () => {
    return (
        <>
            <HeaderComponent />
            <MovieContainer />
            <AddMovie />
            <FooterComponent />
        </>
    )
}

export default HomePage;