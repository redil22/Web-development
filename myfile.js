
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var postalCode = document.getElementById('postalCode').value;
    var province = document.getElementById('province').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!firstName.trim()) {
        alert('First name is required.');
        return;
    }

    if (!lastName.trim()) {
        alert('Last name is required.');
        return;
    }

    if (!address.trim()) {
        alert('Address is required.');
        return;
    }

    if (!city.trim()) {
        alert('City is required.');
        return;
    }

    if (!/^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$/.test(postalCode)) {
        alert('Invalid postal code format. It should be in the format a0a0a0.');
        return;
    }
    if (!['QC', 'ON', 'MN', 'SK', 'AB', 'BC'].includes(province.toUpperCase())) {
        alert('Invalid province. Please enter one of QC, ON, MN, SK, AB, BC.');
        return;
    }
    if (parseInt(age) < 18) {
        alert('You must be at least 18 years old to register.');
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Invalid email format.');
        return;
    }
    if (password.length < 6 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        alert('Password must have at least 6 characters, including at least one digit and one upper-case character.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

});
    document.getElementById('clearButton').addEventListener('click', function() {
        document.getElementById('signupForm').reset();
    });


    async function fetchWeatherData() {
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fdb9cc3bc8msh481f0bdf1352236p10a7cdjsn597c1fd7e502',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    
        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Assuming the API returns JSON data
            console.log(result);
            displayWeather(result); // Function to display the weather data on the page
        } catch (error) {
            console.error(error);
        }
    }
    function displayWeather(data) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `Current Temperature: ${data.current.temp_c}°C <br>
                                 Condition: ${data.current.condition.text}`;
    }
    
    // Call the function
    fetchWeatherData();
    