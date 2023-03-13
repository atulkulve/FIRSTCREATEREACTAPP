ReactDOM.render(<h1>Hello, Welcome</h1>,document.getElementById("root"));
ReactDOM.render(<ul><li>hi</li></ul>,document.getElementById("root"));

function Navbar(){
    return (
        <>
        <h1>Atul here</h1>
        <p>lorem</p>
        </>
    );
}

function MainContent(){
    return(
        <>
        <div>
            <h2>This is Main Content</h2>
        </div>
        </>
    )
}

ReactDOM.render(
<>
    <Navbar/>
<MainContent/>
</>
,document.getElementById("root"));