// function uploadFile(inputElement) {
//     const file = inputElement.files[0];

//     let url = URL.createObjectURL(file);
//     console.log(url)
    
//     const reader = new FileReader();
//     reader.onload = function () {
//         console.log(reader)
//         console.log('Encoded Base 64 File String:', reader.result);
//         document.body.insertAdjacentHTML('beforeend',`<img src="${reader.result}" alt="">`)
//         // const data = (reader.result).split(',')[1];
//         // const binaryBlob = atob(data);
//         // console.log('Encoded Binary File String:', binaryBlob);
//         let img = new Image(150, 150);
//         img.src = reader.result;
//         img.crossOrigin = true;
//         // document.body.append(img)
//         let audio = new Audio('https://soundcloud.com/l2share151/stayc-run2u?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing');
//         audio.play();
//     }
    

//     reader.readAsDataURL(file);
//     // reader.readAsArrayBuffer(file);
// }

