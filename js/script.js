// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data (in data avrò l'src).

var app = new Vue(
    {
        el:'#root',
        data: {
            h1Message4you: "I'M YOUR MESSAGE",
            h1MessageColor: 'blue',
            MessageImg: 'https://i.pinimg.com/originals/6c/54/a8/6c54a8408d274e698e02352130010bd1.jpg',
        }
    }
);