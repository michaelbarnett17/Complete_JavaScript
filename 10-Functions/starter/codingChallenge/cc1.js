`use strict`;

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        answerNumber =  prompt(`What is your favorite programming language:
            ${this.options[0]}
            ${this.options[1]}
            ${this.options[2]}
            ${this.options[3]}
            Write option number`
        )
        if(answerNumber >= 0 && answerNumber <= 3)
        {
            this.answers[answerNumber]++;
        }
        this.displayResults(`string`);
    },
    displayResults: function (type) {
        if (type == 'array') {
            console.log(this.answers);
        } else if (type == 'string') {
            console.log(`poll results are: ${this.answers}`);
        }
    }

};


document.querySelector(`.poll`).addEventListener(`click`, function () {
    poll.registerNewAnswer();
})

(function() {
    console.log(`hi`);
})();