
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const students = [
    
        {
          id: 1,
          fullName: "Ali Ahmedov",
          yearsOfEducation: 8,
          currentGrade: "A",
          educationField: "Matematika",
          age: 16,
        },
        {
          id: 2,
          fullName: "Ayşe Yılmaz",
          yearsOfEducation: 6,
          currentGrade: "B",
          educationField: "Fizik",
          age: 15,
        },
        {
          id: 3,
          fullName: "Mehmet Demir",
          yearsOfEducation: 5,
          currentGrade: "C",
          educationField: "Tarih",
          age: 14,
        },
        {
          id: 4,
          fullName: "Fatma Kaya",
          yearsOfEducation: 7,
          currentGrade: "A",
          educationField: "Kimya",
          age: 16,
        },
        {
          id: 5,
          fullName: "Ahmet Yıldız",
          yearsOfEducation: 4,
          currentGrade: "B",
          educationField: "Biyoloji",
          age: 15,
        },
        {
          id: 6,
          fullName: "Zeynep Aksoy",
          yearsOfEducation: 6,
          currentGrade: "A",
          educationField: "Coğrafya",
          age: 16,
        },
        {
          id: 7,
          fullName: "Mustafa Şahin",
          yearsOfEducation: 8,
          currentGrade: "C",
          educationField: "Matematika",
          age: 17,
        },
        {
          id: 8,
          fullName: "Emine Tekin",
          yearsOfEducation: 5,
          currentGrade: "B",
          educationField: "Fizik",
          age: 14,
        },
        {
          id: 9,
          fullName: "Aliye Aydın",
          yearsOfEducation: 7,
          currentGrade: "A",
          educationField: "Kimya",
          age: 16,
        },
        {
          id: 10,
          fullName: "Hüseyin Can",
          yearsOfEducation: 6,
          currentGrade: "C",
          educationField: "Tarih",
          age: 15,
        },
        {
          id: 11,
          fullName: "Serap Öztürk",
          yearsOfEducation: 5,
          currentGrade: "B",
          educationField: "Biyoloji",
          age: 14,
        },
        {
          id: 12,
          fullName: "Gökhan Avcı",
          yearsOfEducation: 7,
          currentGrade: "A",
          educationField: "Coğrafya",
          age: 16,
        },
        {
          id: 13,
          fullName: "Nilüfer Özdemir",
          yearsOfEducation: 8,
          currentGrade: "C",
          educationField: "Matematika",
          age: 17,
        },
        {
          id: 14,
          fullName: "Ömer Demirci",
          yearsOfEducation: 6,
          currentGrade: "B",
          educationField: "Fizik",
          age: 15,
        },
        {
          id: 15,
          fullName: "Aylin Korkmaz",
          yearsOfEducation: 7,
          currentGrade: "A",
          educationField: "Kimya",
          age: 16,
        },
      
  ];

  return (
    <UserContext.Provider value={students}>
      {children}
    </UserContext.Provider>
  );
};