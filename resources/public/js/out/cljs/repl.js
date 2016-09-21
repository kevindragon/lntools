// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33339){
var map__33364 = p__33339;
var map__33364__$1 = ((((!((map__33364 == null)))?((((map__33364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33364):map__33364);
var m = map__33364__$1;
var n = cljs.core.get.call(null,map__33364__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33366_33388 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33367_33389 = null;
var count__33368_33390 = (0);
var i__33369_33391 = (0);
while(true){
if((i__33369_33391 < count__33368_33390)){
var f_33392 = cljs.core._nth.call(null,chunk__33367_33389,i__33369_33391);
cljs.core.println.call(null,"  ",f_33392);

var G__33393 = seq__33366_33388;
var G__33394 = chunk__33367_33389;
var G__33395 = count__33368_33390;
var G__33396 = (i__33369_33391 + (1));
seq__33366_33388 = G__33393;
chunk__33367_33389 = G__33394;
count__33368_33390 = G__33395;
i__33369_33391 = G__33396;
continue;
} else {
var temp__4657__auto___33397 = cljs.core.seq.call(null,seq__33366_33388);
if(temp__4657__auto___33397){
var seq__33366_33398__$1 = temp__4657__auto___33397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33366_33398__$1)){
var c__25876__auto___33399 = cljs.core.chunk_first.call(null,seq__33366_33398__$1);
var G__33400 = cljs.core.chunk_rest.call(null,seq__33366_33398__$1);
var G__33401 = c__25876__auto___33399;
var G__33402 = cljs.core.count.call(null,c__25876__auto___33399);
var G__33403 = (0);
seq__33366_33388 = G__33400;
chunk__33367_33389 = G__33401;
count__33368_33390 = G__33402;
i__33369_33391 = G__33403;
continue;
} else {
var f_33404 = cljs.core.first.call(null,seq__33366_33398__$1);
cljs.core.println.call(null,"  ",f_33404);

var G__33405 = cljs.core.next.call(null,seq__33366_33398__$1);
var G__33406 = null;
var G__33407 = (0);
var G__33408 = (0);
seq__33366_33388 = G__33405;
chunk__33367_33389 = G__33406;
count__33368_33390 = G__33407;
i__33369_33391 = G__33408;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33409 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25065__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25065__auto__)){
return or__25065__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33409);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33409)))?cljs.core.second.call(null,arglists_33409):arglists_33409));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33370_33410 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33371_33411 = null;
var count__33372_33412 = (0);
var i__33373_33413 = (0);
while(true){
if((i__33373_33413 < count__33372_33412)){
var vec__33374_33414 = cljs.core._nth.call(null,chunk__33371_33411,i__33373_33413);
var name_33415 = cljs.core.nth.call(null,vec__33374_33414,(0),null);
var map__33377_33416 = cljs.core.nth.call(null,vec__33374_33414,(1),null);
var map__33377_33417__$1 = ((((!((map__33377_33416 == null)))?((((map__33377_33416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33377_33416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33377_33416):map__33377_33416);
var doc_33418 = cljs.core.get.call(null,map__33377_33417__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33419 = cljs.core.get.call(null,map__33377_33417__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33415);

cljs.core.println.call(null," ",arglists_33419);

if(cljs.core.truth_(doc_33418)){
cljs.core.println.call(null," ",doc_33418);
} else {
}

var G__33420 = seq__33370_33410;
var G__33421 = chunk__33371_33411;
var G__33422 = count__33372_33412;
var G__33423 = (i__33373_33413 + (1));
seq__33370_33410 = G__33420;
chunk__33371_33411 = G__33421;
count__33372_33412 = G__33422;
i__33373_33413 = G__33423;
continue;
} else {
var temp__4657__auto___33424 = cljs.core.seq.call(null,seq__33370_33410);
if(temp__4657__auto___33424){
var seq__33370_33425__$1 = temp__4657__auto___33424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33370_33425__$1)){
var c__25876__auto___33426 = cljs.core.chunk_first.call(null,seq__33370_33425__$1);
var G__33427 = cljs.core.chunk_rest.call(null,seq__33370_33425__$1);
var G__33428 = c__25876__auto___33426;
var G__33429 = cljs.core.count.call(null,c__25876__auto___33426);
var G__33430 = (0);
seq__33370_33410 = G__33427;
chunk__33371_33411 = G__33428;
count__33372_33412 = G__33429;
i__33373_33413 = G__33430;
continue;
} else {
var vec__33379_33431 = cljs.core.first.call(null,seq__33370_33425__$1);
var name_33432 = cljs.core.nth.call(null,vec__33379_33431,(0),null);
var map__33382_33433 = cljs.core.nth.call(null,vec__33379_33431,(1),null);
var map__33382_33434__$1 = ((((!((map__33382_33433 == null)))?((((map__33382_33433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33382_33433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33382_33433):map__33382_33433);
var doc_33435 = cljs.core.get.call(null,map__33382_33434__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33436 = cljs.core.get.call(null,map__33382_33434__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33432);

cljs.core.println.call(null," ",arglists_33436);

if(cljs.core.truth_(doc_33435)){
cljs.core.println.call(null," ",doc_33435);
} else {
}

var G__33437 = cljs.core.next.call(null,seq__33370_33425__$1);
var G__33438 = null;
var G__33439 = (0);
var G__33440 = (0);
seq__33370_33410 = G__33437;
chunk__33371_33411 = G__33438;
count__33372_33412 = G__33439;
i__33373_33413 = G__33440;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33384 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33385 = null;
var count__33386 = (0);
var i__33387 = (0);
while(true){
if((i__33387 < count__33386)){
var role = cljs.core._nth.call(null,chunk__33385,i__33387);
var temp__4657__auto___33441__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33441__$1)){
var spec_33442 = temp__4657__auto___33441__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33442));
} else {
}

var G__33443 = seq__33384;
var G__33444 = chunk__33385;
var G__33445 = count__33386;
var G__33446 = (i__33387 + (1));
seq__33384 = G__33443;
chunk__33385 = G__33444;
count__33386 = G__33445;
i__33387 = G__33446;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33384);
if(temp__4657__auto____$1){
var seq__33384__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33384__$1)){
var c__25876__auto__ = cljs.core.chunk_first.call(null,seq__33384__$1);
var G__33447 = cljs.core.chunk_rest.call(null,seq__33384__$1);
var G__33448 = c__25876__auto__;
var G__33449 = cljs.core.count.call(null,c__25876__auto__);
var G__33450 = (0);
seq__33384 = G__33447;
chunk__33385 = G__33448;
count__33386 = G__33449;
i__33387 = G__33450;
continue;
} else {
var role = cljs.core.first.call(null,seq__33384__$1);
var temp__4657__auto___33451__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33451__$2)){
var spec_33452 = temp__4657__auto___33451__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33452));
} else {
}

var G__33453 = cljs.core.next.call(null,seq__33384__$1);
var G__33454 = null;
var G__33455 = (0);
var G__33456 = (0);
seq__33384 = G__33453;
chunk__33385 = G__33454;
count__33386 = G__33455;
i__33387 = G__33456;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1474379732558