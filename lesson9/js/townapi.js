const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
    //console.log(response);
    return response.json();
})
    .then(function(jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('div');
                /**------------Additions after TA meeting-------------*/
                let innersection1 = document.createElement('div');
                /**---------------------------------------------------*/

                let h2 = document.createElement('h2');
                let img = document.createElement('img');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let pop = document.createElement('p');
                let rainfall = document.createElement('p');

                /**------------Additions after TA meeting-------------*/
                let innersection2 = document.createElement('div');
                /**---------------------------------------------------*/

                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Founded: " + towns[i].yearFounded;
                pop.textContent = "Population: " + towns[i].currentPopulation;
                rainfall.textContent= "Rainfall: " + towns[i].averageRainfall;

                img.setAttribute('src', "../lesson9/images/" + towns[i].photo);
                img.setAttribute('alt', towns[i].name);
            
                /**-------------Additions after TA meeting------------*/
                card.appendChild(h2);
                innersection2.appendChild(motto);
                innersection2.appendChild(founded);
                innersection2.appendChild(pop);
                innersection2.appendChild(rainfall);

                innersection1.appendChild(innersection2);
                innersection1.appendChild(img);
                card.appendChild(innersection1);

                //Adding classes to sections within div.
                card.classList.add("townAll");
                innersection1.classList.add("townInfo");
                innersection2.classList.add("townText");
                
                /**---------------------------------------------------*/

                /**Original*/
                //card.appendChild(motto);
                //card.appendChild(founded);
                //card.appendChild(pop);
                //card.appendChild(rainfall);
                //card.appendChild(img);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });