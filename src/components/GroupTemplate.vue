<template>
  <li>
    <h2 @click="showDetailPage">{{ truncTitle(group.OwnerName, 20) }}</h2>
    <p class="CarBrand">{{ group.CarBrand }}</p>
   <p class="CarNumber">{{ group.CarNumber }}</p>
   <p class="CarColor">{{ group.CarColor }}</p>
    <img alt="Cover" :src="group.Cover" class="Cover" />
    
  </li>
</template>

<script>
export default {
  name: "GroupTempate",
  props: {
    group: Object,
  },
  data() {
    return {};
  },
  methods: {
    truncTitle(OwnerName, len) {
      if (OwnerName.length > len) return OwnerName.substring(0, len) + "...";
      else return OwnerName;
    },
   
    showDetailPage(){
      this.$router.push(`/group/${this.group.Id}`);
    }

  },
  computed:{
    shortTitle (){
      const len = 20;
       if (this.group.OwnerName.length > len) return this.group.OwnerName.substring(0, len) + "...";
      else return this.group.OwnerName;
    }
  }
};
</script>

<style scoped>
.Cover{
  position: absolute;
  width: 170px;
  height: 170x;
  top: 60%;
  right: 30%;
}

.CarNumber{
   font-family: "Comic Sans MS", cursive, sans-serif;
     font-size: 20px;
     color:  black;
}
.CarBrand{
  font-family: "Comic Sans MS", cursive, sans-serif;
     font-size: 20px;
     color:  black;
}
.groupVue{
position: absolute;
border-radius: 10px 60px 50px;
width: 400px;
height: 320px;
position: relative;
background: #778899;
text-align: center;
margin: 10px;
}

.CarColor{
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color:  black;
}
h2
{
   font-family: "Arial Black", Gadget, sans-serif;
   font-size: 20px;
   color:  black;
}

 li
 {
    float: left;
    list-style: none;
 }
</style>