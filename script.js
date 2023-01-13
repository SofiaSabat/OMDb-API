document.querySelector(".btn").addEventListener("click", getData);

async function getData() {
  let title = document.querySelector(".title").value;
  const url = `http://www.omdbapi.com/?apikey=5f5ff256&s=${title}`;
  const finish = document.querySelector(".result");
  const response = await fetch(url);
  let res = await response.json();
  let Search = res.Search;
  Search.forEach((el) => {
    finish.innerHTML += ` <div class="result">
      <div class="movie-box">
         <div class="visible-box">
              <div class="movie-title">${el.Title}</div>
              <button class="more-detail">more details</button>
         </div>
          <div class="detail-box hide">
              <div class="movie-type">          
                  <p>Movie type: </p>     
                  <p class="type-res">${el.Type}</p>       
              </div>
              <div class="movie-year">
                  <p>Movie year: </p>        
                  <p class="year-res">${el.Year}</p>              
              </div>
              <div class="movie-poster">
                  <img src=${el.Poster}
               alt="">
              </div>
              <button class="close">Close</button>
          </div>
      </div>
      </div>`;
  });
  reset();
}

document.querySelector(".result").addEventListener("click", function (e) {
  let target = e.target;
  if (!target.classList.contains("more-detail")) {
    return;
  }
  openMoreDetails(target);
});

document.querySelector(".result").addEventListener("click", function (e) {
  let target = e.target;
  if (!target.classList.contains("close")) {
    return;
  }
  closeMoreDetails(target);
});

function reset() {
  let title = document.querySelector(".title");
  title.value = "";
}

function openMoreDetails(tar) {
  let selected = tar.parentNode.nextElementSibling;
  if (!selected.classList.contains("hide")) {
    selected.classList.remove("show");
    selected.classList.add("hide");
  }
  selected.classList.remove("hide");
  selected.classList.add("show");
}

function closeMoreDetails(tar) {
  let selected = tar.parentNode;
  if (!selected.classList.contains("hide")) {
    selected.classList.remove("hide");
    selected.classList.add("show");
  }
  selected.classList.remove("show");
  selected.classList.add("hide");
}
