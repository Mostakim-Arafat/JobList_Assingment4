console.log("function connected.")
function idtext(id) {
    return document.getElementById(id).innerText
}
let jobCount = document.getElementsByClassName('jobCount')
let cardPart = document.querySelectorAll('main div section')
// button function
document.getElementById('interviewList').addEventListener('click', function () {
    //hiding card part
    for (const i of cardPart) {
        i.classList.add('hidden')
    }
    // hide null part
    document.getElementById('nullPart').classList.add('hidden')

    if (idtext('interviewCount') == 0) {
        document.getElementById('nullPart').classList.remove('hidden')
    }
    else {
        //show interview list

        for (const i of Btn) {
            if (i.innerText === 'interviewed') {
                i.parentNode.parentNode.classList.remove('hidden')

            }
        }


    }
})
document.getElementById('rejectList').addEventListener('click', function () {
    //hiding card part
    for (const i of cardPart) {
        i.classList.add('hidden')
    }
    document.getElementById('nullPart').classList.add('hidden')
    if (idtext('rejectCount') == 0) {
        document.getElementById('nullPart').classList.remove('hidden')
    }
    else {
        //unhide them who has batch interviewed.

        for (const i of Btn) {
            if (i.innerText === 'rejected') {
                i.parentNode.parentNode.classList.remove('hidden')

            }
        }


    }

})
document.getElementById('allList').addEventListener('click', function () {
    //hiding card part
    for (const i of cardPart) {
        i.classList.add('hidden')
    }
    document.getElementById('nullPart').classList.add('hidden')
    if (jobCount.innerText !== 0) {
        for (const i of cardPart) {
            i.classList.remove('hidden')
        }
    }
    else {
        document.getElementById('nullPart').classList.remove('hidden')
    }

})
// delete icon
const deleteIcon = document.querySelectorAll('main section i')
for (const i of deleteIcon) {
    i.addEventListener('click', function () {
        i.parentNode.parentNode.parentNode.classList.add('hidden')
        // change of jobCount
        for (const i of jobCount) {
            i.innerText = Number(i.innerText) - 1
        }
    })
}


// job count
const Btn = document.querySelectorAll('main section button')

for (const i of Btn) {
    if (i.innerText === "INTERVIEW") {
        const ielement = i.parentNode.parentNode.querySelector('button')
        i.addEventListener('click', function () {
            //increase interview count
            if (ielement.innerText === 'rejected') {
                document.getElementById('interviewCount').innerText = Number(idtext('interviewCount')) + 1
                document.getElementById('rejectCount').innerText = Number(idtext('rejectCount')) - 1
                i.parentNode.parentNode.classList.add('hidden')
            }
            else if (ielement.innerText === 'NOT APPLIED') {
                document.getElementById('interviewCount').innerText = Number(idtext('interviewCount')) + 1
            }
            //add badge 
            ielement.innerText = "interviewed"
            ielement.style.backgroundColor = '#BBF7D0'
            ielement.style.color = '#16A34A'




        })
    }
    else if (i.innerText === "REJECTED") {
        const ielement = i.parentNode.parentNode.querySelector('button')
        i.addEventListener('click', function () {
            //increase interview count
            if (ielement.innerText === 'interviewed') {
                document.getElementById('rejectCount').innerText = Number(idtext('rejectCount')) + 1
                document.getElementById('interviewCount').innerText = Number(idtext('interviewCount')) - 1
                i.parentNode.parentNode.classList.add('hidden')

            }
            else if (ielement.innerText === "NOT APPLIED") {
                document.getElementById('rejectCount').innerText = Number(idtext('rejectCount')) + 1
            }
            //add badge
            i.parentNode.parentNode.querySelector('button').innerText = "rejected"
            i.parentNode.parentNode.querySelector('button').style.backgroundColor = '#FECACA'
            i.parentNode.parentNode.querySelector('button').style.color = '#EF4444'



        })
    }
}

// color toggle
const btnId = ['allList', 'interviewList', 'rejectList']
function design(id) {
    for (const t of btnId) {
        const getid = document.getElementById(t)
        if (t === id) {
            getid.classList.remove('btn-primary')
            getid.classList.add('btn-primary')
        }
        else {
            getid.classList.add('btn-primary')
            getid.classList.remove('btn-primary')
        }
    }
}


// job toggle

