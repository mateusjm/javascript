function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero  = 'Homem'
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src', 'homemcriança.jpg')
                document.body.style.background = '#468eec'
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'homemjovem.jpg')
                document.body.style.background = '#468eec'
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'homemadulto.jpg')
                document.body.style.background = '#468eec'
            } else {
                // Idoso
                img.setAttribute('src', 'homemidoso.jpg')
                document.body.style.background = '#468eec'
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src', 'mulhercriança.jpg')
                document.body.style.background = '#ffc0cbbd'
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'mulherjovem.jpg')
                document.body.style.background = '#ffc0cbbd'
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'mulheradulta.jpg')
                document.body.style.background = '#ffc0cbbd'
            } else {
                // Idoso
                img.setAttribute('src', 'mulheridosa.jpg')
                document.body.style.background = '#ffc0cbbd'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

    