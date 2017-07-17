<template>
  <div id="toolbar">
    <i class="glyphicon glyphicon-plus" @click="addOne()"></i>
    <i class="glyphicon glyphicon-star" @click="toggleFavorite()" :class="{starred: activeNote.bol}"></i>
    <i class="glyphicon glyphicon-remove" @click="deleteNote()"></i>
  </div>
</template>
<script type="text/javascript">
export default {
  methods: {
    addOne () {
      this.$store.dispatch('addNote')
    },
    toggleFavorite () {
      this.$store.dispatch('toggleFavorite')
    },
    deleteNote () {
      this.$store.dispatch('deleteNote')
    }
  },
  computed: {
    activeNote () {
      return this.$store.state.activeNote
    }
  }
}
</script>
<style>
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
} 
.starred {
  color: #F7AE4F;
}
</style>
