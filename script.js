// Base
const body = document.getElementById("main-container");
const profile_container = document.createElement("div");
const signup_container = document.createElement("div");
const background = document.getElementById("background");

// Attributes
profile_container.setAttribute("id", "profile-page");
signup_container.setAttribute("id", "signup-page");

// Components
const logout_btn = document.getElementById("logout-btn");
const signup_btn = document.getElementById("signup-btn");
const userName = document.getElementById("username").value;
const userPassword = document.getElementById("password").value;

// Class/Objects
class User {
  constructor() {
    this.name = document.getElementById("username").value;
    this.password = document.getElementById("password").value;
    this.confirm_password = document.getElementById("confirm_password").value;
    this.email = document.getElementById("email").value;
  }
}
const user = new User();

// Event Listeners
signup_btn.addEventListener("click",registerUser);

// FIXME: Website crashes when a validation function is added.
// FIXME: logout button event listener not working/triggering
// FIXME: If input data is missing then only display error message at the bottom else set its visibility to hidden.
// TODO: Set password of the user. 
function registerUser() {
  localStorage.setItem(user.name, user.email);
  getProfile(user);
}

function removeUser() {
  console.log("Working");
  localStorage.clear();
  getSignUpPage();
}

function getProfile(user) {
  profile_container.innerHTML = `
        <div class="message">
                    <p>Signup Successful!</p>
                </div>
                <div id="profile-container">
                    <h3>Profile</h3>
                    <img src="./image_resources/Man Profile Image 2.png" alt="User">
                    <div class="user-info">
                        <p class="user-name">Full Name: ${user.name}</p>
                        <p class="user-email">Email: ${user.email}</p>
                        <p class="user-token">Token: User Token</p>
                        <p class="user-password">Password: ${user.password}</p>
                    </div>
                    <div class="button">
                        <button type="button" id="logout-btn">LOGOUT</button>
                    </div>
                </div>
        `;
  profile_container.style.display = "block";
  body.innerHTML = "";
  body.append(background, profile_container);
}

function getSignUpPage() {
  signup_container.innerHTML = `
        <form action="" method="post" id="form-container">
            <div>
                <span>Welcome Back!👋</span>
                <h2>Sign up to your account</h2>
            </div>
            <div>
                <label for="username">Your name</label> <br>
                <input type="text" name="username" id="username" placeholder="Name" required>
            </div>
            <div>
                <label for="email">Your email</label> <br>
                <input type="email" name="email" id="email" placeholder="Email" required>
            </div>
            <div>
                <label for="password">Password</label> <br>
                <input type="password" name="password" id="password" placeholder="Password" required>
            </div>
            <div>
                <label for="confirm_password">Confirm Password</label> <br>
                <input type="password" name="confirm_password" id="confirm_password" placeholder="Password" required>
            </div>
            <div class="button">
                <button type="button" id="signup-btn">Continue</button>
            </div>
            <div class="disclaimer">
                <p>Error: All fields are mandatory!</p>
            </div>
        </form>
        <div class="note">
            <span>Don't have an account? <a href="">Sign up</a></span>
        </div>`;
  profile_container.style.display = "none";
  body.innerHTML = "";
  body.append(background, signup_container);
}
