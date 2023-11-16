import React from 'react';

import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
}