'use client';

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useState } from "react";
import Modal from "./Modal";
import SignupForm from "./SignupForm";

const SignupButton = () => {
    const { data: session } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleSignupSucess = () => closeModal()

    if (session) return null;

    return (
        <div>
            <button onClick={openModal} className="bg-purplegrad border-purplegrad border-2 px-4 py-2 shadow-md rounded-full hover:bg-softpurplegrad">Sign Up</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <SignupForm onSignupSuccess={handleSignupSucess} />
            </Modal>
        </div>
    )
}

export default SignupButton;