

import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Faq = () => {
  const faqData = [
    {
      question: 'What information do participants need to provide when joining a medical camp',
      answer: 'Participants are required to provide basic information such as their name, contact details, and any specific medical conditions or concerns they may have. This information helps organizers and medical professionals better prepare for the camp and provide personalized assistance.',
    },
    {
      question: 'How can I create a medical camp as an organizer?',
      answer: 'To create a medical camp, navigate to the organizer dashboard and click on the "Create Camp" button. Fill in the required details such as camp name, date, time, location, and other relevant information. Once submitted, your medical camp will be listed, and participants and professionals can join.',
    },
    {
      question: 'How can healthcare professionals join a medical camp?',
      answer: 'Healthcare professionals interested in joining a medical camp can register on our platform as professionals. Once registered, they can browse the list of upcoming medical camps and choose to join those aligned with their expertise. During registration, professionals may be asked to provide details about their specialization, contact information, and any specific requirements for the camp.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-20 mb-16 px-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Frequently Asked Questions</h1>
      <div className="grid gap-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <h2
                className="text-xl font-semibold mb-2 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </h2>
              {openIndex === index ? <FaAngleUp className=' cursor-pointer' onClick={() => handleToggle(index)} /> : <FaAngleDown className=' cursor-pointer' onClick={() => handleToggle(index)} />}
            </div>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

