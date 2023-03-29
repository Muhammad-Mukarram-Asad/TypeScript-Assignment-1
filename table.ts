//const target_div = document.getElementById("api_div")! as HTMLInputElement;
const table_div = document.getElementById("t_body")! as HTMLInputElement;

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(res => {
//     for(let i = 0 ; i< res.length; i++)
//     {
//         let h1 = document.createElement("h1");
//         h1.innerHTML = `Id of the user is: ${res[i].id}`;

//         let h2 = document.createElement("h2");
//         h2.innerHTML = `Name of the user is: ${res[i].name}`;

//         let h3 = document.createElement("h3");
//         h3.innerHTML = `Email of the user is: ${res[i].email}`;

//         let h4 = document.createElement("h4");
//         h4.innerHTML = `Website of the user is: ${res[i].website}`;

//         let h5 = document.createElement("h5");
//         h5.innerHTML = `Address of the user is: ${res[i].address['city']} ${res[i].address['street']}`;
        
//         let h6 = document.createElement("h6");
//         h6.innerHTML = `Contact number of the user is: ${res[i].phone}`;

//         let div = document.createElement("div");

//         div.append(h1,h2,h3,h4,h5,h6);
//         target_div.appendChild(div);
//     }
// })





fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(res => {
    for(let i = 0 ; i< res.length; i++)
    {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");

        td1.innerHTML = `${res[i].id}`;
        td2.innerHTML = `${res[i].name}`;
        td3.innerHTML = `${res[i].email}`;
        td4.innerHTML = `${res[i].website}`;
        td5.innerHTML = `${res[i].address['city']} ${res[i].address['street']}`;
        td6.innerHTML = `${res[i].phone}`;

        td1.style.color = "black";
        td1.style.fontSize = "22px";
        td1.style.padding = "10px"

        td2.style.color = "blue";
        td2.style.fontSize = "22px";
        td2.style.padding = "10px";

        td3.style.color = "green";
        td3.style.fontSize = "22px";
        td3.style.padding = "10px"

        td4.style.color = "purple";
        td4.style.fontSize = "22px";
        td4.style.padding = "10px"

        td5.style.color = "brown";
        td5.style.fontSize = "22px";
        td5.style.padding = "10px"

        td6.style.color = "indigo";
        td6.style.fontSize = "22px";
        td6.style.padding = "10px"
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        table_div.appendChild(tr);
    }
})
