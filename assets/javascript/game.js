$(document).ready(() => {
    const names = ['#button1', '#button2', '#button3', '#button4'];
    const letters = ['A: ', 'B: ', 'C: ', 'D: ']
    let n = 0;
    let num = 10;
    let time;
    let time1;
    let score = {
        correct: 0,
        incorrect: 0,
    }
    const trivial = [{
        question: '"Call me Ishmael" is the opening line from what novel?',
        answer: 'Moby Dick',
        idx: 2,
        choices: ['War and Peace', 'Moby Dick', 'Typee', 'The Bible']
    },{
        question: 'What is the national sport of Japan?',
        answer: 'Sumo',
        idx: 1,
        choices: ['Sumo', 'Baseball', 'Snowboarding', 'Soccer']
    },{
        question: 'What is the only bird known to fly backwards?',
        answer: 'Hummingbirds',
        idx: 1,
        choices: ['Hummingbirds', 'Seagulls', 'Owls', 'Velociraptors']
    },{
        question: 'If you were in the city of Turin, what country would you be in?',
        answer: 'Italy',
        idx: 4,
        choices: ['France', 'Czech Republic', 'Russia', 'Italy']
    },{
        question: "What is the capital city of Canada's Yukon territory?",
        answer: 'Whitehorse',
        idx: 3,
        choices: ['Greyhorse', 'Bluehorse', 'Whitehorse', 'horse']
    },{
        question: 'In our solar system, which planet has the shortest day?',
        answer: 'Jupiter',
        idx: 3,
        choices: ['Mercury', 'Venus', 'Jupiter', 'Saturn']
    },{
        question: 'The RMS Olympic and HMHS Britannic were sister ships to which other British passenger liner?',
        answer: 'RMS Titanic',
        idx: 1,
        choices: ['RMS Titanic', 'USS Constitution', 'RMS Lusitania', 'HMS Beagle']
    },{
        question: 'What was the name of the ship on which Charles Darwin served as a naturalist during a voyage to South America and around the world?',
        answer: 'HMS Beagle',
        idx: 4,
        choices: ['RMS Titanic', 'USS Constitution', 'RMS Lusitania', 'HMS Beagle']
    },{
        question: 'What was the first console video game that allowed the game to be saved?',
        answer: 'The Legend of Zelda',
        idx: 3,
        choices: ['PAC-MAN', 'Mario Bros', 'The Legend of Zelda', 'Doom']
    },{
        question: 'Sriracha is type of hot sauce named after a city located in what country?',
        answer: 'Thailand',
        idx: 2,
        choices: ['Japan', 'Thailand', 'Mexico', 'India']
    }]

    window.onload = start ();

    function timerThing2 () {
        console.log(n)
        if (trivial[n]) {
            $('.main').css('display', 'block');
            $('#alt').css('display', 'none');
            nGame ();
        } else {
            endGame ()
        }
    }
    $('#player, #opponent').attr('src', './assets/images/750161_game_512x512.png')
    function endGame () {
        $('.content').css('background-color', 'transparent');
        $('.content').css('border-color', 'transparent');
        $('.main').css('display', 'none');
        $('#alt').css('display', 'block');
        $('.app').css('background-image', 'url("./assets/images/background.jpg")');
        $('#alt > h1').html('You got ' + score.correct + ' correct and made ' + score.incorrect + ' happy little accidents!');
    }

    function wrong () {
        $('.pic').css('display', 'inline')
        $('.pic').attr('src', './assets/images/x.png');
        $('#pic' + trivial[n-1].idx).attr('src', './assets/images/check.png');
        score.incorrect++
        time1 = window.setTimeout(timerThing2, 3000)
    }

    function correct () {
        score.correct++
        $('#alt > h1').html('Correct!');
        $('.main').css('display', 'none');
        $('#alt').css('display', 'block');
        $('.content').css('border-color', 'transparent');
        $('.app').css('background-image', 'url("./assets/images/epic-bob-ross-painting-printed-poster-0.jpg")');
        $('.content').css('background-color', 'transparent');
        time1 = window.setTimeout(timerThing2, 3000)
    }

    function timeUp () {
        score.incorrect++
        $('#alt > h1').html('Time Up!');
        $('.app').css('background-image', 'url("./assets/images/de4401577135b24388541780e2d9a092_1024x1024.jpg")');
        $('.content').css('background-color', 'transparent');
        $('.content').css('border-color', 'transparent');
        $('.main').css('display', 'none');
        $('#alt').css('display', 'block');
        time1 = window.setTimeout(timerThing2, 3000)
    }

    function nGame () {
        $('.button').prop('disabled', false);
        num = 10;
        $('#time').html('Time Left: 10 seconds!');
        $('.pic').css('display', 'none')
        $('.content').css('border-color', 'red');
        $('.app').css('background-image', 'url("./assets/images/background.jpg")');
        $('.content').css('background-color', 'cornsilk');
        $('#question').html('Question ' + (n+1) + ': <br>' + trivial[n].question);
        for (i = 0; i < 4; i++) {
            $(names[i]).html(letters[i] + trivial[n].choices[i]);
            $(names[i]).attr('value', trivial[n].choices[i]);
        }
        n++
        time = window.setInterval(timerThing, 1000)
    }

    function start () {
        $('.main').css('display', 'none');
        $('#alt').css('display', 'flex');
    }
    
    function timerThing () {
        num--
        if (num === 0) {
            num = 10;
            window.clearInterval(time)
            timeUp ()
        } else {
            $('#time').html('Time Left: ' + num + ' seconds!');
        }
    }

    $('#button0').click( function () {
        $('.main').css('display', 'block');
        $('#alt').css('display', 'none');
        $('#button0').css('display', 'none');
        nGame ();
    })

    $('.button').click( function () {
        $('.button').prop('disabled', true);
        window.clearInterval(time);
        ($(this).attr('value') === trivial[n-1].answer) ? (correct ()) : (wrong ());
    })
  })
    