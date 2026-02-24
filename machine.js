console.log("function connected.")
function idtext(id){
   return document.getElementById(id).innerText
}
let jobCount = document.getElementsByClassName('jobCount')
// button function
document.getElementById('interviewList').addEventListener('click',function(){
    document.getElementById('cardContainer').classList.add('hidden')
    document.getElementById('nullPart').classList.add('hidden')
    if(idtext('interviewCount') == 0){
        document.getElementById('nullPart').classList.remove('hidden')
    }
    else{

    }

})
document.getElementById('rejectList').addEventListener('click',function(){
    document.getElementById('cardContainer').classList.add('hidden')
    document.getElementById('nullPart').classList.add('hidden')
    if(idtext('rejectCount') == 0){
        document.getElementById('nullPart').classList.remove('hidden')
    }
    else{

    }

})
document.getElementById('allList').addEventListener('click',function(){
    document.getElementById('cardContainer').classList.add('hidden')
    document.getElementById('nullPart').classList.add('hidden')
    if( jobCount.innerText !== 0){
        document.getElementById('cardContainer').classList.remove('hidden')
    }
    else{

    }

})
// delete icon
const deleteIcon = document.querySelectorAll('main section i')
for(const i of deleteIcon){
    i.addEventListener('click',function(){
        i.parentNode.parentNode.parentNode.classList.add('hidden')
        // change of jobCount
        for(const i of jobCount){
            i.innerText = Number(i.innerText)-1
        }
    })
}


// job count
const Btn = document.querySelectorAll('main section button')
for(const i of Btn){
    if(i.innerText === "INTERVIEW"){
        i.addEventListener('click',function(){
            //add badge 
            i.parentNode.parentNode.querySelector('button').innerText = "interviewed"
            i.parentNode.parentNode.querySelector('button').style.backgroundColor = '#BBF7D0'
            i.parentNode.parentNode.querySelector('button').style.color = '#16A34A'
            //increase interview count
               //if//rejected or applied
           document.getElementById('interviewCount').innerText = Number(idtext('interviewCount')) + 1
            //show in interview page

        })
    }
    else if (i.innerText === "REJECTED"){
        i.addEventListener('click',function(){
         //add badge
         i.parentNode.parentNode.querySelector('button').innerText = "rejected"
            i.parentNode.parentNode.querySelector('button').style.backgroundColor = '#FECACA'
            i.parentNode.parentNode.querySelector('button').style.color = '#EF4444'



        })
    }
}
    
// job toggle
