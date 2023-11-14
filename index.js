
// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);





fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let quotes = data;


    for (const quote of quotes) {
      const authorParts = quote.author.split(', type.fit');
      const authorName = authorParts[0];
      const type = authorParts[1];


  const container = document.getElementById('container');

    const quoteHTML = `        
    <div class="card">
    <div class="front"></div>
    <div id ="back" class="back">
        <h1 id="author" class="author">${authorName}</h1>
        <p id="text" class="quote">${quote.text}</p>
    </div>
    </div>
    `;

    container.innerHTML += quoteHTML;
  }

});