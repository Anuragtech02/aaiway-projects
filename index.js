const handleSubmit = async (e) => {
  e.preventDefault();
  //   console.log(e);
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const btn = document.getElementById("submit-btn");
  btn.style.backgroundColor = "grey";

  // console.log({ name, email, subject, message });

  await fetch("https://aaiwayindia.com:5001/mail", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      subject: subject.value,
      msg: message.value,
    }),
  })
    .then((res) => {
      alert("Succesfully Submitted :)");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
      btn.style.backgroundColor = "var(--primaryColor)";
    })
    .catch((e) => alert("Something went wrong :("));
};
