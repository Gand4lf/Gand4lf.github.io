"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from '@emailjs/browser'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.send(
                'service_8nfa82b',
                'template_o82qngj', // Replace with your template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'georgejamescurtis@hotmail.co.uk',
                },
                'EzxfG_iznj5lk7SRB' // Replace with your public key
            )

            setFormData({ name: '', email: '', message: '' })
            alert('Message sent successfully!')
        } catch (error) {
            alert('Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
                Have a question or want to work together? Feel free to reach out!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name
                        </label>
                        <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="min-h-[150px]"
                        required
                    />
                </div>
                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </section>
    )
} 