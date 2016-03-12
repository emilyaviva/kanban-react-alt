import React from 'react'
import AltContainer from 'alt-container'

import Lanes from './Lanes'
import LaneActions from '../actions/LaneActions'
import LaneStore from '../stores/LaneStore'

class App extends React.Component {
  addLane() {
    LaneActions.create({
      name: 'New lane'
    })
  }

  render() {
    return (
      <div>
        <button
          className="add-lane"
          onClick={this.addLane}
        >
          <i className="fa fa-plus"></i>
        </button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}
        >
          <Lanes />
        </AltContainer>
      </div>
    )
  }
}

export default App
