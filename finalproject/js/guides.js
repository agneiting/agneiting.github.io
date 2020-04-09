const requestURL = 'https://agneiting.github.io/finalproject/js/guidedata.json';

fetch(requestURL)
    .then(function(response) {
    //console.log(response);
    return response.json();
})
    .then(function(jsonObject) {
        //console.table(jsonObject);
        const guides = jsonObject['guides'];
        for (let i = 0; i < guides.length; i++) {
            if (guides[i].name == "Franklin Covey" || "Marie Rainier" || "Adly Miller") {
                let card = document.createElement('div');
                let innersection1 = document.createElement('section');

                let h3 = document.createElement('h3');
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');
                let img = document.createElement('img');
                let email = document.createElement('p');

                img.setAttribute('src', "images/" + guides[i].photo);
                img.setAttribute('alt', name);
                
                h3.textContent = guides[i].name;
                event1.textContent = "Certification Level: " + guides[i].certLevel;
                event2.textContent = "Years Experience: " + guides[i].yearsExp;
                event3.textContent = guides[i].bio;
                email.textContent = guides[i].email;

                card.appendChild(h3);
                innersection1.appendChild(event1);
                innersection1.appendChild(event2);
                innersection1.appendChild(email);
                innersection1.appendChild(event3);
                card.appendChild(img);

                card.appendChild(innersection1);

                card.classList.add("guideAll");
                innersection1.classList.add("guideInfo");

                document.querySelector('div.guides').appendChild(card);
            }
        }
    });