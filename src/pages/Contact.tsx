
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-4">Contact <span className="text-gold">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss something remarkable together — portfolio projects, freelance work, and anything else you need for creating a difference.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="contact-input"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="bg-gold hover:bg-gold/90 text-dark"
              >
                Contact Me
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-400">Parnika Das, 42-A, Pretend Building, AnywhereStreet, Finland - 2100456</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+91 9893944444</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-400">parnikadas023@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-1">Website</h3>
                <p className="text-gray-400">www.pdas.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
