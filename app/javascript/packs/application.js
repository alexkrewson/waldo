// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

console.log('application.js works')

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
    afterLoaded();
}

function afterLoaded() {


    document.getElementById('loadDate').innerHTML =  new Date()

    let result = document.getElementById('result').innerHTML

    // console.log('@result: ' + @result)
    if (result == 'success') {

        let successTime = document.getElementById('attemptDurationReceived').innerHTML
        console.log('successTime: ' + successTime)
        let x1 = document.getElementById('x1').innerHTML
        console.log('Number(x1): ' + Number(x1))
        let y1 = document.getElementById('y1').innerHTML
        console.log('Number(y1): ' + Number(y1))
        console.log('good choice')
        console.log(result)

        let marker = document.createElement('div')
        marker.className = 'marker'
        marker.style.left = x1 + 'px'
        marker.style.top = y1 + 'px'

        let contentDiv = document.getElementById('contentDiv')
        contentDiv.appendChild(marker)

    } else {
        console.log('poor choice')
        console.log(result)
    }

    let contentDiv = document.getElementById('contentDiv')
    let mainDiv = document.createElement('div')
    mainDiv.id = 'mainDiv'
    contentDiv.appendChild(mainDiv)


    for (let y = 100; y >= 1; y--) {
        for (let x = 1; x <= 100; x++) {
            let newChild = document.createElement('div')
            newChild.id = x + ',' + y
            newChild.className = 'gridBox'

            newChild.addEventListener("click", function (e) {

                let targetBox = document.getElementById('targetBox')
                targetBox.classList.toggle("show");
                targetBox.style.left = e.pageX - 50 + 'px'
                targetBox.style.top = e.pageY - 50 + 'px'

                let loadDate = new Date(document.getElementById('loadDate').innerHTML)
                // let loadTime = loadDate.getTime()

                let clickDate = new Date()
                let clickTime = clickDate.getTime()
                let loadTime = loadDate.getTime()

                let attemptDuration = (clickDate - loadDate)/ 1000
                console.log('clickTime: ' + clickTime)
                console.log('loadTime: ' + loadTime)

                console.log('clickDate: ' + clickDate)
                console.log('loadDate: ' + loadDate)

                console.log('attemptDuration: ' + attemptDuration)

                document.getElementById('dropDownId').classList.toggle("show");

                document.getElementById('dropDownId').style.top = e.pageY + 'px'
                document.getElementById('dropDownId').style.left = e.pageX + 60 + 'px'

                document.getElementById('clickCoordinatesId').value = e.target.id;
                document.getElementById('pageX').value = e.pageX - 10;
                document.getElementById('pageY').value = e.pageY - 5;
                document.getElementById('attemptDuration').value = attemptDuration;
                document.getElementById('clickDate').value = clickDate




                // let xBox1 = Number(e.target.id.split(',')[0]) - 10
                // let xBox2 = Number(e.target.id.split(',')[0]) + 10
                // let yBox1 = Number(e.target.id.split(',')[1]) - 10
                // let yBox2 = Number(e.target.id.split(',')[1]) + 10

                // console.log('xBox1: ' + xBox1)
                // console.log('xBox2: ' + xBox2)
                // console.log('yBox1: ' + yBox1)
                // console.log('yBox2: ' + yBox2)

                // let gridBoxes = document.getElementsByClassName('gridBox')
                // console.log('gridBoxes.length: ' + gridBoxes.length)

                // for (let gridBox of gridBoxes) {
                //     let gX = Number(gridBox.id.split(',')[0])
                //     let gY = Number(gridBox.id.split(',')[1])

                //     if (gX == xBox1) {
                //         console.log('gX: ' + gX)

                //         let stupidThing = document.getElementById(gridBox.id)
                //         stupidThing.style.backgroundColor = 'red'
                //         console.log('stupidThing: ' + stupidThing)
                //     }
                // }




                // let list = document.getElementsByClassName("show");

                // // is anything showing?
                // if (list.length > 0) {
                //     for (let item of list) {
                //         // console.log(item.id);
                //         // item.classList.toggle('show')

                //     }                    
                // } else {
                //     console.log('nothing showing')
                //     // document.getElementById('dd' + e.target.id).classList.toggle("show");
                //     document.getElementById('dropDownId').classList.toggle("show");
                //     // console.log(e.pageX)
                //     // console.log(e.pageX)

                // }


                // document.getElementById(e.target.id).style.top = e.pageY
                // document.getElementById(e.target.id).style.left = e.pageX

                // console.log('e.pageX: ' + e.pageX)
                // console.log('e.pageY: ' + e.pageY)





                // document.getElementById(e.target.id).style.top = e.pageY
                // document.getElementById(e.target.id).style.left = e.pageX


                // let elements = document.getElementsByClassName('show')
                // if (elements) {
                //     // console.log('elements: ' + elements)
                //     // elements.forEach(function (element) {
                //     //     console.log('element:' + element)
                //     // })
                //     let list = document.getElementsByClassName("show");
                //     for (let item of list) {
                //         console.log(item.id);
                //         item.classList.toggle('dropdown-content')
                //     }
                // }


            });





            // newButton.addEventListener("click", function (e) {
            //     console.log(e.target.id)
            //     console.log('working')
            //     console.log('e.pageX: ' + e.pageX)
            //     document.getElementById('dd' + e.target.id).classList.toggle("show");
            //     document.getElementById(e.target.id).style.top = e.pageY
            //     document.getElementById(e.target.id).style.left = e.pageX
            // });


            // let dropDown1 = document.createElement('a')
            // dropDown1.innerHTML = 'Waldo'
            // // let dropDown2 = document.createElement('a')
            // // dropDown2.innerHTML = 'Alex'
            // // let dropDown3 = document.createElement('a')
            // // dropDown3.innerHTML = 'Tilly'

            // dropDowns.appendChild(dropDown1)
            // // dropDowns.appendChild(dropDown2)
            // // dropDowns.appendChild(dropDown3)

            // newChild.appendChild(dropDowns)


            mainDiv.appendChild(newChild)
        }
    }



}