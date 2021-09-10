<template>
  <div class="cards" style="margin-left: 10%">
    <vs-card type="2">
      <template #title>
        <h3>Mood Booster</h3>
      </template>
      <template #img>
        <img src="../assets/card-cover.png" alt="">
      </template>
      <template #text>
        <p>
          Get happy with with todays dose of feel-good songs!
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
    <vs-card type="2">
      <template #title>
        <h3>Mood Booster</h3>
      </template>
      <template #img>
        <img src="../assets/card-cover.png" alt="">
      </template>
      <template #text>
        <p>
          Get happy with with todays dose of feel-good songs!
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
    <vs-card type="2">
      <template #title>
        <h3>Mood Booster</h3>
      </template>
      <template #img>
        <img src="../assets/card-cover.png" alt="">
      </template>
      <template #text>
        <p>
          Get happy with with todays dose of feel-good songs!
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
    <vs-card type="2">
      <template #title>
        <h3>Mood Booster</h3>
      </template>
      <template #img>
        <img src="../assets/card-cover.png" alt="">
      </template>
      <template #text>
        <p>
          Get happy with with todays dose of feel-good songs!
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cards {
  gap: 40px;
  display: flex;
  flex-direction: row;
}
</style>
