//Here the whole code is put into a parenthesis and this is known as IIFE:Immediately Invoked Function Expressions
//it is used whena function doesn't need to be called before being used
//e.g an anonymous function as we have here
(function(){
let newLink = document.createElement("a");//creating an anchor element
var allParagraphs = document.getElementsByTagName("p");//creatingan identifier store all paragraphs 
let firstParagraph = allParagraphs[0];// storing the first paragraph in paragraph as a separate identifier

function toggleCopy(e){
//here's a function that loops through the paragraphs and perform certain action based on certain conditions
    for(let paragraph of allParagraphs){

        if(paragraph == firstParagraph/*allParagraphs[0]*/){
            continue;//if when the iteration is in the first paragraph exit the code within the for-loop and and move to the next iteration
        }
        if(paragraph.style.display === "none"){
            paragraph.style.display = "block";
        }else{
            paragraph.style.display = "none";
        }
        
    }
    //this.remove(); or newLink.remove works as they both refer to the node 
    //element upon which the containing function is called
        if(this === newLink){
            this.remove();
        }

        if(e !== undefined && e.preventDefault !== undefined){
            e.preventDefault();
        }
    
}

newLink.setAttribute("href", "#");
newLink.setAttribute("class","more-link");
newLink.innerHTML = "Read more";
newLink.addEventListener("click",toggleCopy);

/*for(let paragraph of allParagraphs){

    if(paragraph == allParagraphs[0]){
        continue;
    }
    
    paragraph.style.display = "none";
}*/
toggleCopy();

firstParagraph.appendChild(newLink);

}());

