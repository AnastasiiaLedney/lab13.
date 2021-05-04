<template>
  <form @submit.prevent="save" v-if="correctId">
   <input v-model.lazy ="group.OwnerName" placeholder="ПІБ" id="new1"><br>
 <input v-model.lazy="group.CarBrand" placeholder="Марка" id="new2"><br>
 <input  v-model.lazy="group.CarNumber" placeholder="Номер" id="new3"> <br>
 <input  v-model.lazy="group.CarColor" placeholder="Колір" id="new4"><br>
 <input type="file" v-on:change="selectCover" /> <br />
    <img :src="group.Cover" alt="Cover" width="100" height="200" /><br />

<button type="submit" id="b1">Редагувати</button>
<button type="reset" id="b2">Очистити</button>
  </form>
  <p v-else> Невірний id </p>
</template>
<script>
import { mapActions } from "vuex";
import networking from "@/networking";
import { showMessage } from "@/messaging";

export default {
  props: {
    id: String,
  },
  data() {
    return {
      group: {},
      correctId: false
    };
  },
  async mounted() {
    this.group = await networking.getGroupById(this.id);
    if (this.group) this.correctId = true;
    else this.correctId = false;
  },
  methods: {
    ...mapActions(["updateGroup"]),
     async save() {

      this.group._id = this.id;
      if (this.group.file) {
        const file = await networking.uploadImage(this.group.file);
        const baseUrl = "https://localhost:3443";
        this.group.Cover =`${baseUrl}/files/${file.filename}`;
      }
      const updatedgroup = await this.updateGroup(this.group);
      if (updatedgroup) {
        showMessage("Успіх", `Успішно оновлено ${updatedgroup.OwnerName}`);
        this.$router.push(`/group/${updatedgroup._id}`);
      }

    },
        selectCover(event){

              const cover = event.target.files[0];
              this.group.file = cover;
              this.group.Cover = URL.createObjectURL(cover);
        }    
  },
};
</script>
<style scoped>
.Cover{
  position: absolute;
  
}
#new1
 {
   background:#EEE8AA;
  color:black;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color:  black;
  
 }
 #new2
 {
   background:#EEE8AA;
  color:black;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color:  black;
  
 }
#new3
{
   background:#EEE8AA;
  color:black;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color:  black;
  
 }
#new4
{
   background:#EEE8AA;
  color:black;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  color:  black;
  
 }
 #b1{
  background:#FFA500;
  color:#fff;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
}
#b1:hover{
  background:#fff;
  color:#808000;
}
#b1:before,#b1:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
#b1:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
#b1:hover:before,#b1:hover:after{
  width:100%;
  transition:800ms ease all;
}
#b2{
  background:#FFA500;
  color:#fff;
  border:none;
  position:relative;
  height:40px;
  font-size:1.1em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
}
#b2:hover{
  background:#fff;
  color:#808000;
}
#b2:before,#b2:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
#b2:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
#b2:hover:before,#b2:hover:after{
  width:100%;
  transition:800ms ease all;
}




</style>