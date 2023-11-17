const url = `https://newsapi.org/v2/everything?q=business&from=2023-10-17&sortBy=publishedAt&apiKey=ea597c573f7a4abdbdfeb052c769bf8c`
async function getData(URL) {
    fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(data);
            renderData(data.articles.slice(0, 20));
        })
        .catch(function(error) {
            console.log(error);
        })
}
getData(url)
const sections = document.querySelector('.section_two');

function renderData(data) {
    sections.innerHTML = null;
    console.log(data);
    if (data.length && data) {
        data.map((e) => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('col_img');
            const busniesDiv = document.createElement('div');
            busniesDiv.classList.add('bus_img-ren');
            const images = document.createElement('img');
            images.src = e.urlToImage;
            const source = document.createElement('h5');
            source.textContent = e.source.name;
            const title = document.createElement('h2');
            title.textContent = e.title;
            const description = document.createElement('h4');
            description.textContent = e.description;
            newDiv.appendChild(images);
            busniesDiv.appendChild(source);
            busniesDiv.appendChild(title);
            busniesDiv.appendChild(description);
            newDiv.appendChild(busniesDiv);
            sections.appendChild(newDiv);
        });
    }
}
let limit = 20
let data = [...Array(100).keys()];
const paginationBtns = document.querySelectorAll(".btns")
const handlePagination = (arr, page) => {
    console.log(limit * (page - 1), limit * page)
    if (arr.length / limit) {
        page++
    } else if (page > 1) {
        page--
    }
    renderData(arr.slice(limit * (page - 1), limit * page));
}
paginationBtns.forEach(item => {
    item.addEventListener('click', (event) => {
        let page = (event.target.textContent - 0)
        fetch(url).then((response => response.json())).then(data => {
            const { articles } = data
            handlePagination(articles, page)
        })
    });
})
const newContainer = document.querySelector('.pagination_btn');
const itemsPerPage = 5;
let currentPage = 1;
let totalltems = 0;
let currentNews = [];
const form = document.querySelector('.form');
const input = document.querySelector('.input')
form.addEventListener('input', (event) => {
    const searchValue = event.target.value.trim().toLowerCase();
    if (!searchValue) return form.reset();
    const searchApi = `https://newsapi.org/v2/everything?q=${searchValue}&from=2023-11-16&to=2023-11-14&sortBy=publishedAt&apiKey=ea597c573f7a4abdbdfeb052c769bf8c`;
    console.log(searchApi);
    try {
        getData(searchApi);
    } catch (error) {
        console.error(error);
    }
});

const menu = document.querySelector('.menu-img'),
    iteam = document.querySelector('.iteam'),
    backManu = document.querySelector('.back_me'),
    removeBtn = document.querySelector('.rem-btn');
menu.addEventListener('click', () => {
    iteam.classList.add('itm_tr-for');
    menu.classList.add('rem-btn')
});
backManu.addEventListener('click', () => {
    iteam.classList.remove('itm_tr-for');
    menu.classList.remove('rem-btn');
});