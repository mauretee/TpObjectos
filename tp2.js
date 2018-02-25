const Bool = {}; // cte. de tipo

const TT = {};
const FF = {};

//yo quiero hacer cosas de la pinta:
// let a = Object.create(Bool);

//funciones

//tipo flechita
const func_bb = {l: Bool, r: Bool};
//con ésto ^ todas las otras funciones tienen que ser prototipadas por func_bb

const func = function(lt, rt){
	let a = Object.create(func_bb);
	//tiene a func_bb como prototipo
	a.l = lt;
	a.r = rt;
	return a;
};	//ésta función creo que vamos a querer sacarla

//quiero decir cosas como "flechita.create(lt, rt)"??

function app(M, N){
	//le paso un objeto M y otro objeto N y genero una expresión tipo {M, N}
	return {m: M, n: N};
} //???

function abs(vr, tp, M){
	//v sería el string que representa a la variable
	//t el tipo, hay que ver que sea o bien Bool o bien algo de prototipo func_bb
	//M la expresión
	return {v: vr, t: tp, m: M};
}
