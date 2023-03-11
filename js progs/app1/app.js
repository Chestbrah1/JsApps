let text = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus quam officia itaque error delectus iste nemo unde voluptas, eum, quasi tempora dignissimos sed voluptatem aliquid cupiditate repellat qui odio.'
let count = 0
let textt = text.split("")
for (let i = 0; i<textt.length; i++){
    if (textt[i] === "a"){
        count++;
    }
}
console.log("Букв 'а' в тексте:" + count)