import React from 'react';
import "antd/dist/antd.css"
import { Button } from "antd"
import { RecoilRoot } from "recoil"
import TextInput from './components/TextInput';
import ShowText from './components/ShowText';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        Akerss.
        <Button type="primary">Button</Button>
        <Button type='link'>link</Button>
        <TextInput></TextInput>
        <ShowText></ShowText>
      </div>
    </RecoilRoot>

  );
}

export default App;
