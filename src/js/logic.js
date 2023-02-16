function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var time = null;

    if (min >= 0 && min < 10){
        time = hora + ':' + '0' + min
    } else {
        time = hora + ':' + min
    }    
    
    var relogio = time;

    if (hora >= 0 && hora < 6){
        msg.innerHTML = `Agora são ${relogio} horas da manhã.`
        img.src = "./src/img/noite.png"
        document.body.style.background = "#101510"

    } else if (hora >= 6 && hora < 12){
        msg.innerHTML = `Agora são ${relogio} horas da manhã.`
        img.src = "./src/img/manha.png"
        document.body.style.background = "#3ED5F8"
    
    } else if (hora >= 12 && hora < 17){
        msg.innerHTML = `Agora são ${relogio} horas da tarde.`
        img.src = "./src/img/manha.png"
        document.body.style.background = "#169BEF"

    } else if (hora >= 17 && hora < 19){
        msg.innerHTML = `Agora são ${relogio} horas da tarde.`
        img.src = "./src/img/tarde.png"
        document.body.style.background = "#D98642"

    } else {
        msg.innerHTML = `Agora são ${relogio} horas da noite.`
        img.src = "./src/img/noite.png"
        document.body.style.background = "#101510"
    }
}
