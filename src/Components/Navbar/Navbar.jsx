import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { SlGlobe } from "react-icons/sl";
import { motion } from "framer-motion"

const Navbar = () => {
    const Navlinks =
        <>
            <ul className="flex gap-4 ml-4 text-base flex-col xl:flex-row">
                <li>Product</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Enterprise</li>
                <li>Pricing</li>
            </ul>
        </>
    const EndNavLinks =
        <>
            <ul className="xl:flex gap-4 mr-4 text-base hidden">
                <li className="flex items-center gap-1"><SlGlobe size={26} /> EN</li>
                <li>Contact Sales</li>
                <li>Login</li>
            </ul>
        </>
    return (
        <div className="navbar bg-base-100 xl:px-10 mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                        {EndNavLinks}
                    </ul>
                </div>
                <img src="https://i.ibb.co/K5F3WVk/Vector.png" className="w-[91px] h-[32px]" alt="" />
                <div className="hidden xl:flex">
                    {Navlinks}
                </div>
            </div>
            {/* <div className="navbar-center hidden xl:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div> */}
            <div className="navbar-end">
                {EndNavLinks}
                <motion.button onTap={{ scale: 0.95 }} onHoverStart={{ scale: 1.5 }} className="xl:px-6 xl:py-4 py-2 px-3 hover:scale-105  transition duration-300 bg-background rounded-full flex items-center gap-1 text-white font-medium">Sign Up Free <HiOutlineArrowLongRight /></motion.button>
            </div>
        </div>
    );
};

export default Navbar;