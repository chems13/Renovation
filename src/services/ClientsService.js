import api from "./api";

class ClientsService {


  //Get tous les clients
  async getAll() {
    const res = await api.get("/client");
    return res.data;
  }

  //Get client by id
  async getById(id) {
    const res = await api.get(`/client/${id}`);
    return res.data;
  }

  //post creer un client
  async add(data) {
    const res = await api.post("/client", data);
    return res.data;
  }

  //put modifier un client
  async remove(id) {
    const res =await api.delete(`/client/${id}`);
    return res.data;
    
  }

  //put modifier un client
  async update(id, data) {
    const res = await api.put(`/client/${id}`, data);
    return res.data;
  }
}
export default new ClientsService();





  
 

 