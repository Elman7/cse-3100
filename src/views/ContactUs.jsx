import { useState } from 'react';

export default function ContactUs() {
  // State to manage form data for name, email, and phone number
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handle input changes and update state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event object
    setFormData({ ...formData, [name]: value }); // Update only the changed field while preserving others
  };

  // Handle form submission and display a thank-you message
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page refresh)
    alert(`Thank you, ${formData.name}! We will contact you soon.`); // Simple alert as a confirmation message
  };

  return (
    <section className="text-center mt-4">
      {/* Section Title */}
      <h2>Contact Us</h2>
      <p>We’d love to hear from you!</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name Input Field */}
        <div className="mb-3">
          <input
            type="text"
            name="name" // Input field name matches state key
            value={formData.name} // Controlled input using state
            onChange={handleChange} // Update state on input change
            placeholder="Your Name" // Placeholder text for guidance
            className="form-control"
            required // Ensures the field is not left empty before submission
          />
        </div>

        {/* Email Input Field */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="form-control"
            required // HTML5 validation for email format
          />
        </div>

        {/* Phone Input Field */}
        <div className="mb-3">
          <input
            type="tel" // Specifies telephone number input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="form-control"
            required // Ensures phone number is provided
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
