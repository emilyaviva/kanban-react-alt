import React from 'react'
import Notes from './Notes'
import NoteActions from '../actions/NoteActions'
import NoteStore from '../stores/NoteStore'

class App extends React.Component {
  addNote() {
    NoteActions.create({
      task: 'New task'
    })
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

  deleteNote(id, e) {
    e.stopPropagation()
    NoteActions.delete(id)
  }

  render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>
          <i className="fa fa-plus"></i>
        </button>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getState().notes
          }}
        >
          <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>
      </div>
    )
  }
}

export default App
