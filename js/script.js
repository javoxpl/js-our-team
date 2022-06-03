// definire un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
const teamMembers = [
    { Nome : 'Wayne Barnett', Ruolo : 'Founder & CEO', Foto : 'img/wayne-barnett-founder-ceo.jpg' },
    { Nome : 'Angela Caroll', Ruolo: 'Chief Editor', Foto : 'img/angela-caroll-chief-editor.jpg' },
    { Nome : 'Walter Gordon', Ruolo: 'Office Manager', Foto : 'img/walter-gordon-office-manager.jpg' },
    { Nome : 'Angela Lopez', Ruolo : 'Social Media Manager', Foto : 'img/angela-lopez-social-media-manager.jpg' },
    { Nome : 'Scott Estrada', Ruolo : 'Developer', Foto : 'img/scott-estrada-developer.jpg' },
    { Nome : 'Barbara Ramos', Ruolo : 'Graphic Designer', Foto : 'img/barbara-ramos-graphic-designer.jpg' }
] 

// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, 
// stampare dinamicamente una card per ogni membro del team.
let memberCards = document.querySelector(".team-container"); 

for (let i = 0; i < teamMembers.length; i++) {

    let divElementCard = document.createElement("div");
    let divImgCard = document.createElement("div");
    let imgElement = document.createElement('img');
    let divElementText = document.createElement('div');
    let h3Element = document.createElement('h3');
    let pElement = document.createElement('p');

    imgElement.setAttribute('src', teamMembers[i].Nome);
    imgElement.setAttribute('src', teamMembers[i].Foto);

    let h3Text = document.createTextNode(teamMembers[i].Nome);
    let pElementText = document.createTextNode(teamMembers[i].Ruolo);

    // divEl.className = ("team-card");
    divElementCard.classList.add("team-card");
    divImgCard.classList.add('card-image');
    divElementText.classList.add('card-text');

    memberCards.append(divElementCard);
    divElementCard.append(divImgCard);
    divImgCard.append(imgElement);
    divElementCard.append(divElementText);
    divElementText.append(h3Element);
    h3Element.append(h3Text);
    divElementText.append(pElement);
    pElement.append(pElementText);
}