

// Informazioni per creare array di ogetti 

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
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