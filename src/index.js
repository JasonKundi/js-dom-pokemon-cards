console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
function addCard(data) {
  
  const li = document.createElement("li");
  li.classList.add("card");

  const h2 = document.createElement("h2");
  h2.classList.add("card--title");
  const h2Text = document.createTextNode(data.name);
  h2.innerText.charAt(0).toUpperCase() + h2.innerText.substring(1);
  h2.appendChild(h2Text);
  li.appendChild(h2);

  const img = document.createElement("img");
  img.classList.add("card--text")
  img.setAttribute(
    "src",
    data.sprites.other["official-artwork"].front_default
  );
  li.appendChild(img)
  const ul2 = document.createElement("ul")
  ul2.classList.add('card--text')
  li.appendChild(ul2)

  for (let i = 0; i < data.stats.length; i++) {
      const li = document.createElement("li")
      const liText = document.createTextNode(data.stats)
      li.innerText = data.stats[i].name 
      
      ul2.appendChild(li)
  }
//  base_stat: 
//  effort: 
//  stat: 
//    name: 
//    url:

  return li
}

const cards = document.querySelector(".cards"); //maybe querySelectorAll

for (let i = 0; i < data.length; i++) {
    const pokeCards = addCard(data[i])
    cards.appendChild(pokeCards)
}

console.log(data[0]);
