async function api() {
    const res = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    let data = await res.json();
    setupInfo(data);
}

async function setupInfo(data) {

    const setupInfoName = data[0].setup;

    const mainPage = document.getElementById("mainCon");
    const main = document.createElement("div");
    main.setAttribute("class", "col-xxl-3 col-lg-4 col-md-6 col-sm-12");
    mainPage.appendChild(main);

    main.innerHTML = `
        <div class="card m-3 c-card p-3" style="width: 18rem;">
            <h5 class="m-0 text-center bg-dark text-light p-3">JOKE</h5>
            <div class="card-body">
                <p class="card-text text-center"><b><em>${setupInfoName}</em></b></p>
                <div class"btn-con" style="display: flex;justify-content: center;">
                    <button onclick="punchInfo()" class="btn btn-dark">Crack the Joke</button>
                </div>
                <p class="card-text text-center mt-3 fw-bold" id="punchResult"></p>
            </div>
            <div class="card-footer" >
                <p class="text-success"><b>Note: Refresh the page for a new Joke .</b></p>
            </div>
        </div>`;
}

async function punchInfo() {
    const jokeResponse = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const jokeData = await jokeResponse.json();
    const punch = jokeData[0].punchline;  

    const punchPara = document.getElementById("punchResult");
    punchPara.textContent = `${punch}`;
}

api();
