
let source = 'bbc-news';
let apiKey = 'f106cea27a6f48e2b0c0a7d134a2a05f'
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f106cea27a6f48e2b0c0a7d134a2a05f', true);

//https://newsapi.org/v2/top-headlines?country=us&apiKey=f106cea27a6f48e2b0c0a7d134a2a05f
// xhr.getResponseHeader('Content-type', 'application/json');
//`https://newsapi.org/v2/top-headlines?source=${source}&apiKey=${apiKey}`

xhr.onload = function () {
  if(this.status === 200){

      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      //console.log(articles);

      let newsHTML = "";
      articles.forEach(function(element,index){
       // console.log(articles[news]);
          let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="#collapse${index}">
                  ${element["title"]}
                  </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                  <div class="accordion-body">
                    ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a>
                  </div>
                </div> `;
      newsHTML += news;

    });
      newsAccordion.innerHTML = newsHTML;
  }
  else{
      console.log("Some error occured")
  }
}

xhr.send();

// let news = `<div class="accordion-item">
//               <h2 class="accordion-header" id="headingOne">
//                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                   Accordion Item #1
//                 </button>
//               </h2>
//               <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                 <div class="accordion-body">
//                   <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                 </div>
//               </div> `