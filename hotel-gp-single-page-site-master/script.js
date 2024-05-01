import { initializeDatabase } from './database.js';
import SQL from 'sql.js'; 

// Initialize the database
var db = initializeDatabase();

const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

function redirectToLoginPage() {
    // Redirect to the login page
    window.location.href = "login.html"; // Replace "login.html" with the actual path to your login page
}
function redirectToSignupPage() {
    // Redirect to the login page
    window.location.href = "signup.html"; // Replace "login.html" with the actual path to your login page hh
}

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    const handleBooking = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Get form input values
        const checkInDate = document.getElementById('checkin-date').value;
        const checkOutDate = document.getElementById('checkout-date').value;
        const adults = document.getElementById('adult').value;
        const children = document.getElementById('children').value;
        const rooms = document.getElementById('rooms').value;

        // Create a data object to send to the backend
        const data = {
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            adults: adults,
            children: children,
            rooms: rooms
        };

        // Send a POST request to the backend endpoint to handle the booking
        fetch('/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                // If booking is successful, redirect to the account page or any other page you want
                window.location.href = '/account';
            } else {
                // If there's an error, display an alert or handle it accordingly
                alert('Booking failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Booking failed. Please try again.');
        });
    };

    // Add event listener to the form for form submission
    const bookForm = document.querySelector('.book-form');
    if (bookForm) {
        bookForm.addEventListener('submit', handleBooking);
    }
});
