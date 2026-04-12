var john=true;
var random;
function showNextUser() {
    if(john==true) {
        document.getElementById("userName").innerHTML="jane_doe"
        document.getElementById("designation").innerHTML="Interior Designer"
        document.getElementById("image").setAttribute("src","./img_jane_doe.png");
        john=false;
    }
    else {
        document.getElementById("userName").innerHTML="john_doe"
        document.getElementById("designation").innerHTML="Architect"
        document.getElementById("image").setAttribute("src","./img_john_doe.png");
        john=true;
        
    }
}
async function showRandomUser() {
    random=true;
    // https://randomuser.me/api
    /*
        show username,designation in html
        if user is male show john doe
        if user is female show 
     */
    const api=await fetch('https://randomuser.me/api')
    const data=await api.json();
    const user=data.results[0];
    document.getElementById("userName").innerHTML=user.name.title+"."+user.name.first+" "+user.name.last;
    document.getElementById("email").innerHTML=user.email;
    const gender=user.gender;
    if(gender=="male") {
        document.getElementById("image").setAttribute('src','./img_john_doe.png');
    }
    else {
        document.getElementById("image").setAttribute('src','./img_jane_doe.png');
    }
    if(random) {
        const image=user.picture.large;
        document.getElementById("image").setAttribute("src",image);
    }

}