import React, { useContext } from 'react';;
import successImage from '../../assets/images/Group.png'

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-80 shadow-lg text-center">
                <img className='mx-auto' src={successImage} alt="" />
                <h2 className="text-2xl font-semibold my-3"> Payment Successful </h2>
                <p className="text-gray-600 mb-6">You have made a Purchase.</p>

                <button
                    onClick={onClose}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-8 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Home
                </button>
            </div>
        </div>

    );
};

export default Modal;