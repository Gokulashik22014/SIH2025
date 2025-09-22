// src/entities/Student.js

let students = [
  {
    id: 1,
    roll_no: "CS2025001",
    name: "Balamurugan R",
    email: "aarav.kumar@example.com",
    phone: "+91-9876543210",
    department: "Computer Science and Design",
    year: "2nd Year",
    admission_date: "2023-08-01",
    address: "12, MG Road, Bangalore, Karnataka",
    guardian_name: "Rajesh Kumar",
    guardian_phone: "+91-9811122233",
    status: "Active"
  },
  {
    id: 2,
    roll_no: "EE2025007",
    name: "Shyam",
    email: "priya.sharma@example.com",
    phone: "+91-9123456780",
    department: "Electrical Engineering",
    year: "3rd Year",
    admission_date: "2022-07-15",
    address: "45, Nehru Street, Pune, Maharashtra",
    guardian_name: "Sunita Sharma",
    guardian_phone: "+91-9009988776",
    status: "Active"
  },
  {
    id: 3,
    roll_no: "MD2025012",
    name: "Harini S",
    email: "rohan.verma@example.com",
    phone: "+91-9765432109",
    department: "Computer Science and Design",
    year: "Graduate",
    admission_date: "2019-06-20",
    address: "89, Park Avenue, Chennai, Tamil Nadu",
    guardian_name: "Vikram Verma",
    guardian_phone: "+91-9898989898",
    status: "Graduated"
  }
];

export const Student = {
  async list(orderBy = null) {
    // simulate API delay
    await new Promise(res => setTimeout(res, 200));

    let result = [...students];
    if (orderBy === "-created_date") {
      // newest first, assuming higher id = newer
      result.sort((a, b) => b.id - a.id);
    }
    return result;
  },

  async create(studentData) {
    await new Promise(res => setTimeout(res, 200));

    const newStudent = {
      id: students.length + 1,
      ...studentData,
      status: studentData.status || "Active"
    };
    students.push(newStudent);
    return newStudent;
  },

  async update(id, studentData) {
    await new Promise(res => setTimeout(res, 200));

    const index = students.findIndex(s => s.id === id);
    if (index === -1) throw new Error("Student not found");

    students[index] = { ...students[index], ...studentData };
    return students[index];
  },

  async get(id) {
    await new Promise(res => setTimeout(res, 200));
    return students.find(s => s.id === id);
  },

  async delete(id) {
    await new Promise(res => setTimeout(res, 200));
    students = students.filter(s => s.id !== id);
    return true;
  }
};
