function checkageindays() {
  let name = prompt("Please Enter Ypur Name:");
  let birth_year = prompt("Enter Your Birth Year. :)");

  if (name == "" || birth_year == "") {
    document.getElementById("result").innerHTML =
      "Please Enter Your Name and DOB's Year";
  } else {
    let ageindays = (2021 - birth_year) * 365;

    let h1 = document.createElement("h1");

    h1.setAttribute("id", "result_in_days");

    let Text_wirte = document.createTextNode(
      name + " is " + ageindays + " Days Old"
    );

    h1.appendChild(Text_wirte);

    document.getElementById("result").appendChild(h1);
  }
}

function reset_all() {
  document.getElementById("result_in_days").remove();
}

// Challange No 2 Coding start from here
// Challange No 2 Coding start from here
// Challange No 2 Coding start from here

function add_image() {
  let addimages = document.createElement("img");
  addimages.src = "./download.png";

  document.getElementById("res2").appendChild(addimages);
  addimages.setAttribute("id", "imgs"); // This is for removing images in the remove function (at line 40)
}
function remove_image() {
  document.getElementById("imgs").remove();
}
