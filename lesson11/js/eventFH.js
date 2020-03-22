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
            if (towns[i].name == "Fish Haven") {
                let card = document.createElement('div');
                let innersection1 = document.createElement('section');

                let h2 = document.createElement('h2');
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');

                h2.textContent = towns[i].name + " Events";
                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent = towns[i].events[2];
            
                card.appendChild(h2);
                innersection1.appendChild(event1);
                innersection1.appendChild(event2);
                innersection1.appendChild(event3);

                card.appendChild(innersection1);

                card.classList.add("townAll");
                innersection1.classList.add("townInfo");

                document.querySelector('div.event').appendChild(card);
            }
        }
    });