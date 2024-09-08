'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send } from 'lucide-react'

const reasons = [
  "General",
  "Feedback",
  "Sale Item",
  "Private Class",
  "Other"
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xyzgvolj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        setHasError(false)
        form.reset()
      } else {
        console.error('Form submission failed')
        setHasError(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setHasError(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
      
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6" role="alert">
          <strong className="font-bold">Thank you!</strong>
          <span className="block sm:inline"> Your message has been sent successfully.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          {hasError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> There was an issue submitting your form. Please try again.</span>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              required
              className="block w-full shadow-sm border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a reason</option>
              {reasons.map((reason, index) => (
                <option key={index} value={reason}>{reason}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full shadow-sm border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="block w-full shadow-sm border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
