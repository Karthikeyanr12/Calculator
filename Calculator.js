let exp=JSON.parse(localStorage.getItem('exp'))||'';
const pElem=document.querySelector('.result');
function action(x)
{
    if (x==='=')
    {
        exp=eval(exp);
        pElem.innerHTML=exp;
        exp='';
        localStorage.setItem('exp',JSON.stringify(exp));
        return
    }
    else if(x=='')
    {
        exp='';
        pElem.innerHTML=0;
        localStorage.setItem('exp',JSON.stringify(exp));   
        return
    }
    exp+=x;
    pElem.innerHTML=exp;
    localStorage.setItem('exp',JSON.stringify(exp));

}