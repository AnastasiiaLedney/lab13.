<template>
  <form @submit.prevent="save">
  <input v-model ="group.OwnerName" id="new1" placeholder="ПІБ"><br>
 <input v-model="group.CarBrand" id="new2" placeholder="Марка "><br>
 <input  v-model="group.CarNumber" id="new3" placeholder="Номер"> <br>
<input  v-model="group.CarColor" id="new4" placeholder="Колір "><br>
 <input type="file" iv-on:change="selectCover" >  
<img :src ="group.Cover" alt="Cover" width="100" height="200" ><br>  

<button type="submit" id="bt1">Додати</button>
<button type="reset" id="bt2"> Очистити</button>
    
  </form>
</template>
<script>
import { mapActions } from "vuex";
import { showMessage, showErrorMessage } from "@/messaging";
import networking from "@/networking";

export default {
  data() {
    return {
      group: {
         OwnerName:"",
        CarBrand:"",
        CarNumber:"",
        CarColor:"",
        Cover:"",
      },
    };
  },
  methods: {
        ...mapActions(["addGroup"]),
     async save() {
        try {
        if (this.group.file) {
          const file = await networking.uploadImage(this.group.file);
          const baseUrl = "https://localhost:3443";
          this.group.Cover = `${baseUrl}/files/${file.filename}`;
        }
        const newGroup = await this.addGroup(this.group);
        if (newGroup) {
          showMessage("успіх", `Group ${newGroup.OwnerName} доданий`);
          this.$router.push(`/group/${newGroup._id}`);
        }
      } catch (err) {
        showErrorMessage(err);
      }
    },
    selectCover(event) {

      const cover = event.target.files[0];
      this.group.file = cover;
      this.group.cover = URL.createObjectURL(cover);
    },
  },
};
</script>
<style scoped>
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

#bt1{
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
#bt1:hover{
  background:#fff;
  color:#808000;
}
#bt1:before,#bt1:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
#bt1:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
#bt1:hover:before,#bt1:hover:after{
  width:100%;
  transition:800ms ease all;
}
#bt2{
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
#bt2:hover{
  background:#fff;
  color:#808000;
}
#bt2:before,#bt2:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
#bt2:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
#bt2:hover:before,#bt2:hover:after{
  width:100%;
  transition:800ms ease all;
}
</style>