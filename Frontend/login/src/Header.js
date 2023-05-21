function Header(props) {
  return (
    <header class="Header">
      <img src="logo_.png" class="logo" />
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
