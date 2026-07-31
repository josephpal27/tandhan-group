"use client";

import { useRef, useState } from "react";

const fields = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "phone", label: "Phone No.", type: "tel" },
    { name: "email", label: "Email", type: "email" },
    { name: "organization", label: "Current Organization", type: "text" },
    { name: "industry", label: "Current Industry", type: "text" },
    { name: "experience", label: "Experience", type: "text" },
    { name: "currentCtc", label: "Current CTC", type: "text" },
    { name: "expectedCtc", label: "Expected CTC", type: "text" },
    { name: "noticePeriod", label: "Notice Period (In Days)", type: "number" },
];

const CareerForm = () => {
    const [fileName, setFileName] = useState("");
    const [status, setStatus] = useState("idle"); // idle | submitting | success
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setFileName(e.target.files?.[0]?.name || "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.target);
        // wire this up to your API route / email service
        console.log(Object.fromEntries(formData));

        setStatus("success");
    };

    if (status === "success") {
        return (
            <div className="bg-neutral-50 border border-primary/15 rounded-xl p-[2rem] lg:p-[2.5rem] text-center">
                <p className="text-[1.1rem] font-medium">Application received successfully.</p>
                <p className="mt-[0.4rem] text-black/60 text-sm">
                    Thanks for applying - our team will reach out if there's a fit.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-neutral-50 border border-primary/30 rounded-xl shadow-lg p-[1rem] sm:p-[1.5rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[1.5rem] gap-y-[1.2rem]">
                {fields.map((field) => (
                    <div key={field.name}>
                        <label
                            htmlFor={field.name}
                            className="block font-medium text-primary/80"
                        >
                            {field.label} <span className="text-red-500">*</span>
                        </label>
                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            required
                            className="
                                mt-[0.5rem] w-full rounded-md border border-primary/30 bg-white
                                px-[1rem] py-[0.8rem] sm:py-[0.9rem] lg:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[0.9rem] outline-none
                                focus:border-primary focus:shadow-[0.7px_0.7px_5px_rgba(0,0,0,0.1)] transition-colors
                            "
                        />
                    </div>
                ))}
            </div>

            {/* Resume Upload */}
            <div className="mt-[1.2rem]">
                <label htmlFor="resume" className="block font-medium text-primary/80">
                    Upload Resume <span className="text-red-500">*</span>
                </label>

                <div className="mt-[0.5rem] flex items-center rounded-md border border-primary/30 bg-white overflow-hidden">
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="
                            shrink-0 bg-neutral-100 hover:bg-neutral-200 transition-colors 
                            px-[1rem] 
                            py-[0.7rem] sm:py-[0.9rem] lg:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[0.9rem]
                            font-medium border-r border-primary/30
                        "
                    >
                        Choose File
                    </button>
                    <span className="px-[1rem] text-primary/50 truncate">
                        {fileName || "No file chosen"}
                    </span>
                </div>

                <input
                    ref={fileInputRef}
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="
                    mt-[1.8rem] bg-primary hover:bg-primary/90 disabled:opacity-60
                    text-white uppercase tracking-wide
                    px-[2.2rem] py-[0.8rem] sm:py-[0.9rem] lg:py-[0.7rem] xl:py-[0.75rem] 2xl:py-[0.8rem] rounded-md transition-colors
                "
            >
                {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
};

export default CareerForm;