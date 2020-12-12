const handleSubmit = async (e) => {
  e.preventDefault();
  //   console.log(e);
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log({ name, email, subject, message });

  await fetch("https://aaiwayindia.com:5001/mail", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      msg: message,
    }),
  })
    .then((res) => alert("Succesfully Submitted :)"))
    .catch((e) => alert("Something went wrong :("));
};
