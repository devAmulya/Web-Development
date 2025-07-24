const students = [
  { name: "Moin Baig", marks: 90, class: "9th", address: "Hyderabad" },
  { name: "Liam Anderson", marks: 73, class: "9th", address: "Texas" },
  { name: "Xander Reed", marks: 74, class: "10th", address: "California" },
  { name: "Nasir Ahmed", marks: 54, class: "10th", address: "Bangalore" },
  { name: "Junaid Khan", marks: 58, class: "9th", address: "Mumbai" },
  { name: "Kabir Desai", marks: 69, class: "11th", address: "Chennai" },
  { name: "Ritika Ghosh", marks: 80, class: "11th", address: "Pune" },
  { name: "Nandini Tyagi", marks: 87, class: "11th", address: "Delhi" },
  { name: "Charlie Brown", marks: 86, class: "11th", address: "Illinois" },
  { name: "Nandini Tyagi", marks: 77, class: "11th", address: "Lucknow" },
  { name: "Diya Singh", marks: 95, class: "10th", address: "Kolkata" },
  { name: "Vivaan Patel", marks: 52, class: "11th", address: "Pune" },
  { name: "Ishaan Mehta", marks: 66, class: "9th", address: "Jaipur" },
  { name: "Rahul Kapoor", marks: 89, class: "11th", address: "Mumbai" },
  { name: "Sameer Malik", marks: 81, class: "12th", address: "Pune" },
  { name: "Xander Reed", marks: 82, class: "12th", address: "Arizona" },
  { name: "Nina King", marks: 69, class: "9th", address: "Nevada" },
  { name: "Sophia Hall", marks: 93, class: "11th", address: "Washington" },
  { name: "Nandini Tyagi", marks: 84, class: "9th", address: "Jaipur" },
  { name: "Nasir Ahmed", marks: 87, class: "9th", address: "Jaipur" },
  { name: "Uday Shetty", marks: 93, class: "9th", address: "Chennai" },
  { name: "Saif Shaikh", marks: 99, class: "12th", address: "Jaipur" },
  { name: "Harshit Tiwari", marks: 51, class: "12th", address: "Pune" },
  { name: "George Miller", marks: 58, class: "10th", address: "California" },
  { name: "Ethan Hunt", marks: 78, class: "9th", address: "Ohio" },
  { name: "Ritika Ghosh", marks: 56, class: "10th", address: "Ahmedabad" },
  { name: "Harshit Tiwari", marks: 83, class: "12th", address: "Delhi" },
  { name: "Naman Goel", marks: 87, class: "9th", address: "Pune" },
  { name: "Kavya Shah", marks: 61, class: "12th", address: "Pune" },
  { name: "Zack Morris", marks: 68, class: "11th", address: "Illinois" },
  { name: "Yvonne Green", marks: 52, class: "12th", address: "Massachusetts" },
  { name: "Rayyan Mir", marks: 88, class: "11th", address: "Kolkata" },
  { name: "Tarun Sharma", marks: 96, class: "9th", address: "Hyderabad" },
  { name: "Ritika Ghosh", marks: 88, class: "11th", address: "Delhi" },
  { name: "Rayyan Mir", marks: 89, class: "11th", address: "Mumbai" },
  { name: "Diya Singh", marks: 66, class: "9th", address: "Lucknow" },
  { name: "Ishaan Mehta", marks: 82, class: "10th", address: "Lucknow" },
  { name: "Wendy Brooks", marks: 83, class: "11th", address: "Arizona" },
  { name: "Farhan Qureshi", marks: 68, class: "12th", address: "Kolkata" },
  { name: "Yvonne Green", marks: 74, class: "12th", address: "New York" },
  { name: "Zack Morris", marks: 66, class: "11th", address: "Ohio" },
  { name: "Riya Das", marks: 64, class: "11th", address: "Lucknow" },
  { name: "Uma Nelson", marks: 76, class: "12th", address: "Washington" },
  { name: "Rehan Ali", marks: 94, class: "9th", address: "Hyderabad" },
  { name: "Tarun Sharma", marks: 80, class: "12th", address: "Chennai" },
  { name: "Sneha Joshi", marks: 62, class: "10th", address: "Delhi" },
  { name: "Kabir Desai", marks: 53, class: "11th", address: "Chennai" },
  { name: "Ishaan Mehta", marks: 70, class: "11th", address: "Kolkata" },
  { name: "Aditya Verma", marks: 83, class: "10th", address: "Hyderabad" },
  { name: "Rehan Ali", marks: 82, class: "11th", address: "Bangalore" },
  { name: "Yash Tripathi", marks: 92, class: "12th", address: "Kolkata" },
  { name: "Neha Chawla", marks: 55, class: "10th", address: "Kolkata" },
  { name: "Zaid Khan", marks: 70, class: "11th", address: "Delhi" },
  { name: "Nina King", marks: 89, class: "11th", address: "Florida" },
  { name: "Sneha Joshi", marks: 99, class: "11th", address: "Jaipur" },
  { name: "Chirag Meena", marks: 56, class: "10th", address: "Chennai" },
  { name: "George Miller", marks: 64, class: "9th", address: "Florida" },
  { name: "Noah Martin", marks: 96, class: "11th", address: "Ohio" },
  { name: "Yusuf Khan", marks: 79, class: "9th", address: "Pune" },
  { name: "Liam Anderson", marks: 87, class: "9th", address: "Nevada" },
  { name: "Paul Walker", marks: 83, class: "11th", address: "Nevada" },
  { name: "Paul Walker", marks: 91, class: "12th", address: "Illinois" },
  { name: "Kevin Moore", marks: 99, class: "9th", address: "Nevada" },
  { name: "Ritika Ghosh", marks: 89, class: "9th", address: "Pune" },
  { name: "Lakshmi Menon", marks: 60, class: "12th", address: "Mumbai" },
  { name: "Hannah Lee", marks: 76, class: "9th", address: "Massachusetts" },
  { name: "Ayaan Farooqui", marks: 100, class: "9th", address: "Kolkata" },
  { name: "Meera Kulkarni", marks: 56, class: "11th", address: "Ahmedabad" },
  { name: "Rahul Kapoor", marks: 78, class: "11th", address: "Bangalore" },
  { name: "Abhay Dubey", marks: 72, class: "12th", address: "Pune" },
  { name: "Arjun Rao", marks: 56, class: "12th", address: "Lucknow" },
  { name: "Vivaan Patel", marks: 87, class: "11th", address: "Pune" },
  { name: "Meera Kulkarni", marks: 72, class: "10th", address: "Delhi" },
  { name: "Ian Clark", marks: 57, class: "10th", address: "Washington" },
  { name: "Aisha Khan", marks: 74, class: "9th", address: "Hyderabad" },
  { name: "Meera Kulkarni", marks: 98, class: "12th", address: "Lucknow" },
  { name: "Shruti Agarwal", marks: 87, class: "9th", address: "Ahmedabad" },
  { name: "Priya Nair", marks: 90, class: "10th", address: "Chennai" },
  { name: "Simran Saluja", marks: 72, class: "11th", address: "Kolkata" },
  { name: "Ananya Iyer", marks: 78, class: "10th", address: "Hyderabad" },
  { name: "Moin Baig", marks: 52, class: "12th", address: "Pune" },
  { name: "Varun Vohra", marks: 62, class: "9th", address: "Bangalore" },
  { name: "Naman Goel", marks: 58, class: "10th", address: "Pune" },
  { name: "Nikhil Mishra", marks: 77, class: "12th", address: "Jaipur" },
  { name: "Arshad Qadri", marks: 52, class: "9th", address: "Jaipur" },
  { name: "Ali Raza", marks: 60, class: "12th", address: "Hyderabad" },
  { name: "Samar Khan", marks: 99, class: "10th", address: "Ahmedabad" },
  { name: "Oscar White", marks: 82, class: "12th", address: "Illinois" },
  { name: "Sneha Joshi", marks: 89, class: "10th", address: "Chennai" },
  { name: "Riya Das", marks: 61, class: "12th", address: "Bangalore" },
  { name: "Ayush Taneja", marks: 54, class: "9th", address: "Ahmedabad" },
  { name: "Preeti Bansal", marks: 54, class: "9th", address: "Kolkata" },
  { name: "Liam Anderson", marks: 86, class: "11th", address: "Arizona" },
  { name: "Vivaan Patel", marks: 79, class: "11th", address: "Mumbai" },
  { name: "Lakshmi Menon", marks: 52, class: "11th", address: "Jaipur" },
  { name: "Tom Harris", marks: 84, class: "9th", address: "Texas" },
  { name: "Laura Scott", marks: 79, class: "9th", address: "Washington" },
  { name: "Ethan Hunt", marks: 63, class: "9th", address: "Texas" },
  { name: "Yvonne Green", marks: 51, class: "12th", address: "Nevada" },
  { name: "Noah Martin", marks: 87, class: "9th", address: "Massachusetts" },
];

const searchInput = document.getElementById("search-text");
const cardsContainer = document.getElementById("cards-container");
const template = document.getElementById("student-card-template");

// Render function using map
function renderCards(data) {
  cardsContainer.innerHTML = ""; // Clear old content

  data.map(student => {
    const card = template.content.cloneNode(true);
    card.querySelector(".student-name").textContent = student.name;
    card.querySelector(".student-marks").textContent = student.marks;
    card.querySelector(".student-class").textContent = student.class;
    card.querySelector(".student-address").textContent = student.address;

    cardsContainer.appendChild(card);
  });
}

// Filter function triggered on input
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm)
  );
  renderCards(filteredStudents);
});

// Initial load
renderCards(students);
