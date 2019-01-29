//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "No one ever finds life worth living - one has to make it worth living.",
      author: "Winston Churchill"
    },
    {
      quote:
        "There are many ways of going forward, but only one way of standing still.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote:
        "Life is 10% what happens to us and 90% how we react to it.",
      author: "Dennis P. Kimbro"
    }


      ];
    const btn = document.getElementById("generate-btn");
    btn.addEventListener("click",function(){
      let random = Math.floor(Math.random() * quotes.length);
      //console.log(random);
     document.getElementById("quote").textContent = quotes[random].quote; 
     document.querySelector(".author").textContent = quotes[random].author; 
    });

})();
