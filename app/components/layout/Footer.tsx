import GitHubIcon from "../icons/GitHub.icon";
import LinkedInIcon from "../icons/LinkedIn.icon";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-primary text-white flex items-stretch p-4">

                <div className="flex flex-row gap-2">
                    <div className="text-center mr-auto font-bold pl-4">
                        © 2025 by Timmy Tram
                    </div>
                    <a href="https://github.com/TimmyTram">
                        <GitHubIcon size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/timmytram/">
                        <LinkedInIcon size={25} />
                    </a>
                </div>
                
                <div className="text-center ml-auto font-bold pr-4">
                    Powered by
                    <a
                        className="text-white font-bold underline mx-2"
                        href="https://jikan.moe/">
                        Jikan API
                    </a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;