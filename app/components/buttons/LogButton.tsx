'use client';

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import Modal from "../ui/Modal";
import AuthFormHandler from "../auth/AuthFormHandler";

// handles both logging in and logging out
const LogButton = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // child component will call this function on successful login, close modal
    const handleSuccess = () => {
        closeModal();
    }

    const handleLogout = async () => {
        // must prevent the page reloading on signout or else we can't redirect to home
        const status = await signOut({ redirect: false });
        if (status) {
            toast.success('You have been logged out successfully!');
            // router.push('/');
        } else {
            toast.error('An error occurred while logging out. Please try again.');
        }
    }

    return (
        <div>
            {session ? (
                <button onClick={handleLogout} className="bg-angryred border-angryred border-2 px-4 py-2 shadow-md rounded-full hover:bg-softangryred">Logout</button>
            ) : (
                <div>
                    <button
                        onClick={openModal}
                        className="bg-complementary border-complementary border-2 px-4 py-2 shadow-md rounded-full hover:bg-softcomplementary"
                    >
                        Login
                    </button>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <AuthFormHandler onSuccess={handleSuccess} />
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default LogButton;