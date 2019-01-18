
function title_validation(title)
{
    var tt= document.getElementById(title).value;
    
   

    if(tt.length==0|| tt.length>20|| tt.length<5)
    {
        alert("Title should not be empty/ length be between 5 to 20");
        title.focus();
        return false;
        
    
    }
    if(title.value.match( /^[0-9a-zA-Z]*$/))
    {
        return true;
    }
    else
    {
        alert("The title for mess should be Alphanumeric(Alphabets with Numbers)");
        title.focus();
        return false;
    }
    

    
}

function allLetter(uname)
{  
var nm= document.getElementById("uname").value;
var letters = /^[A-Za-z]+$/;
if(nm.value.match(letters))
{
}
else
{
alert("Name must have alphabet characters only");
uname.focus();
return false;
}
function wordcount(uname)
{
    var count=0;
    words= str.split(" ");
    for(i=0;i<words.length;i++)
    {
        if(words[i]!="")
        count+=1;
    }
    if(count!=3)
    {
        alert("Please enter  only three words ");
        return false;
    }

}

}

function position_val(position, mx,my)
{
    var letters = /^[A-Za-z]+$/;
    if(position.length>my || position.length<mx|| position.length==0)
    {
       alert("Position  field should not be mepty/ lenght be between "+mx+" to "+my);
       position.focus();
       return false
    }
 
if(position.value.match(letters))
{
    return true
}
else
{
    alert("Position name should contain only alphabtic characters");
    position.focus();
    return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function staddval(stadd,mx,my)
{
    if(stadd.length==0|| stadd.length>=my|| stadd.length<mx)
    {
        alert("Address field should not be empty/ length be between "+mx+" to "+my);
        stadd.focus();
        return false;
        
    
    }
}
function cityval(city,mx,my)
{
    if(city.length==0|| city.length>=my|| city.length<mx)
    {
        alert("Address field should not be empty/ length be between "+mx+" to "+my);
        city.focus();
        return false;
        
    
    }
}
function stateval(state,mx,my)
{
    if(state.length==0|| state.length>=my|| state.length<mx)
    {
        alert(" State/Region field should not be empty/ length be between "+mx+" to "+my);
        state.focus();
        return false;
        
    
    }
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
   if(uzip.length=0||uzip.length<6||uzip.length>6)
   {
       alert(" Please Enter the 6 digit zip code");
       zip.focus();
       return false;
   }
   else
   {
       return true;
   }
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}


function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}

function phoneval(phone)
{
    var patt= /^[7-9]\d{9}$/;
    if(phone.value.match(patt))
    {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    
    }
    else
    {
        alert("Phone No should be 10 digits\ Starting from 7,8 or 9 ");
    }

}




function formValidation()
{
var title =document.registration.title;
var uname = document.registration.uname;
var company= document.registration.company;
var uemail= document.registration.email;
var stadd= document.registration.stadd;
var stadd2= document.registration.company;

var city= document.registration.city;
var state= document.registration.state;
var uzip = document.registration.zip;
var ucountry = document.registration.country;
var phone= document.registration.phone;



if(title_validation(title))
{
if(allLetter(uname))
{
if(company.length<50)       
{
if(position_val(position,3,10)) 
{

if(ValidateEmail(uemail))
{
if(staddval(stadd,3,25))
{
if(stadd2.length<25)
{
if(cityval(city,3,15))
{
if(stateval(state,3,25))
{
if(countryval(ucountry))

{
if(allnumeric(uzip))
{
if(phoneval(phone))
{

}
}
}
}
}
}
}
}
}
}
}


}
}



