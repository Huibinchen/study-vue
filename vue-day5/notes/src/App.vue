<template>
  <div id="app">
    <Toolbar></Toolbar>
    <Notelist></Notelist>
    <Editor></Editor>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Notelist from '@/components/Notelist'
import Editor from '@/components/Editor'

export default {
  name: 'app',
  components: {
    Toolbar,
    Notelist,
    Editor
  }
}
</script>

<style>
html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
