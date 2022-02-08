const tocaSom = (seletorAudio) => {
    const elemento = document.querySelector(seletorAudio);

    if (elemento.localName === 'audio') {
        elemento.play();
    }   else {
        console.error('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let tecla of listaDeTeclas) {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
        tocaSom(idAudio);
    }

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

}
