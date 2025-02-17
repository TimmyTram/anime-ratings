import SignupButton from "../buttons/SignupButton";
import LogButton from "../buttons/LogButton";
import HomeButton from "../buttons/HomeButton";
import SearchButton from "../buttons/SearchButton";

const Navbar = () => {
    return (
        <nav className="z-50 flex h-20 px-8 no-wrap items-stretch min-w-full bg-primary shadow-md">
            <div className="flex items-center gap-4">
                <HomeButton />
                <SearchButton />
            </div>


            <div className="flex items-center ml-auto gap-4">
                <LogButton />
                <SignupButton />
            </div>
        </nav>
    );

};

export default Navbar;