import { FC, useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import Button from "../../../shared/components/ui/Button"
import Input from "../../../shared/components/ui/Input"
import Textarea from "@/shared/components/ui/Textarea"

const ContactUsPage: FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    // TODO: connect to backend API or email service
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-[#25492D] mb-8 text-center">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* LEFT SECTION: Contact Info */}
        <div className="flex flex-col justify-start space-y-8">
          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="text-[#25492D] w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
              <p className="text-gray-600">Bahawalpur, Punjab, Pakistan</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="text-[#25492D] w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="text-[#25492D] w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-gray-600">support@nutricore.com</p>
            </div>
          </div>

          {/* Optional: Map placeholder */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.9500835516!2d71.6717125!3d29.3956943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abf9e7bdf3c1f%3A0xe1b938dc8c25c2ee!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1687161234567"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen={true}
              loading="lazy"
              title="NutriCore Location"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SECTION: Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-8 md:p-12 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1" onSubmit={handleSubmit}>
            <Input
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="md:col-span-2"
              required
            />
            <Input
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="md:col-span-2"
              required
            />
            <Input
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="md:col-span-2"
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="md:col-span-2 h-40"
              required
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="md:col-span-2 w-full bg-[#25492D] hover:bg-[#1f3b25] transition-colors mt-2"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
