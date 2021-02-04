console.log("client side java script is loaded..")

const wheatherForm = document.querySelector('form')
const searchText = document.querySelector('input')
const messageOne = document.querySelector('#message1')

wheatherForm.addEventListener('submit',(e)=>{
  messageOne.textContent = 'loading..'
  e.preventDefault();
  console.log(searchText.value);
  if(searchText.value ===''){
    messageOne.textContent = 'please provide a search content'
  }else{
    fetch("http://puzzle.mead.io/puzzle").then((responce)=>{
  responce.json().then((data)=>{
    if(data.error){
      console.log('error fetching the data')
    }else{
      messageOne.textContent = data.puzzle
    }
  })
})
  }
  
})