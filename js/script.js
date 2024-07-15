

// Informazioni per creare array di ogetti 

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

// MILESTONE 1: Stampare su console, dati di ogni membri del team
team.forEach(member => {
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
});

// MILESTONE 2: Mostrare le informazioni sul DOM 
const teamContainer = document.getElementById('team');

team.forEach(member => {
    const members = document.createElement('div');
    members.classList.add('team-member');
    members.innerHTML = `
        <h2>${member.nome}</h2>
        <p>Ruolo: ${member.ruolo}</p>
        <img src="${member.foto}" alt="${member.nome}" style="width: 200px;">
    `;
    teamContainer.appendChild(members);
});