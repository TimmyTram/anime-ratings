'use client';

import { useSession } from "next-auth/react";
import { useState } from "react";
import Modal from "./Modal";
import AuthFormHandler from "./AuthFormHandler";

const SignupButton = () => {
    const { data: session } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // child component will call this function on successful signup, close modal
    const handleSuccess = () => {
        closeModal();
    }

    if (session) return null;

    return (
        <div>
            <button onClick={openModal} className="bg-purplegrad border-purplegrad border-2 px-4 py-2 shadow-md rounded-full hover:bg-softpurplegrad">Sign Up</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AuthFormHandler onSuccess={handleSuccess} defaultToSignup={true} />
            </Modal>
        </div>
    )
}

export default SignupButton;