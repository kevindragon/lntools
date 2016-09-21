// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25671__auto__,writer__25672__auto__,opt__25673__auto__){
return cljs.core._write.call(null,writer__25672__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26379 = arguments.length;
var i__26141__auto___26380 = (0);
while(true){
if((i__26141__auto___26380 < len__26140__auto___26379)){
args__26147__auto__.push((arguments[i__26141__auto___26380]));

var G__26381 = (i__26141__auto___26380 + (1));
i__26141__auto___26380 = G__26381;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26378){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26378));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26383 = arguments.length;
var i__26141__auto___26384 = (0);
while(true){
if((i__26141__auto___26384 < len__26140__auto___26383)){
args__26147__auto__.push((arguments[i__26141__auto___26384]));

var G__26385 = (i__26141__auto___26384 + (1));
i__26141__auto___26384 = G__26385;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26382){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26382));
});

var g_QMARK__26386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_26387 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26386){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26386))
,null));
var mkg_26388 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26386,g_26387){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26386,g_26387))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26386,g_26387,mkg_26388){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26386).call(null,x);
});})(g_QMARK__26386,g_26387,mkg_26388))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26386,g_26387,mkg_26388){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26388).call(null,gfn);
});})(g_QMARK__26386,g_26387,mkg_26388))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26386,g_26387,mkg_26388){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26387).call(null,generator);
});})(g_QMARK__26386,g_26387,mkg_26388))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26350__auto___26407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26350__auto___26407){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26408 = arguments.length;
var i__26141__auto___26409 = (0);
while(true){
if((i__26141__auto___26409 < len__26140__auto___26408)){
args__26147__auto__.push((arguments[i__26141__auto___26409]));

var G__26410 = (i__26141__auto___26409 + (1));
i__26141__auto___26409 = G__26410;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26407))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26407){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26407),args);
});})(g__26350__auto___26407))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26350__auto___26407){
return (function (seq26389){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26389));
});})(g__26350__auto___26407))
;


var g__26350__auto___26411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26350__auto___26411){
return (function cljs$spec$impl$gen$list(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26412 = arguments.length;
var i__26141__auto___26413 = (0);
while(true){
if((i__26141__auto___26413 < len__26140__auto___26412)){
args__26147__auto__.push((arguments[i__26141__auto___26413]));

var G__26414 = (i__26141__auto___26413 + (1));
i__26141__auto___26413 = G__26414;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26411))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26411){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26411),args);
});})(g__26350__auto___26411))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26350__auto___26411){
return (function (seq26390){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26390));
});})(g__26350__auto___26411))
;


var g__26350__auto___26415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26350__auto___26415){
return (function cljs$spec$impl$gen$map(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26416 = arguments.length;
var i__26141__auto___26417 = (0);
while(true){
if((i__26141__auto___26417 < len__26140__auto___26416)){
args__26147__auto__.push((arguments[i__26141__auto___26417]));

var G__26418 = (i__26141__auto___26417 + (1));
i__26141__auto___26417 = G__26418;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26415))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26415){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26415),args);
});})(g__26350__auto___26415))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26350__auto___26415){
return (function (seq26391){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26391));
});})(g__26350__auto___26415))
;


var g__26350__auto___26419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26350__auto___26419){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26420 = arguments.length;
var i__26141__auto___26421 = (0);
while(true){
if((i__26141__auto___26421 < len__26140__auto___26420)){
args__26147__auto__.push((arguments[i__26141__auto___26421]));

var G__26422 = (i__26141__auto___26421 + (1));
i__26141__auto___26421 = G__26422;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26419))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26419){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26419),args);
});})(g__26350__auto___26419))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26350__auto___26419){
return (function (seq26392){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26392));
});})(g__26350__auto___26419))
;


var g__26350__auto___26423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26350__auto___26423){
return (function cljs$spec$impl$gen$set(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26424 = arguments.length;
var i__26141__auto___26425 = (0);
while(true){
if((i__26141__auto___26425 < len__26140__auto___26424)){
args__26147__auto__.push((arguments[i__26141__auto___26425]));

var G__26426 = (i__26141__auto___26425 + (1));
i__26141__auto___26425 = G__26426;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26423))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26423){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26423),args);
});})(g__26350__auto___26423))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26350__auto___26423){
return (function (seq26393){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26393));
});})(g__26350__auto___26423))
;


var g__26350__auto___26427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26350__auto___26427){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26428 = arguments.length;
var i__26141__auto___26429 = (0);
while(true){
if((i__26141__auto___26429 < len__26140__auto___26428)){
args__26147__auto__.push((arguments[i__26141__auto___26429]));

var G__26430 = (i__26141__auto___26429 + (1));
i__26141__auto___26429 = G__26430;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26427))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26427){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26427),args);
});})(g__26350__auto___26427))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26350__auto___26427){
return (function (seq26394){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26394));
});})(g__26350__auto___26427))
;


var g__26350__auto___26431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26350__auto___26431){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26432 = arguments.length;
var i__26141__auto___26433 = (0);
while(true){
if((i__26141__auto___26433 < len__26140__auto___26432)){
args__26147__auto__.push((arguments[i__26141__auto___26433]));

var G__26434 = (i__26141__auto___26433 + (1));
i__26141__auto___26433 = G__26434;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26431))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26431){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26431),args);
});})(g__26350__auto___26431))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26350__auto___26431){
return (function (seq26395){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26395));
});})(g__26350__auto___26431))
;


var g__26350__auto___26435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26350__auto___26435){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26436 = arguments.length;
var i__26141__auto___26437 = (0);
while(true){
if((i__26141__auto___26437 < len__26140__auto___26436)){
args__26147__auto__.push((arguments[i__26141__auto___26437]));

var G__26438 = (i__26141__auto___26437 + (1));
i__26141__auto___26437 = G__26438;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26435))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26435){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26435),args);
});})(g__26350__auto___26435))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26350__auto___26435){
return (function (seq26396){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26396));
});})(g__26350__auto___26435))
;


var g__26350__auto___26439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26350__auto___26439){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26440 = arguments.length;
var i__26141__auto___26441 = (0);
while(true){
if((i__26141__auto___26441 < len__26140__auto___26440)){
args__26147__auto__.push((arguments[i__26141__auto___26441]));

var G__26442 = (i__26141__auto___26441 + (1));
i__26141__auto___26441 = G__26442;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26439))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26439){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26439),args);
});})(g__26350__auto___26439))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26350__auto___26439){
return (function (seq26397){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26397));
});})(g__26350__auto___26439))
;


var g__26350__auto___26443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26350__auto___26443){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26444 = arguments.length;
var i__26141__auto___26445 = (0);
while(true){
if((i__26141__auto___26445 < len__26140__auto___26444)){
args__26147__auto__.push((arguments[i__26141__auto___26445]));

var G__26446 = (i__26141__auto___26445 + (1));
i__26141__auto___26445 = G__26446;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26443))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26443){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26443),args);
});})(g__26350__auto___26443))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26350__auto___26443){
return (function (seq26398){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26398));
});})(g__26350__auto___26443))
;


var g__26350__auto___26447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26350__auto___26447){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26448 = arguments.length;
var i__26141__auto___26449 = (0);
while(true){
if((i__26141__auto___26449 < len__26140__auto___26448)){
args__26147__auto__.push((arguments[i__26141__auto___26449]));

var G__26450 = (i__26141__auto___26449 + (1));
i__26141__auto___26449 = G__26450;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26447))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26447){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26447),args);
});})(g__26350__auto___26447))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26350__auto___26447){
return (function (seq26399){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26399));
});})(g__26350__auto___26447))
;


var g__26350__auto___26451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26350__auto___26451){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26452 = arguments.length;
var i__26141__auto___26453 = (0);
while(true){
if((i__26141__auto___26453 < len__26140__auto___26452)){
args__26147__auto__.push((arguments[i__26141__auto___26453]));

var G__26454 = (i__26141__auto___26453 + (1));
i__26141__auto___26453 = G__26454;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26451))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26451){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26451),args);
});})(g__26350__auto___26451))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26350__auto___26451){
return (function (seq26400){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26400));
});})(g__26350__auto___26451))
;


var g__26350__auto___26455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26350__auto___26455){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26456 = arguments.length;
var i__26141__auto___26457 = (0);
while(true){
if((i__26141__auto___26457 < len__26140__auto___26456)){
args__26147__auto__.push((arguments[i__26141__auto___26457]));

var G__26458 = (i__26141__auto___26457 + (1));
i__26141__auto___26457 = G__26458;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26455))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26455){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26455),args);
});})(g__26350__auto___26455))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26350__auto___26455){
return (function (seq26401){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26401));
});})(g__26350__auto___26455))
;


var g__26350__auto___26459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26350__auto___26459){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26460 = arguments.length;
var i__26141__auto___26461 = (0);
while(true){
if((i__26141__auto___26461 < len__26140__auto___26460)){
args__26147__auto__.push((arguments[i__26141__auto___26461]));

var G__26462 = (i__26141__auto___26461 + (1));
i__26141__auto___26461 = G__26462;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26459))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26459){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26459),args);
});})(g__26350__auto___26459))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26350__auto___26459){
return (function (seq26402){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26402));
});})(g__26350__auto___26459))
;


var g__26350__auto___26463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26350__auto___26463){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26464 = arguments.length;
var i__26141__auto___26465 = (0);
while(true){
if((i__26141__auto___26465 < len__26140__auto___26464)){
args__26147__auto__.push((arguments[i__26141__auto___26465]));

var G__26466 = (i__26141__auto___26465 + (1));
i__26141__auto___26465 = G__26466;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26463))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26463),args);
});})(g__26350__auto___26463))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26350__auto___26463){
return (function (seq26403){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26403));
});})(g__26350__auto___26463))
;


var g__26350__auto___26467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26350__auto___26467){
return (function cljs$spec$impl$gen$return(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26468 = arguments.length;
var i__26141__auto___26469 = (0);
while(true){
if((i__26141__auto___26469 < len__26140__auto___26468)){
args__26147__auto__.push((arguments[i__26141__auto___26469]));

var G__26470 = (i__26141__auto___26469 + (1));
i__26141__auto___26469 = G__26470;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26467))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26467),args);
});})(g__26350__auto___26467))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26350__auto___26467){
return (function (seq26404){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26404));
});})(g__26350__auto___26467))
;


var g__26350__auto___26471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26350__auto___26471){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26472 = arguments.length;
var i__26141__auto___26473 = (0);
while(true){
if((i__26141__auto___26473 < len__26140__auto___26472)){
args__26147__auto__.push((arguments[i__26141__auto___26473]));

var G__26474 = (i__26141__auto___26473 + (1));
i__26141__auto___26473 = G__26474;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26471))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26471),args);
});})(g__26350__auto___26471))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26350__auto___26471){
return (function (seq26405){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26405));
});})(g__26350__auto___26471))
;


var g__26350__auto___26475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26350__auto___26475){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26476 = arguments.length;
var i__26141__auto___26477 = (0);
while(true){
if((i__26141__auto___26477 < len__26140__auto___26476)){
args__26147__auto__.push((arguments[i__26141__auto___26477]));

var G__26478 = (i__26141__auto___26477 + (1));
i__26141__auto___26477 = G__26478;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26350__auto___26475))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26350__auto___26475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26350__auto___26475),args);
});})(g__26350__auto___26475))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26350__auto___26475){
return (function (seq26406){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26406));
});})(g__26350__auto___26475))
;

var g__26363__auto___26500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__26363__auto___26500){
return (function cljs$spec$impl$gen$any(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26501 = arguments.length;
var i__26141__auto___26502 = (0);
while(true){
if((i__26141__auto___26502 < len__26140__auto___26501)){
args__26147__auto__.push((arguments[i__26141__auto___26502]));

var G__26503 = (i__26141__auto___26502 + (1));
i__26141__auto___26502 = G__26503;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26500))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26500){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26500);
});})(g__26363__auto___26500))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__26363__auto___26500){
return (function (seq26479){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26479));
});})(g__26363__auto___26500))
;


var g__26363__auto___26504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__26363__auto___26504){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26505 = arguments.length;
var i__26141__auto___26506 = (0);
while(true){
if((i__26141__auto___26506 < len__26140__auto___26505)){
args__26147__auto__.push((arguments[i__26141__auto___26506]));

var G__26507 = (i__26141__auto___26506 + (1));
i__26141__auto___26506 = G__26507;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26504))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26504){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26504);
});})(g__26363__auto___26504))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__26363__auto___26504){
return (function (seq26480){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26480));
});})(g__26363__auto___26504))
;


var g__26363__auto___26508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__26363__auto___26508){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26509 = arguments.length;
var i__26141__auto___26510 = (0);
while(true){
if((i__26141__auto___26510 < len__26140__auto___26509)){
args__26147__auto__.push((arguments[i__26141__auto___26510]));

var G__26511 = (i__26141__auto___26510 + (1));
i__26141__auto___26510 = G__26511;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26508))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26508){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26508);
});})(g__26363__auto___26508))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__26363__auto___26508){
return (function (seq26481){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26481));
});})(g__26363__auto___26508))
;


var g__26363__auto___26512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__26363__auto___26512){
return (function cljs$spec$impl$gen$char(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26513 = arguments.length;
var i__26141__auto___26514 = (0);
while(true){
if((i__26141__auto___26514 < len__26140__auto___26513)){
args__26147__auto__.push((arguments[i__26141__auto___26514]));

var G__26515 = (i__26141__auto___26514 + (1));
i__26141__auto___26514 = G__26515;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26512))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26512){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26512);
});})(g__26363__auto___26512))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__26363__auto___26512){
return (function (seq26482){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26482));
});})(g__26363__auto___26512))
;


var g__26363__auto___26516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__26363__auto___26516){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26517 = arguments.length;
var i__26141__auto___26518 = (0);
while(true){
if((i__26141__auto___26518 < len__26140__auto___26517)){
args__26147__auto__.push((arguments[i__26141__auto___26518]));

var G__26519 = (i__26141__auto___26518 + (1));
i__26141__auto___26518 = G__26519;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26516))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26516){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26516);
});})(g__26363__auto___26516))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__26363__auto___26516){
return (function (seq26483){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26483));
});})(g__26363__auto___26516))
;


var g__26363__auto___26520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__26363__auto___26520){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26521 = arguments.length;
var i__26141__auto___26522 = (0);
while(true){
if((i__26141__auto___26522 < len__26140__auto___26521)){
args__26147__auto__.push((arguments[i__26141__auto___26522]));

var G__26523 = (i__26141__auto___26522 + (1));
i__26141__auto___26522 = G__26523;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26520))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26520){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26520);
});})(g__26363__auto___26520))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__26363__auto___26520){
return (function (seq26484){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26484));
});})(g__26363__auto___26520))
;


var g__26363__auto___26524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__26363__auto___26524){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26525 = arguments.length;
var i__26141__auto___26526 = (0);
while(true){
if((i__26141__auto___26526 < len__26140__auto___26525)){
args__26147__auto__.push((arguments[i__26141__auto___26526]));

var G__26527 = (i__26141__auto___26526 + (1));
i__26141__auto___26526 = G__26527;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26524))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26524){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26524);
});})(g__26363__auto___26524))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__26363__auto___26524){
return (function (seq26485){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26485));
});})(g__26363__auto___26524))
;


var g__26363__auto___26528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__26363__auto___26528){
return (function cljs$spec$impl$gen$double(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26529 = arguments.length;
var i__26141__auto___26530 = (0);
while(true){
if((i__26141__auto___26530 < len__26140__auto___26529)){
args__26147__auto__.push((arguments[i__26141__auto___26530]));

var G__26531 = (i__26141__auto___26530 + (1));
i__26141__auto___26530 = G__26531;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26528))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26528){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26528);
});})(g__26363__auto___26528))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__26363__auto___26528){
return (function (seq26486){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26486));
});})(g__26363__auto___26528))
;


var g__26363__auto___26532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__26363__auto___26532){
return (function cljs$spec$impl$gen$int(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26533 = arguments.length;
var i__26141__auto___26534 = (0);
while(true){
if((i__26141__auto___26534 < len__26140__auto___26533)){
args__26147__auto__.push((arguments[i__26141__auto___26534]));

var G__26535 = (i__26141__auto___26534 + (1));
i__26141__auto___26534 = G__26535;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26532))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26532){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26532);
});})(g__26363__auto___26532))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__26363__auto___26532){
return (function (seq26487){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26487));
});})(g__26363__auto___26532))
;


var g__26363__auto___26536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__26363__auto___26536){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26537 = arguments.length;
var i__26141__auto___26538 = (0);
while(true){
if((i__26141__auto___26538 < len__26140__auto___26537)){
args__26147__auto__.push((arguments[i__26141__auto___26538]));

var G__26539 = (i__26141__auto___26538 + (1));
i__26141__auto___26538 = G__26539;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26536))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26536){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26536);
});})(g__26363__auto___26536))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__26363__auto___26536){
return (function (seq26488){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26488));
});})(g__26363__auto___26536))
;


var g__26363__auto___26540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__26363__auto___26540){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26541 = arguments.length;
var i__26141__auto___26542 = (0);
while(true){
if((i__26141__auto___26542 < len__26140__auto___26541)){
args__26147__auto__.push((arguments[i__26141__auto___26542]));

var G__26543 = (i__26141__auto___26542 + (1));
i__26141__auto___26542 = G__26543;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26540))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26540){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26540);
});})(g__26363__auto___26540))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__26363__auto___26540){
return (function (seq26489){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26489));
});})(g__26363__auto___26540))
;


var g__26363__auto___26544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__26363__auto___26544){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26545 = arguments.length;
var i__26141__auto___26546 = (0);
while(true){
if((i__26141__auto___26546 < len__26140__auto___26545)){
args__26147__auto__.push((arguments[i__26141__auto___26546]));

var G__26547 = (i__26141__auto___26546 + (1));
i__26141__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26544))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26544){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26544);
});})(g__26363__auto___26544))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__26363__auto___26544){
return (function (seq26490){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26490));
});})(g__26363__auto___26544))
;


var g__26363__auto___26548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__26363__auto___26548){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26549 = arguments.length;
var i__26141__auto___26550 = (0);
while(true){
if((i__26141__auto___26550 < len__26140__auto___26549)){
args__26147__auto__.push((arguments[i__26141__auto___26550]));

var G__26551 = (i__26141__auto___26550 + (1));
i__26141__auto___26550 = G__26551;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26548))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26548){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26548);
});})(g__26363__auto___26548))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__26363__auto___26548){
return (function (seq26491){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26491));
});})(g__26363__auto___26548))
;


var g__26363__auto___26552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__26363__auto___26552){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26553 = arguments.length;
var i__26141__auto___26554 = (0);
while(true){
if((i__26141__auto___26554 < len__26140__auto___26553)){
args__26147__auto__.push((arguments[i__26141__auto___26554]));

var G__26555 = (i__26141__auto___26554 + (1));
i__26141__auto___26554 = G__26555;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26552))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26552){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26552);
});})(g__26363__auto___26552))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__26363__auto___26552){
return (function (seq26492){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26492));
});})(g__26363__auto___26552))
;


var g__26363__auto___26556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__26363__auto___26556){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26557 = arguments.length;
var i__26141__auto___26558 = (0);
while(true){
if((i__26141__auto___26558 < len__26140__auto___26557)){
args__26147__auto__.push((arguments[i__26141__auto___26558]));

var G__26559 = (i__26141__auto___26558 + (1));
i__26141__auto___26558 = G__26559;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26556))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26556){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26556);
});})(g__26363__auto___26556))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__26363__auto___26556){
return (function (seq26493){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26493));
});})(g__26363__auto___26556))
;


var g__26363__auto___26560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__26363__auto___26560){
return (function cljs$spec$impl$gen$string(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26561 = arguments.length;
var i__26141__auto___26562 = (0);
while(true){
if((i__26141__auto___26562 < len__26140__auto___26561)){
args__26147__auto__.push((arguments[i__26141__auto___26562]));

var G__26563 = (i__26141__auto___26562 + (1));
i__26141__auto___26562 = G__26563;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26560))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26560){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26560);
});})(g__26363__auto___26560))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__26363__auto___26560){
return (function (seq26494){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26494));
});})(g__26363__auto___26560))
;


var g__26363__auto___26564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__26363__auto___26564){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26565 = arguments.length;
var i__26141__auto___26566 = (0);
while(true){
if((i__26141__auto___26566 < len__26140__auto___26565)){
args__26147__auto__.push((arguments[i__26141__auto___26566]));

var G__26567 = (i__26141__auto___26566 + (1));
i__26141__auto___26566 = G__26567;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26564))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26564){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26564);
});})(g__26363__auto___26564))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__26363__auto___26564){
return (function (seq26495){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26495));
});})(g__26363__auto___26564))
;


var g__26363__auto___26568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__26363__auto___26568){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26569 = arguments.length;
var i__26141__auto___26570 = (0);
while(true){
if((i__26141__auto___26570 < len__26140__auto___26569)){
args__26147__auto__.push((arguments[i__26141__auto___26570]));

var G__26571 = (i__26141__auto___26570 + (1));
i__26141__auto___26570 = G__26571;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26568))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26568){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26568);
});})(g__26363__auto___26568))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__26363__auto___26568){
return (function (seq26496){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26496));
});})(g__26363__auto___26568))
;


var g__26363__auto___26572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__26363__auto___26572){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26573 = arguments.length;
var i__26141__auto___26574 = (0);
while(true){
if((i__26141__auto___26574 < len__26140__auto___26573)){
args__26147__auto__.push((arguments[i__26141__auto___26574]));

var G__26575 = (i__26141__auto___26574 + (1));
i__26141__auto___26574 = G__26575;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26572))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26572){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26572);
});})(g__26363__auto___26572))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__26363__auto___26572){
return (function (seq26497){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26497));
});})(g__26363__auto___26572))
;


var g__26363__auto___26576 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__26363__auto___26576){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26577 = arguments.length;
var i__26141__auto___26578 = (0);
while(true){
if((i__26141__auto___26578 < len__26140__auto___26577)){
args__26147__auto__.push((arguments[i__26141__auto___26578]));

var G__26579 = (i__26141__auto___26578 + (1));
i__26141__auto___26578 = G__26579;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26576))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26576){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26576);
});})(g__26363__auto___26576))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__26363__auto___26576){
return (function (seq26498){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26498));
});})(g__26363__auto___26576))
;


var g__26363__auto___26580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__26363__auto___26580){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26581 = arguments.length;
var i__26141__auto___26582 = (0);
while(true){
if((i__26141__auto___26582 < len__26140__auto___26581)){
args__26147__auto__.push((arguments[i__26141__auto___26582]));

var G__26583 = (i__26141__auto___26582 + (1));
i__26141__auto___26582 = G__26583;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});})(g__26363__auto___26580))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26363__auto___26580){
return (function (args){
return cljs.core.deref.call(null,g__26363__auto___26580);
});})(g__26363__auto___26580))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__26363__auto___26580){
return (function (seq26499){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26499));
});})(g__26363__auto___26580))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26147__auto__ = [];
var len__26140__auto___26586 = arguments.length;
var i__26141__auto___26587 = (0);
while(true){
if((i__26141__auto___26587 < len__26140__auto___26586)){
args__26147__auto__.push((arguments[i__26141__auto___26587]));

var G__26588 = (i__26141__auto___26587 + (1));
i__26141__auto___26587 = G__26588;
continue;
} else {
}
break;
}

var argseq__26148__auto__ = ((((0) < args__26147__auto__.length))?(new cljs.core.IndexedSeq(args__26147__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26148__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26584_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26584_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26585){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26585));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26589_SHARP_){
return (new Date(p1__26589_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1474379718849