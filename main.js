

let left=40
let book=0
let ar=[]
let click=0
let cupApp=document.getElementById("cupapp")
cupApp.disabled=true
let ne=document.getElementById("next-button")
ne.disabled=true


function getPrice(id){

    

    if(ar.includes(id)){
       
        alert("you can't select it again.")
    }
    
    else{
        
        if(ar.length<4){
            click=1
            
            ar.push(id)
            let element=document.getElementById(id)
            element.style.backgroundColor='Green'
            element.style.color='white'
            left=left-1
            let leftSeat=document.getElementById("left-seat")
            leftSeat.innerText=`${left}`
            book=book+1
            let bookSeat=document.getElementById("book-seat")
            bookSeat.innerText=`${book}`
            let addPro=document.getElementById("add-pro")
            let newpro=document.createElement("p")
            newpro.innerText=`${id} --------------- Economy --------- 550`
            addPro.append(newpro)
            priceSum()
            

            if(book===4){
                cupApp.disabled=false
            }
            
            let phone=document.getElementById('phone')
            phone.addEventListener("keyup",function (){
                
                if(click===1 && phone.value.length>0){
                ne.disabled=false
            }
                
            })


            
        }
    }
    
}


let phone=document.getElementById('phone')

if(left>36 && phone.value.length>0){
    
    ne.disabled=false
}


let total=0
function priceSum(){

    total=total+550
    

    let totalPrice=document.getElementById('total-price')
    totalPrice.innerText=`${total}`
    let grand=document.getElementById('grand')
    grand.innerText=`${total}`
    
}



function cupon(){
    let getCupon=document.getElementById("cup")
    if(getCupon.value==='NEW15' && book===4){
        
        let dis=(15/100)*total
        let disPrice=document.getElementById("dis-price")
        let appdisPrice=document.createElement('p')
        appdisPrice.innerHTML=`<h1 class="font-inter font-medium text-base pt-1">Discount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  BDT <span id="total-price">${dis}</span></h1>`
        disPrice.append(appdisPrice)
        let haowa=document.getElementById("haowa")
        haowa.classList.add('hidden')
        let grand=document.getElementById('grand')
        grand.innerText=`${total-dis}`

    }
    else if(getCupon.value=== 'Couple 20' && book===4){
        let dis=(20/100)*total
        let disPrice=document.getElementById("dis-price")
        let appdisPrice=document.createElement('p')
        appdisPrice.innerHTML=`<h1 class="font-inter font-medium text-base pt-1">Discount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  BDT <span id="total-price">${dis}</span></h1>`
        disPrice.append(appdisPrice)
        let haowa=document.getElementById("haowa")
        haowa.classList.add('hidden')
        let grand=document.getElementById('grand')
        grand.innerText=`${total-dis}`
    }

    else{

        
        alert("Enter valid coupon")
        
    }
}

function next(){
    let nextButton=document.getElementById('main')
    nextButton.classList.add('hidden')
    let success=document.getElementById('suc')
    success.classList.remove('hidden')
}

function con(){
    let main=document.getElementById('main')
    main.classList.remove('hidden')
    let success=document.getElementById('suc')
    success.classList.add('hidden')
    
}
