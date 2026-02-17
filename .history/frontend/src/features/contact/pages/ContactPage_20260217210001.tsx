import { FC, useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import Button from "../../../shared/components/ui/Button"
import Input from "../../../shared/components/ui/Input"
import Textarea from "../../../shared/components/ui/Textarea"

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
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-[#25492D] mb-12 text-center">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* LEFT SECTION: Info + Map */}
        <div className="flex flex-col justify-start space-y-8 bg-green-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#25492D] mb-6">Get in Touch</h2>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#25492D] mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
              <p className="text-gray-600">123 NutriCore Street, Bahawalpur, Punjab, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-[#25492D] mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#25492D] mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-gray-600">support@nutricore.com</p>
            </div>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.9500835516!2d71.6717125!3d29.3956943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abf9e7bdf3c1f%3A0xe1b938dc8c25c2ee!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1687161234567"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="NutriCore Location"
            />
          </div>
        </div>

        {/* RIGHT SECTION: Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-8 md:p-12 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="grid grid-cols-1 gap-4 flex-1" onSubmit={handleSubmit}>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                👤
              </span>
              <Input
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                📞
              </span>
              <Input
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                ✉️
              </span>
              <Input
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">💬</span>
              <Textarea
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="pl-10 pt-3 h-40"
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#25492D] hover:bg-[#1f3b25] transition-colors mt-4"
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
