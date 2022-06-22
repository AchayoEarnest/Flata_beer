const doPatch=()=> {
    fetch(`http://localhost:3000/beers/${id_element}`,{
      method : "PATCH",
      headers : {
        "content-type" : "application/json; charset =utf-8"
      },
      body : JSON.stringify({
        "description" : description.value
      })
    }).then(response=> response.json())
    .then(data => console.log(data))
  }
const updateDescription = ()=> {
    const descriptionForm = document.querySelector("#description-form");
    descriptionForm.addEventListener("submit",(event)=>{
      event.preventDefault();
      const description = document.querySelector("#description");
      const updatedDescription = document.querySelector("#beer-description");
      updatedDescription.textContent = description.value;
      descriptionForm.reset();
    })
    doPatch()
  }

  updateDescription();