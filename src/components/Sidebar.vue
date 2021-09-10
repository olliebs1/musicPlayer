<template>
    <div class="hidden">
      <vs-sidebar
        background="#8C8C8C"
        textWhite
        absolute
        hover-expand
        v-model="active"
        open
        >
        <template #logo>
          <img src="../assets/logo.png" alt="" style="border-radius: 50%">
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <fa icon="home" />
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <fa icon="music" />
          </template>
          Music
        </vs-sidebar-item>
        <vs-sidebar-item id="play">
          <template #icon>
            <fa icon="play" />
          </template>
          Now Playing
        </vs-sidebar-item>
        <vs-sidebar-item id="shuffle">
          <template #icon>
            <fa icon="random" />
          </template>
          Shuffle
        </vs-sidebar-item>
        <vs-sidebar-item id="genre">
          <template #icon>
            <fa icon="record-vinyl" />
          </template>
          Genre
        </vs-sidebar-item>
        <vs-sidebar-item id="settings">
          <template #icon>
            <fa icon="cog" />
          </template>
          Settings
        </vs-sidebar-item>
        <vs-sidebar-item id="user">
          <template #icon>
            <fa icon="user" />
          </template>
          User
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between"> 
            <vs-avatar>
              <img src="../assets/avatar.png" alt="">
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
</template>

<script>
export default {
data:() => ({
      active: 'home',
    })
}
</script>

<style>

</style>