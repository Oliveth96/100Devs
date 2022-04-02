document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()


  if(day === "tuesday" || day === "thursday") {
    console.log("YOU HAVE CLASS")
  }else if( day === "saturday" || day === "sunday") {
    console.log("Its the Weekend")
  }else{
    console.log("BORING")
  }


}