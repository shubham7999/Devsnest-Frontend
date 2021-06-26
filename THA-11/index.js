const quiz = [{
    Question: "Types of the algorithm we use in Dijektras",
    A: "Dynammic Programming",
    B: "Brute Force",
    C: "Greedy",
    D: "Divide and Conquer",
    ans: "option3"
},
{
    Question : "Best time complexity for searchinga an element in a sorted array??",
    A: "O(N)",
    B: "O(Log(N))",
    C: "O(1)",
    D: "O(NLog(N))",
    ans: "option2"
},
{
    Question: "For which type of graph we can use bfs as shortst path algorithm?",
    A: "Graph with only positive weights",
    B: "Graph with negative weights",
    C: "Graph with both positive and negative edges",
    D: "Graph with all weights same between edges",
    ans: "option4"
},
{
    Question: "Best Case time Complexity of Bubble sort?",
    A: "O(N)",
    B: "O(Log(N))",
    C: "O(NLog(N))",
    D: "O(N^2)",
    ans: "option1"  
},
{
    Question: "Time Complexity of Sieve of Eratosthenes?",
    A: "O(N^2)",
    B: "O(N*Log(N))",
    C: "O(N*Log(Log(N)))",
    D: "O(N*LogN^2))",
    ans: "option3"
}]
const question = document.querySelector(".question");
const A = document.getElementById("ans1");
const B = document.getElementById("ans2");
const C = document.getElementById("ans3");
const D = document.getElementById("ans4");
const answer = document.querySelectorAll(".answers");
const option = document.querySelector(".options");
const showscore = document.querySelector(".score");



let qcount = 0;
let score = 0;
const loadq = () =>{
    question.innerHTML = quiz[qcount].Question;
    A.innerText = quiz[qcount].A;
    B.innerText = quiz[qcount].B;
    C.innerText = quiz[qcount].C;
    D.innerText = quiz[qcount].D;
}
loadq()
const getcheck = () => {
    let ans;
    answer.forEach((a) => {
        if(a.checked){
            ans = a.id;
        }
    });
    return ans;
};
const getuncheck = () => {
    answer.forEach((a) => {
        if(a.checked){
            a.checked = false;
        }
    });
}
option.addEventListener('click', ()=>{
  
    const rans = getcheck();
    
    
    if(rans===quiz[qcount].ans){
       
        score++;
        showscore.innerText = `score:${score}`;

    }else{
        alert("wrong answer");
    }
    qcount++;
    getuncheck();
    if(qcount < quiz.length){
        loadq();
    }else{
        alert("Your total score:" + score);
        alert("You want to play again...");
        document.location = document.location.href;
    }
})