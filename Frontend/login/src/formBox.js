import InputBox from "./inputBox";
function FormBox(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={`form-box ${props.type}`}>
      <span className="icon-close">
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <h2>{props.type}</h2>
      <form onSubmit={handleSubmit}>
        <div class="input-box">
          <span class="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </span>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon">
            <ion-icon name="lock-closed-outline"></ion-icon>
          </span>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="login-register">
          <p>
            Don't have an account?
            <a href="#" className="register-link">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default FormBox;
