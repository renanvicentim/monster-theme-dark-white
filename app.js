const monster = [
    {
        id: 1,
        nome: ' Osvaldo',
        altura: " 2",
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint maxime molestias ex tempora porro magni veniam dolores, sapiente alias cum tenetur exercitationem praesentium. Ipsum voluptatum ipsam iusto tempore? Porro, voluptatibus.',
        foto: 'https://robohash.org/Osvaldo'
    },
    {
        id: 2,
        nome: ' MegaMente',
        altura: " 3",
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint maxime molestias ex tempora porro magni veniam dolores, sapiente alias cum tenetur exercitationem praesentium. Ipsum voluptatum ipsam iusto tempore? Porro, voluptatibus.',
        foto: 'https://robohash.org/MegaMente'
    },
    {
        id: 3,
        nome: ' Devinho',
        altura:  " 7",
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint maxime molestias ex tempora porro magni veniam dolores, sapiente alias cum tenetur exercitationem praesentium. Ipsum voluptatum ipsam iusto tempore? Porro, voluptatibus.',
        foto: 'https://robohash.org/Devinho'
    },
    {
        id: 4,
        nome: ' Abacate',
        altura: " 1.4",
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint maxime molestias ex tempora porro magni veniam dolores, sapiente alias cum tenetur exercitationem praesentium. Ipsum voluptatum ipsam iusto tempore? Porro, voluptatibus.',
        foto: 'https://robohash.org/Abacate'
    },
]

const section = document.querySelector('.monsters')
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const monsters = monster.map(monstro => {
    return `<div> 
        <p>Nome:${monstro.nome}</p>
        <p>Altura:${monstro.altura}</p>
        <img src="${monstro.foto}">
        <p class="hability">Habilidades:${monstro.habilidades}</p>
    </div>`

}) 

section.innerHTML = monsters