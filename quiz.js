function quiz() {
    this.questions = []
    this.correctAnswer = ''
    this.correct = 0;
    this.incorrect = 0;
    this.skipped = 0;
        
    this.startQuiz = function() {
        this.total = this.questions.length;
        this.loadNextQuestion();
    }

    this.loadNextQuestion = function() {
        $(this.answerSelector).val('');
        if(this.questions.length) {
            var randomNumber = Math.ceil(Math.random() * 11);
            var question = this.questions.shift();
            var questionText = question.text.replace('%num%', randomNumber);
            this.correctAnswer = question.answer(randomNumber);
            $(this.questionSelector).html(questionText);
        } else {
            var that = this;
            setTimeout(function() {
                that.endQuiz();
            }, 500);
        }
    }

    this.submitAnswer = function() {
        var submittedAnswer = $(this.answerSelector).val();
        if(submittedAnswer.trim().toLowerCase() == this.correctAnswer) {
            this.showMessage('Correct');
            this.correct += 1;
        } else {
            this.showMessage('Incorrect');
            this.incorrect += 1;
        }
        this.loadNextQuestion();
    }

    this.showMessage = function(message) {
        $(this.messageSelector).html(message);
    }

    this.skipQuestion = function() {
        this.skipped += 1;
        this.loadNextQuestion();
        this.showMessage('Skipped');
    }

    this.endQuiz = function() {
        document.location = "results.html?correct=" + this.correct +
                                        "&incorrect=" + this.incorrect +
                                        "&skipped=" + this.skipped +
                                        "&total=" + this.total;
    }
}
