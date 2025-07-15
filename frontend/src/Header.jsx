
function Header({ pageTitle }) {
    return(
        <header>
            <h1 id="website-title">VICFLIX</h1>
            <h1 className="page-title">{pageTitle}</h1>
        </header>
    );
}

export default Header;
