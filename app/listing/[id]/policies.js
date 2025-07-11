import React from "react";

export default function PoliciesSection() {
    return (
        <div className="bg-white p-4 my-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Policies</h3>
            <div className="w-6 h-1 bg-orange-500 mt-1 mb-4 rounded" />

            {/* Policy 1 */}
            <div className="bg-gray-50 p-4 rounded-md flex justify-between items-start mb-3">
                <div>
                    <h4 className="font-semibold">Cancellation Charges</h4>
                    <p className="text-sm text-gray-600">
                        Cancellation charges will be applied as per the policy
                    </p>
                </div>
                <button className="text-sm font-semibold text-gray-800 hover:text-blue-600">
                    Know More
                </button>
            </div>

            {/* Policy 2 */}
            <div className="bg-gray-50 p-4 rounded-md flex justify-between items-start">
                <div>
                    <h4 className="font-semibold">Policy</h4>
                    <p className="text-sm text-gray-600">
                        I hereby agree to the terms and conditions of the Lease Agreement with Host
                    </p>
                </div>
                <button className="text-sm font-semibold text-gray-800 hover:text-blue-600">
                    View Details
                </button>
            </div>
        </div>
    );
}
