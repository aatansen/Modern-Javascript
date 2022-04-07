// callbacks
/*
example 4
console.log("Example 4");
function showLoadingScreen(){
    console.log("1 Loading Screen Appeared");
}
function hideLoadingScreen(){
    console.log("4 Loading Screen Hidden");
}
function getDataFromAPI(){
    console.log("2 start pulling data");
    setTimeout(()=>{
        console.log("3 Finished pulling data");
    },2000);
}
showLoadingScreen();
getDataFromAPI();
hideLoadingScreen();

output:
1 Loading Screen Appeared
2 start pulling data
4 Loading Screen Hidden
3 Finished pulling data
*/

// fixing example 4
console.log("Fixing Example 4");
function showLoadingScreen2(){
    console.log("1 Loading Screen Appeared");
}
function hideLoadingScreen2(){
    console.log("4 Loading Screen Hidden");
}
function getDataFromAPI2(callback2){
    console.log("2 start pulling data");
    setTimeout(()=>{
        console.log("3 Finished pulling data");
        callback2();
    },2000);
}
showLoadingScreen2();
getDataFromAPI2(hideLoadingScreen2);
