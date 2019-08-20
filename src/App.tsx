import React from 'react';
import {News} from "./News/News";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";


const App: React.FC = () => {
  return (
   <div>
     <Header/>
     <News/>
     <Main/>
   </div>
  );
}

export default App;
