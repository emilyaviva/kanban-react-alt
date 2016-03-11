import AltContainer from 'alt-container'
import React from 'react'
import Notes from './Notes'
import NoteActions from '../actions/NoteActions'
import NoteStore from '../stores/NoteStore'
import LaneActions from '../actions/LaneActions'

class Lane extends React.Component {
  addNote = (e) => {
    const laneId = this.props.lane.id
    const note = NoteActions.create({
      task: 'New task'
    })
    LaneActions.attachToLane({
      noteId: note.id,
      laneId
    })
  }

  deleteNote = (noteId, e) => {
    e.stopPropagation()
    const laneId = this.props.lane.id
    LaneActions.detachfromLane({
      laneId,
      noteId
    })
    NoteActions.delete(noteId)
  }

  editNote(id, task) {
    if (!task.trim()) {
      return
    }
    NoteActions.update({
      id,
      task
    })
  }

  render() {
    const {
      lane,
      ...props
    } = this.props

    return (
      <div {...props}>
        <div className="lane-header">
          <div className="lane-add-note">
            <button onClick={this.addNote}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div className="lane-name">
            {lane.name}
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getNotesByIds(lane.notes)
          }}
        >
          <Notes
            onEdit={this.editNote}
            onDelete={this.deleteNote}
          />
        </AltContainer>
      </div>
    )
  }
}

export default Lane
