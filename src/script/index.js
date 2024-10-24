let heading = document.createElement("h1");
heading.textContent = `${moment().format("MMMM Do YYYY, h:mm:ss a")}`;
document.body.appendChild(heading);
