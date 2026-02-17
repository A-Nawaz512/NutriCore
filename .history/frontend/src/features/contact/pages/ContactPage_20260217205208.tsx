import { FC, useState } from "react"
import Button from "../../../shared/components/ui/Button"
import Input from "@/shared/components/ui/Input"
import Textarea from "@/shared/components/ui/Textarea"

const ContactUsPage: FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    // Later: integrate API or email service
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-[#25492D] mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-700 text-center mb-12 max-w-2xl">
        Have questions, feedback, or need assistance? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-8 md:p-12">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <Input
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="md:col-span-1"
          />
          <Input
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="md:col-span-1"
          />
          <Input
            placeholder="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="md:col-span-2"
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="md:col-span-2 h-40"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="md:col-span-2 w-full bg-[#25492D] hover:bg-[#1f3b25] transition-colors"
          >
            Send Message
          </Button>
        </form>
      </div>

      {/* Optional Contact Info Section */}
      <div className="mt-12 text-center text-gray-700 space-y-2">
        <p>Email: support@nutricore.com</p>
        <p>Phone: +92 300 1234567</p>
        <p>Address: Bahawalpur, Punjab, Pakistan</p>
      </div>
    </div>
  )
}

export default ContactUsPage
