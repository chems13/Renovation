import axios from "axios";

  const api_url = "http://localhost:4000/commentaires";


  class CommentaireService {

//Get tous les commentaires
  async getAll(){
    const res = await axios.get(api_url);
    return res.data;
  }


  //Get commentaire par ID
  async add(commentaire){
    const res = await axios.post(api_url, commentaire);
    return res.data;
  }

 //supprimer un commentaire
  async remove(id){
    await axios.delete(`${api_url}/${id}`);
  }

  //modifier un commentaire
  async update(id, commentaire){
    const res = await axios.put(`${api_url}/${id}`, commentaire);
    return res.data;
  }

}

export default new CommentaireService();