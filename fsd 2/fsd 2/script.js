function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    // 1️⃣ Check for empty fields (including spaces)
    if (!username || !email || !phone || !password || !confirmPassword) {
      errorMessage.textContent = "⚠️ All fields are required.";
      return false;
    }
  
    // 2️⃣ Validate phone number - numeric and 10 digits
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      errorMessage.textContent = "⚠️ Phone number must be 10 digits and numeric only.";
      return false;
    }
  
    // 3️⃣ Validate password
    // Must be at least 7 chars, contain 1 uppercase letter, 1 digit, and 1 special character (&,$,#,@)
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
    if (!passwordPattern.test(password)) {
      errorMessage.textContent = 
        "⚠️ Password must be ≥7 chars, include 1 capital letter, 1 digit, and 1 special (&,$,#,@).";
      return false;
    }
  
    // 4️⃣ Password match check
    if (password !== confirmPassword) {
      errorMessage.textContent = "⚠️ Passwords do not match.";
      return false;
    }
  
    // ✅ Success message
    errorMessage.style.color = "green";
    errorMessage.textContent = "✅ Registration successful!";
    document.getElementById("registrationForm").reset();
    return false; // Prevent actual submission for demonstration
  }
  