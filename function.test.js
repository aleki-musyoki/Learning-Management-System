// const {getCourse, add } = require('./functions')
// const courses = [
//     {
//       "id": "APT3065",
//       "c_name": "Mid-term Project",
//       "description": "Students will undertake an individual ICT project in the early part of their third year."
//     },
//     {
//       "id": "APP4035",
//       "c_name": "Web Application Development Framework",
//       "description": "This course explores various architectural and design factors that have to be taken into consideration when building complex web applications."
//     },
//     {
//       "id": "APT3025",
//       "c_name": "Applied Machine Learning",
//       "description": "An introductory course that provides a practical overview of machine learning."
//     },
//     {
//       "id": "SFE4020",
//       "c_name": "Software Design and Architecture",
//       "description": "Software design and architecture encompasses the functional and the non-functional aspects of Software Engineering."
//     },
//     {
//       "id": "SFE4030",
//       "c_name": "Software Testing And Quality Assurance.",
//       "description": "This course provides an overview of methods of testing, verification and validation, quality assurance processes and techniques, methods and types of testing and ISO 9000/SEI CMM process evaluation."
//     },
//     {
//       "id": "APT3095",
//       "c_name": "Cloud Computing & Virtualization Course",
//       "description": "Students will learn the core concepts of cloud computing & Vitualization."
//     },
//     {
//       "id": "APT4900",
//       "c_name": "Final Year Project Course",
//       "description": "This is a course on program applications for the ICT Systems Developement."
//     },
//     {
//       "id": "PSY1101",
//       "c_name": "Introduction to Psychology",
//       "description": "Elsie Newa"
//     }
//   ]

// test('Getting courses', async ()=>{
//     expect(await getCourse()).toEqual(courses)
// })

test('2+3 =5',()=>{
    expect(add(2,3)).toBe(5)
})