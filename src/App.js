import React, { Component } from 'react';

import './App.css';
import Participants from './participants';
import Chatlog from './chatlog';
import Stage from './stage';

class App extends Component {
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: [],
    }
  };

  render() {
    const { store } = this.props
    let newArr = store.participants.filter(participant => {
      return participant.onStage
    });
   
    return (
      <main className="testowl">
        <section className="participantList">
          {store.participants.map(participants => (
            <Participants
              name={participants.name}
              avatar={participants.avatar}
              inSession={toString(participants.inSession)}
              onStage={participants.onStage}
            />
          ))}
        </section>

        <section className="chatLog hidden">
          {store.chatEvents.map(chatEvents => (
            <Chatlog
              type={chatEvents.type}
              message={chatEvents.message}
              timestamp={chatEvents.timestamp}
            />
          ))}
        </section>

        <section className="stage">
          {newArr.map(participants => (
              <Stage
                avatar={participants.avatar}
                name={participants.name}
                />
            ))}
        </section>

      </main>
    );
  }
}

export default App;
