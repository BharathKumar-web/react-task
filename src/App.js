import Home from "./features/Home";
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter is now used inside Routes
import { Routes, Route } from 'react-router-dom'; 
import Form from "./forms/Form";
import "./App.css";


function App() {
  return (
    <div >
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
</BrowserRouter>
      {/* <Poc />? */}
      {/* <div className={classes.image}>
      <div className={classes.appbar}>
        <div>
          <img style={{width:'320px',height:'78px'}} src='https://s3-alpha-sig.figma.com/img/08b4/a5c5/0bb25f13853e927a7702a4e9eb32c6f4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ahtVyKymWIKitSlX6sEOjKGU~QhNSVEro0hxzkSyimgZp9v53lUeJVP4azjGaTKnF4WruM3-bfDtHjwoGHSG3RMOUpNIWkC-cs0bpeBiBjFBJIuhf-Bd-ZfqKeR0dJLUrHCYu1NNwb4qCqVKgkJTA3xUHIO7Zhai3uaoVtYZU5zigwJfna30QbQDMZNIFIvR396owCsFQvMOM01VbSj-LxWMebKzsp9aIgNOwjeSuWq9oGn0ees4OQYvpdCarS1sFLOqQzG97ZxsByvckDQ2Q-gXnuFgDygFshlbRocJYUCmXm~EArG0xpG3UePuVOoRJGlh5ZwcqZ0ALdzR6SHdNQ__'
          />
        </div>
        <div className={classes.appbarContents}>
          <p className={classes.contentsactive}>HOME</p>
          <p className={classes.contentsactive}>ABOUT US</p>
          <p className={classes.contentsactive}>SERVICE</p>
          <p className={classes.contentsactive}>CONTACT US</p>
          <p className={classes.contentsactive}>BLOG</p>
        </div>
      </div>
      <div className={classes.contentContainer}>
        <div style={{display:'flex'}}>
        <p style={{ fontFamily: 'Marcellus, serif',weight:'400',fontSize:'65px',marginLeft:'16px',color:'white' }}>Innovative</p><p style={{ fontFamily: 'Marcellus, serif',weight:'400',fontSize:'65px',marginLeft:'16px' }}>Modern</p>
        </div>
        <p style={{color:'white',fontSize:'26px',fontWeight:'400',color:'#FFFFFF'}}>The final design package as per latest approval and client dreams. The final design package as per latest approval and client dreams and art work requirements to acceptance.</p>
        <div className={classes.getStartContainer}>
          <div className={classes.arraow}>
           
          </div>
          <div className={classes.getStart}>
            Get Start
          </div>
        </div>
      </div>
      </div> */}
    </div>
  );
}

export default App;
