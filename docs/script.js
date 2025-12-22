const users = [
  {
    name: "Aayusha Shrestha",
    pic: "https://images.unsplash.com/photo-1758183583798-b7038bca9272?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A student who is currently doing her Bachelors",
  },
  {
    name: "John Doe",
    pic: "https://images.unsplash.com/photo-1757967350443-69b8ae5ee699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D",
    bio: "A passionate web developer and designer",
  },
  {
    name: "Jane Smith",
    pic: "https://images.unsplash.com/photo-1756244845801-2b7ae1d67ddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D",
    bio: "A creative artist and content creator",
  },
  {
    name: "Michael Lee",
    pic: "https://plus.unsplash.com/premium_photo-1757109141202-9424dea6782b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D",
    bio: "An entrepreneur and technology enthusiast",
  },
  {
    name: "Sophia Brown",
    pic: "https://images.unsplash.com/photo-1757495404191-e94ed7e70046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D",
    bio: "A travel blogger who loves photography",
  },
];

function showUsers(arr) {

    document.querySelector(".cards").innerHTML = " ";
    
  if (arr.length === 0) {
    const p = document.createElement("p");
    p.textContent = "The person is not available";
    p.style.color = "red";
   document.querySelector(".cards").appendChild(p);
    return;
  }

  arr.forEach((user) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = user.pic;
    image.classList.add("bg-img");

    const blurred = document.createElement("div");
    blurred.style.backgroundImage = `url(${user.pic})`;
    blurred.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.append(para);

    card.append(image);
    card.append(blurred);
    card.append(content);

    document.querySelector(".cards").append(card);
  });
}

// showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function (e) {
  let newUsers = users.filter(function (user) {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });


    showUsers(newUsers);

});
