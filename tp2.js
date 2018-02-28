/////////////////TIPOS
const Bool = function () {};

Bool.prototype.toString = function () {return "Bool"};

//yo quiero hacer cosas de la pinta:
// let a = Object.create(Bool);

//funciones

const flec = function(lt, rt){
	this.l = lt;
	this.r = rt;
}

flec.prototype.toString = function () {return (this.l.toString() + " -> " + this.r.toString());}

flec.prototype.deepCopy = function () {return {l: this.l.deepCopy(), r: this.r.deepCopy()}};

/*
///////////////VALORES
*/
const TT = function(){};

const FF = function() {};

TT.prototype.toString = function () {
	return "true";
}


FF.prototype.toString = function () {
	return "false";
}

function app(M, N){
	//le paso un objeto M y otro objeto N y genero una expresión tipo {M, N}
	this.m = M;
	this.n = N;
} //???

app.prototype.toString = function () {
		return this.m.toString() + " " + this.n.toString();
}

app.prototype.deepCopy = function () {
	return {
		m: this.m.deepCopy(),
		n: this.n.deepCopy()
	}
}

function vars(h){
	this.v = h;
}

vars.prototype.toString = function () {return this.v};

vars.prototype.deepCopy = function () {return (new String(this.v))};

function abs(vr, tp, M){
	//v sería el string que representa a la variable
	//t el tipo, hay que ver que sea o bien Bool o bien algo de prototipo func_bb
	//M la expresión
	this.v = vr;
	this.t = tp;
	this.m = M;
}

abs.prototype.toString = function () {
		//v en realidad es una string cualquiera
		return "(\\" + this.v.toString() + ": " + this.t.toString() + ". (" + this.m.toString() + "))"
};


abs.prototype.deepCopy = function () {
	 	return {v: this.v.deepCopy() , t: this.t.deepCopy(), m: this.m.deepCopy()}
}


//ejercicio 2: es el toString de ahí arriba

//ejercicio 3: CREO que sería así, especialmente con Bool que no tengo ni la más puta idea, pls miralo

//ejercicio 4: serían los this.sust

abs.prototype.sust(str, m){}

app.prototype.sust(str, m){}

vars.prototype.sust(str, m){}
