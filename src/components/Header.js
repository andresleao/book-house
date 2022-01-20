import '../App.css';

function Header() {
  return (
    <header
      style={{
        height: '20vh',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 5px 6px -2px #000000',
      }}
    >
      <h1 className="title">
        Book<span style={{ color: '#FFC300' }}>House</span>
      </h1>
    </header>
  );
}

export default Header;
