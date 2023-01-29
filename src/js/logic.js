function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    relogio = hora + ':' + min

    //var hora = 19

    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${relogio} horas da manhã.`
        img.src = "./src/img/manha.png"
        document.body.style.background = "#169BEF"

    } else if (hora >= 12 && hora < 18){
        msg.innerHTML = `Agora são ${relogio} horas da tarde.`
        img.src = "./src/img/tarde.png"
        document.body.style.background = "#D98642"

    } else {
        msg.innerHTML = `Agora são ${relogio} horas da noite.`
        img.src = "./src/img/noite.png"
        document.body.style.background = "#101510"
    }
}