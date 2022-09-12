
       /*-------- QUIZZ -----------*/
       const data = [
        {
            question: "Who is making the web standards ?",
            a: "Google",
            b: "Microsoft",
            c: "Mozilla",
            d: "The World Wide Web COnsortium",
            correct: "d",
        },
        {
            question: "Chose the correct HMTL FOr THe largest heading :",
            a: "<head>",
            b: "<Microsoft>",
            c: "<heading>",
            d: "<h6>",
            correct: "c",
        },
        {
            question: "What does CSS stand for ?",
            a: "Central Style Sheets",
            b: "Casacading Styles Sheets",
            c: "Casacading Simple Sheets",
            d: "Cad SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for ?",
            a: "Hypertext Makup Language",
            b: "Hyêrtexrt Markdom Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminal Motorboats Lamborginis",
            correct: "a",
        },
    ]
    
    const quizz = document.getElementById("quizz")
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById("question")
    const optionA = document.getElementById("optionA")
    const optionB = document.getElementById("optionB")
    const optionC = document.getElementById("optionC")
    const optionD = document.getElementById("optionD")
    
    const submitBtn = document.getElementById("submit")
    
    let currentQuiz = 0
    let score = 0
    
    loadQuizz()
    
    function loadQuizz() {
        deselectAnswers()
    
        const currentQuizzData = data[currentQuiz]
    
        questionEl.innerText = currentQuizzData.question
        optionA.innerText = currentQuizzData.a
        optionB.innerText = currentQuizzData.b
        optionC.innerText = currentQuizzData.c
        optionD.innerText = currentQuizzData.d
    }
    
    function deselectAnswers() {
        answerEls.forEach((answerEl) => (
            answerEl.checked = false
        ))
    }
    
    function getSelected() {
        let answer
    
        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id
            }
        })
    
        return answer
    }
    
    submitBtn.addEventListener("click", () => {
        const answer = getSelected()
    
        if (answer) {
            if (answer === data[currentQuiz].correct) {
                score++
            }
            currentQuiz++
    
            if (currentQuiz < data.length) {
                loadQuizz()
            }
    
            else {
                quizz.innerHTML = `  
            <h2>Your Answered ${score}/${data.length} Questions correctly</h2>
            <button onclick="location.reload()">Do it Again</button>
            `
            }
        }
    })
    