const searchbtn = document.getElementById("searchbtn");
const resetbtn = document.getElementById("resetbtn");

async function getWeather() {
    try {
        let response = await fetch('https://api.weatherapi.com/v1/current.json?key=edabc4108584463a86552353242110&q=Pakistan&aqi=no')

        let newData = await response.json()
        console.log(newData);
        let cntry = newData.location.country;
        let cdtn = newData.current.condition.text;
        let temp = newData.current.temp_c;
        let time = newData.location.localtime;
        let icon = newData.current.condition.icon;
        let humidity = newData.current.humidity;

        
        searchbtn.addEventListener('click',()=> {
            document.getElementById('country').textContent = cntry;
            document.getElementById('time&date').textContent = time;
            document.getElementById('condtion').textContent = cdtn;
            document.getElementById('temp').textContent= temp;
            document.getElementById("humidity").textContent= humidity;      
        })

    } 
    catch (error) {
        console.log('Error', error);
    }
   
        
}
getWeather();

resetbtn.addEventListener('click',()=> {
    document.getElementById('country').textContent = "";
    document.getElementById('time&date').textContent = "";
    document.getElementById('condtion').textContent = "";
    document.getElementById('temp').textContent= "";
    document.getElementById("humidity").textContent= "";      
})
