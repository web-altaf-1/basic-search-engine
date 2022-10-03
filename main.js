const result = document.getElementById('result');
const logo = document.getElementById('logo');
const search = document.getElementById('search');
const submit = document.getElementById('submit');
var recognition = new webkitSpeechRecognition();

const handleVoiceSearch = () => {




    recognition.start()

    logo.style.display = 'none';
    search.style.display = 'none';
    submit.style.display = 'none';

    result.innerText = 'Please Wait ...'



    setInterval(displayHello, 1000);

    function displayHello() {
        result.innerText = 'Mic is ready now ! Please Speaking ...'
    }




    recognition.onresult = function (event) {
        var text = event.results[0][0].transcript;

        


        console.log(text);

        let url = 'https://www.google.com/search?q=' + text;

        window.open(url, '_self')
    }




}

