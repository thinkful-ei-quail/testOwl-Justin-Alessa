import React, { Component } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      particpants: [],
      chatEvents: [],
    }
  };

  function App() {
    return (
    <section class="participantList">

    </section>

    <section class="chatLog hidden">

    </section>
    
    <section class="stage">

    </section>
    );
  }
}

export default App;
