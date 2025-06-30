import { useState } from "react";

export function DescriptionSection() {
    const [expanded, setExpanded] = useState(false);
    const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`;

    return (
        <div className="bg-white rounded-xl p-5 shadow mb-4">
            <h3 className="text-lg font-bold mb-3">Description of Listing</h3>
            <p className="text-sm text-gray-700">
                {expanded ? text.repeat(3) : text}
            </p>
            <button
                className="mt-2 text-teal-600 font-semibold text-sm underline"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}
