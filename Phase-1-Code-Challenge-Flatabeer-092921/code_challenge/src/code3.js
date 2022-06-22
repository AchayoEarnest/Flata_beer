// // Code solution 3
//  const beerReviewList = document.querySelector('#review-list');
// while (beerReviewList.firstElementChild) {
//     beerReviewList.removeChild(beerReviewList.lastElementChild)
// };
// const beerReviewForm = document.querySelector('#review-form');
// const beerReviewText = document.querySelector('#review');
// beerName.textContent = beer.name,
//     beerImage.src = beer.image_url,
//     beerDescription.textContent = beer.description,
//     beerEditDescription.value = beer.description
// for (let review of beer.reviews) {
//     let beerReview = document.createElement('li');
//     beerReview.textContent = review;
//     beerReviewList.appendChild(beerReview);
// }
// if (status) {
//     beerDescriptionForm.removeEventListener('submit', updateDescription, false);
//     status = !status
// } else {
//     beerDescriptionForm.addEventListener('submit', updateDescription, false);
//     status = !status
// }

// function updateDescription(env) {
//     env.preventDefault();
//     beer.description = beerEditDescription.value;
//     patchBeer(beer)
// };
// beerReviewForm.addEventListener('submit', (env) => {
//     env.preventDefault();
//     console.log(`review form ID: ${beer.id}`)
//     console.log('---------------------------------')
//     if (beerReviewText.value !== '') {
//         beer.reviews.push(beerReviewText.value)
//         patchBeer(beer)
//     } else {
//         alert('Review is empty string!!')
//     }
// });
// };