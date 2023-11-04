import React from 'react'

export default function Error() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow animate__animated animate__fadeIn">
                    <h1 className="text-4xl text-red-600 mb-4">Oops! Something Went Wrong</h1>
                    <p className="text-gray-600">
                        We apologize for the inconvenience. An error has occurred. Please try again later or contact our support team for assistance.
                    </p>
                </div>
            </div>
        </div>
    )
}
