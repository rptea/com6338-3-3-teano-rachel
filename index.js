// Your code here
var questionsArr = [
    {
        question: 'The genome of a house cat is 95.6 percent tiger',
        answer: true
    },
    {
        question: 'Many cats are lactose intolerant',
        answer: true
    },
    {  
        question: 'Cats wag their tails like dogs do to express happiness',
        answer: false
    },
    {
        question: 'Cats whiskers are just decorative and have no purpose',
        answer: false
    },
    {
        question: 'Some cats are ambidextous, but 40 percent are either left- or right-pawed',
        answer: true  
    },
    {
        question: 'Cats have whiskers on the backs of their front legs, as well',
        answer: true
    }
]

function runQuiz() {
    let score = 0;

    for (var i=0; i < questionsArr.length; i++) {
        let input = confirm(questionsArr[i].question);

        if (input === questionsArr[i].answer) {
            alert('Correct!');
            score++;
        } else {
            alert('Incorrect!');
        }
    }

    let percent = (score / questionsArr.length) * 100;
    let roundedPercent = Math.round(percent);

    alert('Your final score: ' + roundedPercent + '%');
}