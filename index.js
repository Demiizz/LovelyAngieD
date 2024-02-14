let musica = document.createElement('audio')
document.body.appendChild(musica)
musica.setAttribute('type', 'audio/mp3')
musica.src = '/musica.mp3'
musica.play()
musica.volume = 1
musica.autoplay = true
