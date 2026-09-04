"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";

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

const CareerForm = ({ jobTitle }) => {
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setFileName(e.target.files?.[0]?.name || "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "9ae99fce-f6f9-4a38-ab5b-7caafb88fce6",
                    subject: "New Career Application - Tandhan Group",
                    from_name: "Tandhan Group Careers",
                    ...data,
                }),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Application received! We'll reach out if there's a fit.");
                e.target.reset();
                setFileName("");
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-neutral-50 border border-primary/30 rounded-md lg:rounded-xl shadow-lg p-[1.1rem] sm:p-[1.2rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]"
        >

            <input type="hidden" name="Applying For" value={jobTitle || ""} />
            
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
                                px-[0.7rem] lg:px-[1rem] py-[0.7rem] sm:py-[0.8rem] lg:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[0.9rem] outline-none
                                focus:border-primary focus:shadow-[0.7px_0.7px_5px_rgba(0,0,0,0.1)] transition-colors
                            "
                        />
                    </div>
                ))}
            </div>

            {/* Resume Upload */}
            {/* <div className="mt-[1.2rem]">
                <label htmlFor="resume" className="block font-medium text-primary/80">
                    Upload Resume <span className="text-red-500">*</span>
                </label>

                <div className="mt-[0.5rem] flex items-center rounded-md border border-primary/30 bg-white overflow-hidden">
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="
                            shrink-0 bg-neutral-100 hover:bg-neutral-200 transition-colors 
                            px-[0.7rem] lg:px-[1rem] 
                            py-[0.7rem] sm:py-[0.9rem] lg:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[0.9rem]
                            font-medium border-r border-primary/30
                        "
                    >
                        Choose File
                    </button>
                    <span className="px-[0.7rem] lg:px-[1rem] text-primary/50 truncate">
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
            </div> */}

            <button
                type="submit"
                disabled={loading}
                className="
                    mt-[1.6rem] lg:mt-[1.8rem] bg-primary hover:bg-primary/90 disabled:opacity-60
                    text-white uppercase tracking-wide
                    px-[1.8rem] lg:px-[2.2rem] py-[0.7rem] sm:py-[0.8rem] lg:py-[0.7rem] xl:py-[0.75rem] 2xl:py-[0.8rem] rounded-md transition-colors
                "
            >
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
};

export default CareerForm;