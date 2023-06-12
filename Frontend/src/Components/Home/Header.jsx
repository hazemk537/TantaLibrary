import "./Home.css"
function Header(props) {
  return (
    <header class="Header">
       <img src="../../../../assets/logo.png" className="logo" 
       />
      <nav class="navigation">
        <button
          class="btnLogin-popup"
          onClick={() => props.onFormSwitch("login")}
        >
          Login
        </button>
      </nav>
    </header>
  );
}
export default Header;
