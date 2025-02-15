import SignupButton from "../buttons/SignupButton";
import LogButton from "../buttons/LogButton";
import HomeButton from "../buttons/HomeButton";

const Navbar = () => {
    return (
        <nav className="z-50 flex h-20 px-8 no-wrap items-stretch min-w-full bg-primary shadow-md">
            <HomeButton />
            
            <div className="flex items-center ml-auto gap-4">
                <LogButton />
                <SignupButton />
            </div>
        </nav>
    );

};

export default Navbar;