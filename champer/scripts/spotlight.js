import daTa2 from './data2.json' assert{type: 'json'};


displayBusiness(daTa2);

function displayBusiness(companyy) {
    console.log(companyy)
    companyy.forEach(company => {


        //create elements to add to the document
        let card = document.createElement('section');
        card.setAttribute("class","component")
        let portait = document.createElement('img');
        let h3 = document.createElement('h3');
        let hr = document.createElement('p');
        let phone = document.createElement('p');
        let memberLevel = document.createElement('p');


        // change the textContent property of the h2 element to contain the prophets full name
        phone.textContent = `Phone: ${company.phone} `;
        memberLevel.textContent = `Membership-level: ${company.membershiplevel} `;
        h3.textContent=`${company.name}`;
        hr.textContent=`${company.category}`
        // build the image attributes by using the setAttribute method for the src, and loading attribute value (fill in the blank with the appropriate variable)
        portait.setAttribute('src', company.logo);
        portait.setAttribute('alt', `Portait of ${company.name}`);
        portait.setAttribute('loading', 'lazy');
        portait.setAttribute('width', "50%")

        // Add/append the section card with the h2 element
      
        card.appendChild(h3);
        card.appendChild(portait);
        card.appendChild(hr);
        card.appendChild(phone);
        card.appendChild(memberLevel);
       
        // add/ append the existing html div with the cards class with the section card

        document.querySelector(".rightside").appendChild(card)
    });
}