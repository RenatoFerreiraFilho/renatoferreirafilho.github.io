import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("https://portfolio-api-bf2n.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setResponseMessage("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setResponseMessage(result.error || "Something went wrong.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error sending message:", error.message);
            } else {
                console.error("An unknown error occurred");
            }

            setResponseMessage("Error sending message. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="py-16 bg-gray-900 text-white text-center">
            <h3 className="text-4xl font-bold mb-6">Contact Me</h3>
            <p className="text-gray-300 mb-6">Feel free to reach out via email or through the form below.</p>

            <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="p-3 bg-gray-700 rounded text-white placeholder-gray-400" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-3 bg-gray-700 rounded text-white placeholder-gray-400"
                    />
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="p-3 bg-gray-700 rounded text-white placeholder-gray-400"
                    />

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 cursor-pointer" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {responseMessage && <p className="mt-4 text-green-400">{responseMessage}</p>}
            </div>
        </section>
    );
}
