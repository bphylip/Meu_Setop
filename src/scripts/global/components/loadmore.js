// let loadMoreBtn = document.querySelector('#load-more');
// let currentItem = 3;

// loadMoreBtn.onclick = ()=> {
//     let posts =[...document.querySelectorAll('.post-main li')];
//     for(var i = currentItem;i < currentItem + 3; i++){
//         posts[i].style.display = 'grid';
//     }
//     currentItem +=3;

//     if (currentItem >= posts.length){
//         loadMoreBtn.style.display='none';
//     }
// }






// load more article 

const loadmore = document.querySelector('#load-more');
let currentItems = 3;

loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('#posts li')];

    document.querySelector('#loading').classList.replace('load', 'loading');

    for (let i = currentItems; i < currentItems + 3; i++){
        setTimeout(function () {
            document.querySelector('#loading').classList.replace('loading', 'load');
            if (elementList[i]){
                elementList[i].style.display = 'flex';
            }
        }, 1000)
    }
     currentItems += 3;

     //hide load button after fully load
     if (currentItems >= elementList.length) {
        setTimeout(()=>{
            loadmore.style.display='none';
        }, 1000)
        
     }
})



// load more ofertas


