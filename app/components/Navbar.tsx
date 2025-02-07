'use client';

import LogButton from "./LogButton";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import { useState } from "react";


const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleLoginSucess = () => {
        closeModal();
    }

    return (
        <nav className="z-50 flex h-20 px-8 no-wrap items-stretch min-w-full bg-primary shadow-md">
            <div className="flex items-center text-white">
                Home
            </div>
            
            <div className="flex items-center ml-auto">
                <LogButton />
            </div>
        </nav>
    );

};

export default Navbar;