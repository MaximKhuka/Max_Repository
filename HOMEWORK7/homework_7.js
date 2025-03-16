// *** task1 ***

let openTab1 = window.open("", "", "width=300, height=300, top=100, left=100");

setTimeout (function changeSize() {
    openTab1.resizeTo(width=500, height=500);
}, 2000);

setTimeout (function moveIt() {
    openTab1.moveTo(top=500, left=500);
}, 4000);

setTimeout (function closeMe() {
    openTab1.close();
}, 6000);

changeSize();
moveIt();
closeMe()





// *** task2 ***

let myText = document.querySelector("p")
let myButton = document.querySelector("button");

myButton.onclick = function changeCSS() {
    myText.style.color = "orange";
    myText.style.fontSize = "20px";
    myText.style.fontFamily = "Comic Sans MS";
}





// *** task3 ***

document.body.innerHTML = `
<body>
    <div>
        <button . . . . . >Click to make the page blue.</button>
        <button . . . . . >Double-click to make the page pink.</button>
        <button . . . . . >Click and hold to make the page brown.</button>
        <a href="url">Hover over to make the page yellow.</a>
    </div>
</body>
`;

let divo = document.querySelector("div");
let bodo = document.querySelector("body");

let b1 = divo.children[0];
b1.addEventListener("click", function() {
    bodo.style.backgroundColor = "blue";
});

let b2 = divo.children[1];
b2.addEventListener("dblclick", function() {
    bodo.style.backgroundColor = "pink";
});

let b3 = divo.children[2];
b3.addEventListener("mousedown", function() {
    bodo.style.backgroundColor = "brown";
});

let b4 = divo.children[2];
b4.addEventListener("mouseup", function() {
    bodo.style.backgroundColor = "white";
});

let b5 = divo.children[3];
b5.addEventListener("mouseover", function() {
    bodo.style.backgroundColor = "yellow";
});

let b6 = divo.children[3];
b6.addEventListener("mouseout", function() {
    bodo.style.backgroundColor = "white";
});





// *** task4 ***

document.body.innerHTML = `
<dody>
    <div>
        <select id="cars">
        <option value="porsche">Porsche</option>
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
        <button onclick="myFun()">Choose and delete</button>
    </div>
</dody>
`;
function myFun() {
  let c = document.getElementById("cars");
  c.remove(c.selectedIndex);
}





// *** task5 ***

document.body.innerHTML = `
    <body>
        <div>
            <button>Live button!</button>
        </div>
    </body>
`;

let di = document.querySelector("div");
let bod = document.querySelector("body");

let b1 = di.children[0];

b1.addEventListener("click", function() {
    bod.insertAdjacentHTML("beforeend","<p>I was pressed!</p>");
});

b1.addEventListener("mouseover", function() {
    bod.insertAdjacentHTML("beforeend","<p>Mouse on me!</p>");
});

b1.addEventListener("mouseout", function() {
    bod.insertAdjacentHTML("beforeend","<p>Mouse is not on me!</p>");
});





// *** task6 ***

let wi = window.innerHeight;
let hei = window.innerWidth;

document.write(`Width: ${wi}, Height: ${hei}`);





// *** task7 ***

document.body.innerHTML = `
<body>
    <select id="country">
        <option value="Ukraine">Ukraine</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
    </select>

    <select id="city"></select>

    <div>
        <h1 id="select-country"></h1>
        <h1 id="select-city"></h1>
    </div>
</body>
`;

let cityUkr = ['Rivne', 'Kyiv', 'Lviv'];
let cityUsa = ['New York', 'Boston', 'Chicago'];
let cityGer = ['Berlin', 'Munich', 'Dresden'];
  
let countryDropD = document.getElementById('country');
let cityDropD = document.getElementById('city');
let selectCountry = document.getElementById('select-country');
let selectCity = document.getElementById('select-city');

function populateCityDropD(selectCountryValue) {
    let city;
  
    switch(selectCountryValue) {
        case 'Ukraine':
            city = cityUkr;
            break;
        case 'USA':
            city = cityUsa;
            break;
        case 'Germany':
            city = cityGer;
            break;
        default:
            city = [];
    }
  
    cityDropD.innerHTML = '';
  
    city.forEach(function(city) {
        let option = document.createElement('option');
        option.text = city;
        cityDropD.add(option);
    });
  
    selectCountry.textContent = selectCountryValue;
    cityDropD.selectedIndex = 0;
    let selectCityValue = cityDropD.value;
    selectCity.textContent = selectCityValue;
}
  
countryDropD.addEventListener('change', function() {
    let selectCountryValue = countryDropD.value;
    populateCityDropD(selectCountryValue);
});
  
cityDropD.addEventListener('change', function() {
    let selectCityValue = cityDropD.value;
    selectCity.textContent = selectCityValue;
});
  
countryDropD.value = 'Ukraine';
populateCityDropD('Ukraine');
