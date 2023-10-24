document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("survey-form");
  const submitButton = document.getElementById("submit-button");
  const resetButton = document.getElementById("reset-button");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");
  const popupData = document.getElementById("popup-data");

  submitButton.addEventListener("click", function () {
    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Validate form data (you can add your validation logic here)
    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !country ||
      gender.length === 0 ||
      !profession ||
      !email ||
      !mobile
    ) {
      alert("Please fill out all the required fields.");
      return;
    }

    // Display submitted data in the popup
    const popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(", ")}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
    popupData.innerHTML = popupContent;

    // Display the popup
    popup.style.display = "block";
  });

  resetButton.addEventListener("click", function () {
    // Reset the form
    form.reset();
  });

  closePopup.addEventListener("click", function () {
    // Close the popup and reset the form
    popup.style.display = "none";
    form.reset();
  });
});
