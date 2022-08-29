function onFormSubmit() {
  let formData = readFormData();
  insertProducts(formData);
}
function readFormData() {
  let formData = {};
  formData["productName"] = document.getElementById("productName").value;
  formData["productID"] = document.getElementById("productId").value;
  formData["date"] = document.getElementById("date").value;
  return formData;
  
}
function validateForm() {
  if( document.getElementById('productId').value === '' ){
    alert('Product ID is empty');
  }
  if( document.getElementById('productName').value === '' ){
    alert('Product Name is empty');
  }
  if( document.getElementById('date').value === '' ){
    alert('Date field is empty');
  }
}
sessionStorage.setItem('form', JSON.stringify(formData));

function insertProducts(data) {
  var table = document
    .getElementById("productlist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  productName = newRow.insertCell(0);
  productName.innerHTML = data.productName;
  productID = newRow.insertCell(1);
  productID.innerHTML = data.productID;
  expiry = newRow.insertCell(2);
  expiry.innerHTML = data.date;
  cell4 = newRow.insertCell(3);
  let field = document.querySelector("#date"); //
  let expirydate = new Date(field.value);
  let todayDate = new Date();
  let distance = expirydate - todayDate;
  let status = Math.floor(distance / (1000 * 60 * 60 * 24) + 1);
  if (status < 0) {
    cell4.innerHTML = "Expired";
  }
  if (status > 0) {
    cell4.innerHTML = "Good";
  }
  if (status === 3) {
    alert("3 days Remaining, Please use!");
  }
}
