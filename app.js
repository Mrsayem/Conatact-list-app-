// Get input element
let filterInput= document.getElementById('filterInput');
filterInput.addEventListener('keyup',filterValue);
function filterValue()
{
  let filterNames = document.getElementById('filterInput').value.toUpperCase();
  let ul=document.getElementById('names');
  let li=ul.getElementsByClassName('li.li-list-group-item');
  for(let i=0;i<li.length;i++)
  {
    let a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.value.toUpperCase().indexOf(filterNames)>-1)
    {
      li[i].style.display='';
    }
    else
    li[i].style.display='none';
  }
}