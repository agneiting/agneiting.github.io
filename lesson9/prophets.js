const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        //console.log(response);
        return response.json();
})
    .then(function(jsonObject) {
        //console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let birthDate = document.createElement('p');
            let birthPlace = document.createElement('p');

            let fullName = `${prophet.name} ${prophet.lastname}`;

            h2.textContent = fullName;
            birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', fullName);
            


            card.appendChild(h2);
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        });
    });