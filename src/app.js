import { getData } from "./api/get";
const listData = document.querySelector(".imageList");
const cap = document.querySelector(".hello");

const getDatasecond = async () => {
    return await new Promise((res) => {
        res((cap.style.color = "black"));
        // console.log(`color is black`);
    });
};
cap.style.color = "red";
getDatasecond().then();

// const load = async () => {
//   const data = await getData();
// };

// setTimeout(() => {
//     getData().then(res => {
//     console.log(res.hits);

//     const itemArrays = res.hits.map(item => {
//         // console.log(item.pageURL);

//         return `<li class="item">
//             <img class="image" src="${item.largeImageURL}" alt="#">
//             <h2 class="capture">${item.name}</h2>
//             <p class="description">${item.tags}</p>
//         </li>`;
//     }).join('');
//     listData.innerHTML = itemArrays;
// });
// }, 3000);

// console.log("color is red");
