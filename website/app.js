/* Global Variables */
const apiKey = '2eb40987d30ba9220dcbd73d8bf52b11&units=imperial';
let baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();



document.getElementById('generate').addEventListener('click', performAction);
function performAction() {
    const zipCode = document.getElementById('zip').value;
    const userReaction = document.getElementById('feelings').value;
    getResult(baseURL, zipCode, apiKey).then(function(data){
            // Add data
            console.log(data);
            // new Date(data.dt).toString()
            postData('/website/index.html', { temperature: data.main.temp, date: newDate, userResponse: userReaction });
            updateUI();
          })
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

const postData = async ( url = baseURL, data = {})=>{
    
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
             return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}


const updateUI = async() => {
const request = await fetch('/all')
try {
    const allData = await request.json()
    document.getElementById('temp').innerText = Math.round(allData[0].temperature) + ' degrees';
    document.getElementById('date').innerText = allData[0].date;
    document.getElementById('content').innerText = allData[0].userResponse;
}
catch (error){
    console.log("error", error);
}

}