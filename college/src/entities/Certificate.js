// src/entities/Certificate.js

let certificates = [
  {
    id: 1,
    student_roll_no: "CS2025001",
    certificate_name: "Data Structures Excellence",
    certificate_type: "Academic",
    issued_by: "IIT Bombay",
    issue_date: "2024-05-20",
    description: "Awarded for outstanding performance in Data Structures.",
    file_url: "https://drive.google.com/file/d/1vG2cFI-FGjYU_qs9e4x7zpH2TsfOHww7/view?usp=sharing "
  },
  {
    id: 2,
    student_roll_no: "EE2025007",
    certificate_name: "National Robotics Contest",
    certificate_type: "Achievement",
    issued_by: "National Robotics Foundation",
    issue_date: "2023-11-10",
    description: "Secured 2nd place in the national robotics contest.",
    file_url: "https://drive.google.com/file/d/1l6h0LQHuw6R7pp1l7ZNtmisp_hRJXQKS/view?usp=sharing "
  },
  {
    id: 3,
    student_roll_no: "MD2025012",
    certificate_name: "Internship at Tata Motors",
    certificate_type: "Internship",
    issued_by: "Tata Motors",
    issue_date: "2021-07-01",
    description: "Completed a 2-month internship in automotive design.",
    file_url: "https://drive.google.com/file/d/1XNkmAwJIDGOhDXweZgzI2azSJM_h8N6V/view?usp=sharing "
  }
];

export const Certificate = {
  async list() {
    await new Promise(res => setTimeout(res, 200));
    return [...certificates];
  },

  async create(certificateData) {
    await new Promise(res => setTimeout(res, 200));
    const newCertificate = {
      id: certificates.length + 1,
      ...certificateData
    };
    certificates.push(newCertificate);
    return newCertificate;
  },

  async update(id, certificateData) {
    await new Promise(res => setTimeout(res, 200));
    const index = certificates.findIndex(c => c.id === id);
    if (index === -1) throw new Error("Certificate not found");
    certificates[index] = { ...certificates[index], ...certificateData };
    return certificates[index];
  },

  async get(id) {
    await new Promise(res => setTimeout(res, 200));
    return certificates.find(c => c.id === id);
  },

  async delete(id) {
    await new Promise(res => setTimeout(res, 200));
    certificates = certificates.filter(c => c.id !== id);
    return true;
  }
};
