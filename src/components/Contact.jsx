import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        // Validation
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length === 0) {
            // Submit form (e.g., POST request)
            console.log('Form data:', formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form onSubmit={handleSubmit} method='POST' action='https://getform.io/f/de927858-c4d4-4ab3-9850-22e8aec1c071' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9049e4] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or send me an email - diegoocallegari@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleInputChange} />
                {errors.name && <p className='text-red-500'>{errors.name}</p>}
                <input className='mt-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleInputChange} />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
                <textarea className='bg-[#ccd6f6] mt-4 p-2' name="message" rows="8" placeholder='Message' value={formData.message} onChange={handleInputChange}></textarea>
                {errors.message && <p className='text-red-500'>{errors.message}</p>}
                <button className='text-white border-2 hover:bg-[#9049e4] hover:border-[#9049e4] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    );
}

export default Contact;
