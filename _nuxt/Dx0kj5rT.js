import{_ as t,x as e}from"./BYiDl2TM.js";const o={props:{component:{type:String,required:!1,default:"button"},throwIn:{type:Number,required:!1,default:0},throwAgain:{type:Number,required:!1,default:0}},data(){return{throwed:!1}},watch:{throwAgain(){this.throwed=!1,this.timeout=setTimeout(()=>{this.throwed=!0},this.throwIn)}},mounted(){this.timeout=setTimeout(()=>{this.throwed=!0},this.throwIn)},unmounted(){clearTimeout(this.timeout)},render(){return e(this.component||"button",{class:`typo_default grenade ${this.throwed?"grenade--throwed":""}`},this.$slots)}},s=t(o,[["__scopeId","data-v-b111e149"]]);export{s as _};