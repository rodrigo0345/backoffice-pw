import{R as r}from"./RepositoryInterface-TDgCEybl.js";class o{constructor(t){this.repo=new r,this.localStorage=window.localStorage,this.prefix="material-",this.last_id="material_last_id"}create(t){return this.repo.create(t,this.localStorage,this.prefix,this.last_id)}update(t,e){return this.repo.update(t,e,this.localStorage,this.prefix)}delete(t){return this.repo.delete(t,this.localStorage,this.prefix)}find(t){return this.repo.find(t,this.localStorage,this.prefix)}all(t){return this.repo.all(t,this.localStorage,this.prefix)}}export{o as M};
