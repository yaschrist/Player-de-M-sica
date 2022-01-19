function mudarTema() {
    document.body.classList.toggle("white");
}

//Player

let musicas = [
    {titulo:'Herói do futuro', artista: 'O Grilo', src:'musicas/grilo.mp3', img:'imagens/heroi do futuro.jpg'},
    {titulo:'Killer queen', artista: 'Queen', src:'musicas/killerqueen.mp3', img:'imagens/Killer_Queen_capa.jpg'},
    {titulo:'Oh my heart', artista: 'Mother Mother', src:'musicas/ohmyheart.mp3', img:'imagens/oh my heart.jpg'},
    {titulo:'Mammamia', artista: 'Maneskin', src:'musicas/maneskinmia.mp3', img:'imagens/mamamia.jpg'},
    {titulo:'Pleaser', artista: 'Wallows', src:'musicas/pleaser.mp3', img:'imagens/pleaser.jpg'},
    {titulo:'505', artista: 'Artic Monkeys', src:'musicas/505.mp3', img:'imagens/505.jpg'},
    {titulo:'Paint it black', artista: 'The Rolling Stones', src:'musicas/paintitblack.mp3', img:'imagens/pib.jpg'},
    {titulo:'Paradise city', artista: 'Guns n Roses', src:'musicas/paradisecity.mp3', img:'imagens/guns.jpg'},

];


let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.album');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

duracaoMusica.textContent = converterMinutos(Math.floor(musica.duration));


//Eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);


        //funçao anonima
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0 ) {
        indexMusica = 7;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 7 ) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = converterMinutos(Math.floor(musica.duration));
    }); //arrow function
}


function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = converterMinutos(Math.floor(musica.currentTime));
}

function converterMinutos(segundos){
    let campoMinuto = Math.floor(segundos/60);
    let campoSegundo = segundos % 60;
    if (campoSegundo < 10) {
        campoSegundo = '0' + campoSegundo;
    }
    return campoMinuto+":"+campoSegundo;
}


