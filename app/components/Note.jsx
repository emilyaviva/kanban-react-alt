import React from 'react'

class Note extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }
  }

  renderEdit = () => {
    return (
      <input
        type="text"
        ref={(e) => e ? e.selectionStart = this.props.task.length : null}
        autoFocus={true}
        defaultValue={this.props.task}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    )
  }

  renderNote = () => {
    const onDelete = this.props.onDelete
    return (
      <div className="note-contents">
        <div className="task" onClick={this.edit}>
          <span>{this.props.task}</span>
        </div>
        {onDelete ? this.renderDelete() : null}
      </div>
    )
  }

  renderDelete = () => {
    return (
      <button className="delete-note" onClick={this.props.onDelete}>
        <i className="fa fa-times"></i>
      </button>
    )
  }

  edit = () => {
    this.setState({
      editing: true
    })
  }

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e)
    }
  }

  finishEdit = (e) => {
    const value = e.target.value
    if (this.props.onEdit) {
      this.props.onEdit(value)
    }
    this.setState({
      editing: false
    })
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit()
    }
    return this.renderNote()
  }
}

export default Note
