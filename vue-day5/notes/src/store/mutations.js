export default {
  ADD_NOTE (state) {
  	var noteObj = {
  	  text: 'new Text',
  	  bol: false
  	}
  	state.notes.push(noteObj)
  	state.activeNote = noteObj
  },
  UPDATE_ACTIVE_NOTE (state, item) {
  	// activeNote更改选中的对象
  	state.activeNote = item
  },
  TOGGLE_FAVORITE (state) {
  	// 让当前激活的note取非
  	state.activeNote.bol = !state.activeNote.bol
  },
  DELETE_NOTE (state) {
  	// 获取activeNote在notes中的下标
  	var index = state.notes.indexOf(state.activeNote)
  	state.notes.splice(index, 1)
  	// 让第一个为激活的note
  	state.activeNote = state.notes[0]
  }
}
