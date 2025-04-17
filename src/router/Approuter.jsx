import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Main from "../core/Main/Main";
import Scrolltop from "./Scrolltop"
import Homepage from "../components/Homepage/Homepage";
import Aimscopepage from "../components/Aimpage/Aimscopepage";
import Aboutus from "../components/Aboutuspage/Aboutuspage";
import Editorialpage from "../components/Editorialpage/Editorialpage";
import Issuespage from "../components/Issuespage/Issuespage";
import Peerreviewpage from "../components/Peerreviewpage/Peerreviewpage";
import Publicationethicspage from "../components/Publicationethicspage/Publicationethicspage";
import Abstractindexingpage from "../components/Abstractindexingpage/Abstractindexingpage";
import Articalprocessingpage from "../components/Articalprocessingpage/Articalprocessingpage";
import Authorguidelinespage from "../components/Authorguidelinespage/Authorguidelinespage";
import Copyrightformpage from "../components/Copyrightformpage/Copyrightformpage";
import Contactuspage from "../components/Contactuspage/Contactuspage";
import Plagiarismpage from "../components/Plagiarismpage/Plagiarismpage";
import Malpracticepage from "../components/Malpracticepage/Malpracticepage";
import Correctionpage from "../components/Correctionpage/Correctionpage";
import Publicationrightspage from "../components/Publicationrightspage/Publicationrightspage";



export default function Approuter() {
    return (
      <BrowserRouter>
    <Scrolltop/>
          <Routes>
             
            <Route  element={<Main />}> 
            <Route path="/"  element={<Homepage />}/>     
            <Route path="/aimscope" element={<Aimscopepage/>} />   
            <Route path="/aboutus"  element={<Aboutus/>}/>
            <Route path="/editorial" element={<Editorialpage/>}/>
            <Route path="/issues"  element={<Issuespage/>}/>
            <Route path="/peer" element={<Peerreviewpage/>}/>
            <Route path="/publicationethicspage" element={<Publicationethicspage/>}/>
            <Route path="/abstractindexing" element={<Abstractindexingpage/>}/>
            <Route path="/articleprocessingpage" element={<Articalprocessingpage/>}/>
            <Route path="/authorguidelinespage" element={<Authorguidelinespage/>}/>
            <Route path="/copyrightformpage" element={<Copyrightformpage/>}/>
            <Route path="/contactuspage" element={<Contactuspage/>}/>
            <Route path="/plagiarismpage" element={<Plagiarismpage/>}/>
            <Route path="/malpracticepage" element={<Malpracticepage/>}/>
            <Route path="/correctionpage" element={<Correctionpage/>}/>
            <Route path="/publicationrightspage" element={<Publicationrightspage/>}/>
             
            </Route>
          </Routes>
        
      </BrowserRouter>
    );
  }