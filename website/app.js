/* Global Variables */
const apiKey = '2eb40987d30ba9220dcbd73d8bf52b11&units=imperial';
let baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();



document.getElementById('generate').addEventListener('click', performAction);
function performAction() {
    const zipCode = document.getElementById('zip').value;
    getResult(baseURL, zipCode, apiKey)
}


const getResult = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL + '?zip=' + zipCode + '&appid=' + apiKey)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
    }
}