const historia = {
    // --- RAMIFICAÇÃO 1: INVESTIGAR ---
    1: {
        text: "Destemido, Lucas aperta o papel na mão e entra na floresta. Conforme avança, as árvores bloqueiam a luz do sol e o vento parece sussurrar seu nome. De repente, ele encontra uma enorme pegada no chão lamacento, grande o suficiente para ele deitar dentro. Ao lado da pegada, há uma caverna escura e, mais adiante, uma trilha iluminada por estranhos cogumelos brilhantes.",
        options: [
            { text: "Entrar na caverna escura", next: 3 },
            { text: "Seguir a trilha de cogumelos brilhantes", next: 4 }
        ]
    },
    
    // --- RAMIFICAÇÃO 2: VOLTAR PARA A CIDADE ---
    2: {
        text: "Lucas corre de volta para a cidade. He tenta avisar as pessoas, mas os adultos apenas riem e dizem que é uma lenda boba para assustar crianças. Frustrado e com medo de que a cidade corra perigo, ele decide que precisa se preparar sozinho. Ele vai até o celeiro de seu avô para pegar alguns suprimentos antes que a noite caia.",
        options: [
            { text: "Pegar lanternas e algumas frutas frescas", next: 5 },
            { text: "Pegar uma rede velha e um pedaço de corda", next: 6 }
        ]
    },

    // --- SUB-RAMIFICAÇÕES ---
    3: {
        text: "Dentro da caverna, o ar é frio. Lucas caminha tateando as paredes até que ouve uma respiração pesada. Duas imensas esferas douradas se acendem no escuro: são os olhos do monstro! Ele é uma criatura monumental feita de pedras e raízes. O gigante solta um gemido de dor e Lucas nota que há um enorme espinho cravado em sua pata protetora.",
        options: [
            { text: "Aproximar-se com cuidado para tirar o espinho", next: 7 },
            { text: "Gritar de pânico e jogar uma pedra para se defender", next: 8 }
        ]
    },
    4: {
        text: "Seguindo os cogumelos brilhantes, Lucas chega a um lindo vale escondido no coração da floresta. Lá está o monstro gigante, comendo folhas das copas das árvores. Ele parece calmo, mas percebe a presença de Lucas e olha diretamente para o garoto, esperando para ver o que o intruso fará.",
        options: [
            { text: "Deixar um sinal de paz e oferecer um lanche", next: 7 },
            { text: "Tentar se esconder atrás de um arbusto e espioná-lo", next: 8 }
        ]
    },
    5: {
        text: "Armado com suas frutas e lanterna, Lucas volta à floresta à noite. Ele encontra o monstro gigante vagando triste perto de um riacho, parecendo faminto e desorientado pela escuridão. Lucas acende a lanterna suavemente para guiar o grandalhão e estende as frutas.",
        options: [
            { text: "Avançar calmamente e oferecer a comida", next: 7 },
            { text: "Ficar assustado com o tamanho dele e correr", next: 8 }
        ]
    },
    6: {
        text: "Com a corda e a rede, Lucas monta uma armadilha improvisada na entrada da floresta e espera. Horas depois, as árvores tremem e o monstro surge. Ele acaba tropeçando na corda de Lucas e cai no chão com um estrondo terrível, soltando um urro de pura frustração e dor.",
        options: [
            { text: "Pedir desculpas e tentar desatar os nós", next: 7 },
            { text: "Comemorar e gritar que pegou o monstro", next: 8 }
        ]
    },

    // --- OS FINAIS ---
    7: {
        text: "<strong>🏆 FINAL BOM:</strong> Lucas escolheu a empatia e a coragem. O gigante percebe as boas intenções do garoto e se acalma completamente. Grato pela ajuda e pelo respeito, o monstro solta um rugido alegre que faz as folhas dançarem. A partir daquele dia, a criatura tornou-se o guardião secreto da região e o melhor amigo de aventuras de Lucas, provando que nem todo monstro quer fazer o mal.",
        options: [] 
    },
    8: {
        text: "<strong>❌ FINAL RUIM:</strong> O medo e a hostilidade falaram mais alto. Sentindo-se atacado, encurralado ou ameaçado pelas ações de Lucas, o monstro solta um rugido ensurdecedor que faz a terra tremer. Com um golpe de sua imensa mão de pedra, ele cria uma onda de vento que joga Lucas longe. O garoto foge aterrorizado e a criatura, agora furiosa e magoada com os humanos, isola a floresta em uma névoa eterna e perigosa.",
        options: [] 
    }
};

function escolha(idProximo) {
    const textElement = document.getElementById('story-text');
    const buttonContainer = document.getElementById('choice-buttons');
    
    // Atualiza o texto da história
    textElement.innerHTML = historia[idProximo].text;
    
    // Limpa os botões antigos
    buttonContainer.innerHTML = '';
    
    // Cria os novos botões se houverem próximas opções
    if (historia[idProximo].options.length > 0) {
        historia[idProximo].options.forEach(opcao => {
            const btn = document.createElement('button');
            btn.innerText = opcao.text;
            btn.onclick = () => escolha(opcao.next);
            buttonContainer.appendChild(btn);
        });
    } else {
        // Se for o final, cria um botão para recomeçar
        const btnRecomecar = document.createElement('button');
        btnRecomecar.innerText = "Jogar Novamente 🔄";
        btnRecomecar.style.backgroundColor = "#ff4d4d";
        btnRecomecar.style.color = "#121212";
        btnRecomecar.onclick = () => location.reload();
        buttonContainer.appendChild(btnRecomecar);
    }
}