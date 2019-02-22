window.onload=function(){

function Pictures(src,width,height,className){
  this.src=src;
  this.width=width;
  this.height=height;
  this.className=className;
  this.draw=function(){
    console.log(width+" "+" "+src)
    $(".parent").after($("<img>",{src:src,class:"col-sm-4",width:"250px",height:"250px",marginLeft:"40px",border:"none"}))
    
  }
}
$("#btn").click(()=>{

let word=$("#searchInput").val()
//let url="https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=N6XuT1Qh1FnkH5vh7VtRgR31fmbLmsmH&limit=6"
let num=$("#searchNumber").val()
let picArray = ["pix.png","pix.png","pix.png","pix.png","pix.png"]
let url="https://api.giphy.com/v1/gifs/search?q="+word+"&api_key=N6XuT1Qh1FnkH5vh7VtRgR31fmbLmsmH&limit="+num+""

pixArray=[]
//let num = 3
  fetch(url)
  .then((response)=>{
    return response.json()
  })
  .then((myJson)=>{
    for (i=0;i<num;i++){
      gifUrl=myJson.data[i].images.fixed_height.url
      pixArray.push(gifUrl)
    }
  })
.then(()=>{for (i=0;i<num;i++){

  const pix= new Pictures(pixArray[i],"100px","100px","adg")
  pix.draw()
  console.log(pixArray)

}})
.then($(".startup").css("display","none"))

})



/*fetch("https://api.giphy.com/v1/gifs/search?q="+searchword+"&api_key=N6XuT1Qh1FnkH5vh7VtRgR31fmbLmsmH&limit=6")
.then(function(response){
  return response.json()
})
*/








}