script1.js

var selectedRow = null;
function onFormSubmit() {
var formData = readFormData();
if(isValid()){
    if (selectedRow == null) {
    insertNewRecord(formData);
    alert("Your details are saved Sucessfully........");
  }
else{
  updateRecord(formData);
}
  resetForm();
}
}

function readFormData() {
  var formData = {};
  formData["stuname"] = document.getElementById("stuname").value;
  formData["stucourse"] = document.getElementById("stucourse").value;
  formData["stucollege"] = document.getElementById("stucollege").value;
  
  return formData;
}
function resetForm() {
  document.getElementById("stuname").value = "";
  document.getElementById("stucourse").value = "";
  document.getElementById("stucollege").value = "";
 
  selectedRow = null;
}
function insertNewRecord(data) {
  var table = document
    .getElementById("stulist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.stuname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.stucourse;
  
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.stucollege;
 
  cell6 = newRow.insertCell(3);
  cell6.innerHTML = `<a onClick="onEdit(this)">Update</a><a onClick="onDelete(this)">Delete</a>`;
  
}
function onEdit(td)
{if(confirm("Are you upadate your details")){
selectedRow=td.parentElement.parentElement; 
document.getElementById("stuname").value=selectedRow.cells[0].innerHTML;
document.getElementById("stucourse").value=selectedRow.cells[1].innerHTML;
document.getElementById("stucollege").value=selectedRow.cells[2].innerHTML;
}
}
function updateRecord(formData)
{
  alert("Your form updated sucessfully.......")
selectedRow.cells[0].innerHTML=formData.stuname;
selectedRow.cells[1].innerHTML=formData.stucourse;
selectedRow.cells[2].innerHTML=formData.stucollege;

}
function onDelete(td)
{
if(confirm("are you want to delete this record")){
  row=td.parentElement.parentElement;
  document.getElementById("stulist").deleteRow(row.rowIndex);
  resetForm();
}
}

function isValid(){
var a=document.getElementById("stuname").value;
// var  b = document.getElementById("facDep").value;
// var c= document.getElementById("facSub").value;
// var d= document.getElementById("facAge").value;
//  var e= document.getElementById("facPlace").value;
if(a==""|| a==null ){return false;}
else
{return true;}

} 

