const btn = document.querySelector(".button-start")

btn.addEventListener("click", () => {
    function retornar(){
        let nomeHotel = prompt("Qual é o nome do hotel")
        
        if (nomeHotel.length == 0 ) {
            alert("Você não digitou nenhum valor, esse valor é invalido para nosso sistema")
            retornar()
        }

        

        else{
            alert(`o nome do hotel é ${nomeHotel}`)

            let login = prompt("Insira seu usuário:")
            retornar();
        }
        const senha = 2678;
        let senhaUser = prompt("Insira sua senha:")
        if (senhaUser == senha) {
            alert(`"Bem vindo ao Hotel ${nomeHotel}, ${login}. É um imenso prazer ter você por aqui!`)
        }
        else {
            alert("Seu login está invalido")
            retornar()
        }
    
        let opcoes = prompt(`
        Escolha a opção desejada
    1• Reserva
    2• Cadastro
    3•
    4• Eventos
    5• Buffet
    6• Eventos auditório
    7• Reservar restaurante
    8• Passeio
    9• Manutenção de ar condicionado
    
    `)
    
            
        retornar();
    
        
    
}
retornar()
})