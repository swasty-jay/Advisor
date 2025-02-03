import { useState } from "react";

function Contact() {
  const [activeId, setActiveId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    } else if (/[^a-zA-Z0-9@._+-]/.test(formData.email)) {
      newErrors.email = "Email contains invalid characters";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (e.g., sending an email or API request)
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="bg-gray-50 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          Feel free to reach out. I'd love to hear from you!
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border-0.5 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
