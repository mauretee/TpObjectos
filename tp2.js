/////////////////TIPOS
const Bool = {
	toString: function(){return "Bool"}
}; // cte. de tipo

//yo quiero hacer cosas de la pinta:
// let a = Object.create(Bool);

//funciones

//tipo flechita
const func_bb = {l: Bool,
	r: Bool,
	toString: function(){
		return l.toString(), " -> ", r.toString();
	}};
//con ésto ^ todas las otras funciones tienen que ser prototipadas por func_bb

const func = function(lt, rt){
	//constructor
	//tiene a func_bb como prototipo
	this = Object.create(func_bb);
	this.l = lt;
	this.r = rt;
	//ésto es el tipo flechita
	//toString es lo mismo, el prototipo creo que debería andar

};	//ésta función creo que vamos a querer sacarla?
//con ésto podés hacer: let a = new func(tipo1, tipo2)
//quiero decir cosas como "func(lt, rt)"??

///////////////VALORES

const TT = {
	toString: function(){return "ture"}
/*	deepCopy: function(){return {
		{toString: function() {return "fasle"}}
	}}*/
};
const FF = {
	toString: function(){return "fasle"}
/*	deepCopy: function(){return {
		{toString: function() {return "fasle"}}
	}}*/
};

function app(M, N){
	//le paso un objeto M y otro objeto N y genero una expresión tipo {M, N}
	this.m = M;
	this.n = N;
	this.toString = function () {
		return this.m.toString(), " ", this.n.toString();
	}
	this.deepCopy = function () {
		return {
			this.m.deepCopy();
			this.n.deepCopy();
		}
	}
} //???

function abs(vr, tp, M){
	//v sería el string que representa a la variable
	//t el tipo, hay que ver que sea o bien Bool o bien algo de prototipo func_bb
	//M la expresión
	this.v = vr;
	this.t = tp;
	this.m = M;
	//ej2:
	this.toString = function () {
		//v en realidad es una string cualquiera
		return "(\\", this.v.toString(), ": ", this.t.toString(), ". (", this.m.toString()"))"
	};
	
	this.deepCopy = function () {
		return {v: this.v.deepCopy() , t: this.t.deepCopy(), m: this.m.deepCopy()}
	}

}

//ejercicio 2: es el toString de ahí arriba

//ejercicio 3:
