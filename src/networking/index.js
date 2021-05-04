import groupNetworking from "./group";
import fileNetworking from "./file";
import authNetworking from "./auth";

export default {
  ...groupNetworking,
  ...fileNetworking, 
  ...authNetworking,
}