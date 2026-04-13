import api from "./api";

class ChantierService{

  //Get tous les chantiers
  async getAll() {
    const res = await api.get("/chantier");
    return res.data;
  }

  //Get chantier par ID
  async getById(id){
    const res = await api.get(`/chantier/${id}`);
    console.log(res.data);

    return res.data;
  }

  //post cree un chantier
  async add(data){    
    const res = await api.post("/chantier", data);
    return res.data;
  }

  //put update un chantier
  async update(id,data){
    const res = await api.put(`/chantier/${id}`,data);
    return res.data;
  }

  //Deleteun chantier
  async remove(id){
    const res = await api.delete(`/chantier/${id}`);
    return res.data;
  }

}
export default new ChantierService();