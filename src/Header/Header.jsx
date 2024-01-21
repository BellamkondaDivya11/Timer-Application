import "./Header.css";

function Header({ isloggedin, logout }) {
  return (
    <div className="container">
      <div className="title">
        <h1>Context Concept</h1>
      </div>

      <div className="menus">
        <a href="#">HOME</a>
        <a href="#">PRODUCTS</a>
        <a href="#">PROFILE</a>
        <a href="#">HELP</a>
        {isloggedin ? (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
