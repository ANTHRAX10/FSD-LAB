// --------------------
// Vanilla JavaScript DOM Manipulation
// --------------------

// 1. Access and change text using getElementById + innerHTML
function changeText() {
  document.getElementById("description").innerHTML =
    "Text changed dynamically using <b>innerHTML</b> and JavaScript!";
}

// 2. Change CSS properties using getElementsByClassName + getElementsByTagName
function changeStyle() {
  const title = document.getElementById("mainTitle");
  title.style.color = "crimson";
  title.style.position = "relative";
  title.style.left = "20px";

  const paragraphs = document.getElementsByTagName("p");
  paragraphs[0].style.color = "green";

  const textClass = document.getElementsByClassName("text")[0];
  textClass.style.fontWeight = "bold";
}

// 3. Change image source on button click
function changeImage() {
  document.getElementById("demoImage").src =
    "https://via.placeholder.com/200/ff7f7f/000000?text=Image+Changed";
}

// 4. Add a text node and attach to parent node
function addNode() {
  const newText = document.createTextNode(" → This is a new dynamically added text node!");
  const parent = document.getElementById("description");
  parent.appendChild(newText);
}

// 5. Delete a node
function deleteNode() {
  const image = document.getElementById("demoImage");
  if (image) {
    image.parentNode.removeChild(image);
  } else {
    alert("Image already deleted!");
  }
}

// --------------------
// jQuery Section
// --------------------
$(document).ready(function () {
  // 1. Change button text using jQuery
  $("#jqButton").click(function () {
    $(this).text("Text Changed with jQuery!");
  });

  // 2. Set background image using jQuery CSS property
  $("#bgButton").click(function () {
    $("body").css("background-image", "url('https://via.placeholder.com/1000x600/89CFF0/000000?text=Background+Set')");
    $("body").css("background-size", "cover");
  });

  // 3. Access HTML form data using jQuery
  $("#formBtn").click(function () {
    let name = $("#name").val();
    let email = $("#email").val();

    if (name.trim() === "" || email.trim() === "") {
      $("#output").text("Please fill in both fields!");
    } else {
      $("#output").text(`Form Data Accessed via jQuery → Name: ${name}, Email: ${email}`);
    }
  });

  // 4. Add attribute using jQuery
  $("#addAttrButton").click(function () {
    $("#mainTitle").attr("title", "This title was added using jQuery!");
    alert("Attribute 'title' added to heading!");
  });
});
