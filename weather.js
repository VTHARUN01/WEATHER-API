const btnSearch = document.querySelector('#search')
const input = document.querySelector('input')
let body = document.querySelector('body');
let sun = document.querySelector(".sun");
sun.onclick = () => {
    body.classList.toggle("dark")
}

let value = ""
let i = 0
let j = 0
function card(obj, i) {
    let div1 = document.createElement('div')
    div1.id = `div${i}`
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    div2.setAttribute('class', 'card-image')
    div3.setAttribute('class', 'content')
    div1.setAttribute('class', 'card')
    div1.append(div2)
    div1.append(div3)
    let img = document.createElement('img')
    img.setAttribute('src', obj.current.weather_icons[0])
    let h2 = document.createElement('h2')
    h2.innerHTML = obj.current.weather_descriptions[0]
    let para1 = document.createElement('p')
    para1.innerHTML = `location:${obj.request.query}<br>
    lat:${obj.location.lat}<br>
    lon:${obj.location.lon}<br>
    localtime:${obj.location.localtime}<br>
    timezone_id:${obj.location.timezone_id}<br>
    temperature:${obj.current.temperature}C<br>
    wind-speed:${obj.current.wind_speed}m/s<br>
    wind-direction:${obj.current.wind_dir}<br>`
    div3.append(para1)
    div3.append(h2)
    div2.append(img)
    let section = document.querySelector('#data')
    section.append(div1)
}
btnSearch.addEventListener('click', async (e) => {

    e.preventDefault()
    try {

        const res = await axios.get(`http://api.weatherstack.com/current?access_key=780de4eb275bbd1afa6ad19b8d1c0f95&query=${input.value}`)
        await card(res.data, i)
        if (j === 1) {
            let div = document.querySelector(`#div${i - 1}`)
            div.remove()
        }
        j = 1
        i++
    }
    catch (e) {
        alert('SORRY MAXIMUM REQUEST HAS REACHED')
        console.log(e)
    }
})
