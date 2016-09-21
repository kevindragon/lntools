// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args33297 = [];
var len__26127__auto___33300 = arguments.length;
var i__26128__auto___33301 = (0);
while(true){
if((i__26128__auto___33301 < len__26127__auto___33300)){
args33297.push((arguments[i__26128__auto___33301]));

var G__33302 = (i__26128__auto___33301 + (1));
i__26128__auto___33301 = G__33302;
continue;
} else {
}
break;
}

var G__33299 = args33297.length;
switch (G__33299) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33297.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26134__auto__ = [];
var len__26127__auto___33305 = arguments.length;
var i__26128__auto___33306 = (0);
while(true){
if((i__26128__auto___33306 < len__26127__auto___33305)){
args__26134__auto__.push((arguments[i__26128__auto___33306]));

var G__33307 = (i__26128__auto___33306 + (1));
i__26128__auto___33306 = G__33307;
continue;
} else {
}
break;
}

var argseq__26135__auto__ = ((((0) < args__26134__auto__.length))?(new cljs.core.IndexedSeq(args__26134__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26135__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33304){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33304));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26134__auto__ = [];
var len__26127__auto___33309 = arguments.length;
var i__26128__auto___33310 = (0);
while(true){
if((i__26128__auto___33310 < len__26127__auto___33309)){
args__26134__auto__.push((arguments[i__26128__auto___33310]));

var G__33311 = (i__26128__auto___33310 + (1));
i__26128__auto___33310 = G__33311;
continue;
} else {
}
break;
}

var argseq__26135__auto__ = ((((0) < args__26134__auto__.length))?(new cljs.core.IndexedSeq(args__26134__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26135__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33308){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33308));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__33312 = cljs.core._EQ_;
var expr__33313 = (function (){var or__25051__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e33316){if((e33316 instanceof Error)){
var e = e33316;
return false;
} else {
throw e33316;

}
}})();
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__33312.call(null,"true",expr__33313))){
return true;
} else {
if(cljs.core.truth_(pred__33312.call(null,"false",expr__33313))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33313)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e33318){if((e33318 instanceof Error)){
var e = e33318;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e33318;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33319){
var map__33322 = p__33319;
var map__33322__$1 = ((((!((map__33322 == null)))?((((map__33322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);
var message = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25051__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25039__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25039__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25039__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27317__auto___33484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto___33484,ch){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto___33484,ch){
return (function (state_33453){
var state_val_33454 = (state_33453[(1)]);
if((state_val_33454 === (7))){
var inst_33449 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33455_33485 = state_33453__$1;
(statearr_33455_33485[(2)] = inst_33449);

(statearr_33455_33485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (1))){
var state_33453__$1 = state_33453;
var statearr_33456_33486 = state_33453__$1;
(statearr_33456_33486[(2)] = null);

(statearr_33456_33486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (4))){
var inst_33406 = (state_33453[(7)]);
var inst_33406__$1 = (state_33453[(2)]);
var state_33453__$1 = (function (){var statearr_33457 = state_33453;
(statearr_33457[(7)] = inst_33406__$1);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33406__$1)){
var statearr_33458_33487 = state_33453__$1;
(statearr_33458_33487[(1)] = (5));

} else {
var statearr_33459_33488 = state_33453__$1;
(statearr_33459_33488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (15))){
var inst_33413 = (state_33453[(8)]);
var inst_33428 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33413);
var inst_33429 = cljs.core.first.call(null,inst_33428);
var inst_33430 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33429);
var inst_33431 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_33430)].join('');
var inst_33432 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33431);
var state_33453__$1 = state_33453;
var statearr_33460_33489 = state_33453__$1;
(statearr_33460_33489[(2)] = inst_33432);

(statearr_33460_33489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (13))){
var inst_33437 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33461_33490 = state_33453__$1;
(statearr_33461_33490[(2)] = inst_33437);

(statearr_33461_33490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (6))){
var state_33453__$1 = state_33453;
var statearr_33462_33491 = state_33453__$1;
(statearr_33462_33491[(2)] = null);

(statearr_33462_33491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (17))){
var inst_33435 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33463_33492 = state_33453__$1;
(statearr_33463_33492[(2)] = inst_33435);

(statearr_33463_33492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (3))){
var inst_33451 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33453__$1,inst_33451);
} else {
if((state_val_33454 === (12))){
var inst_33412 = (state_33453[(9)]);
var inst_33426 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33412,opts);
var state_33453__$1 = state_33453;
if(cljs.core.truth_(inst_33426)){
var statearr_33464_33493 = state_33453__$1;
(statearr_33464_33493[(1)] = (15));

} else {
var statearr_33465_33494 = state_33453__$1;
(statearr_33465_33494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (2))){
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33453__$1,(4),ch);
} else {
if((state_val_33454 === (11))){
var inst_33413 = (state_33453[(8)]);
var inst_33418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33419 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33413);
var inst_33420 = cljs.core.async.timeout.call(null,(1000));
var inst_33421 = [inst_33419,inst_33420];
var inst_33422 = (new cljs.core.PersistentVector(null,2,(5),inst_33418,inst_33421,null));
var state_33453__$1 = state_33453;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33453__$1,(14),inst_33422);
} else {
if((state_val_33454 === (9))){
var inst_33413 = (state_33453[(8)]);
var inst_33439 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33440 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33413);
var inst_33441 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33440);
var inst_33442 = [cljs.core.str("Not loading: "),cljs.core.str(inst_33441)].join('');
var inst_33443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33442);
var state_33453__$1 = (function (){var statearr_33466 = state_33453;
(statearr_33466[(10)] = inst_33439);

return statearr_33466;
})();
var statearr_33467_33495 = state_33453__$1;
(statearr_33467_33495[(2)] = inst_33443);

(statearr_33467_33495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (5))){
var inst_33406 = (state_33453[(7)]);
var inst_33408 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33409 = (new cljs.core.PersistentArrayMap(null,2,inst_33408,null));
var inst_33410 = (new cljs.core.PersistentHashSet(null,inst_33409,null));
var inst_33411 = figwheel.client.focus_msgs.call(null,inst_33410,inst_33406);
var inst_33412 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33411);
var inst_33413 = cljs.core.first.call(null,inst_33411);
var inst_33414 = figwheel.client.autoload_QMARK_.call(null);
var state_33453__$1 = (function (){var statearr_33468 = state_33453;
(statearr_33468[(8)] = inst_33413);

(statearr_33468[(9)] = inst_33412);

return statearr_33468;
})();
if(cljs.core.truth_(inst_33414)){
var statearr_33469_33496 = state_33453__$1;
(statearr_33469_33496[(1)] = (8));

} else {
var statearr_33470_33497 = state_33453__$1;
(statearr_33470_33497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (14))){
var inst_33424 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33471_33498 = state_33453__$1;
(statearr_33471_33498[(2)] = inst_33424);

(statearr_33471_33498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (16))){
var state_33453__$1 = state_33453;
var statearr_33472_33499 = state_33453__$1;
(statearr_33472_33499[(2)] = null);

(statearr_33472_33499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (10))){
var inst_33445 = (state_33453[(2)]);
var state_33453__$1 = (function (){var statearr_33473 = state_33453;
(statearr_33473[(11)] = inst_33445);

return statearr_33473;
})();
var statearr_33474_33500 = state_33453__$1;
(statearr_33474_33500[(2)] = null);

(statearr_33474_33500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (8))){
var inst_33412 = (state_33453[(9)]);
var inst_33416 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33412,opts);
var state_33453__$1 = state_33453;
if(cljs.core.truth_(inst_33416)){
var statearr_33475_33501 = state_33453__$1;
(statearr_33475_33501[(1)] = (11));

} else {
var statearr_33476_33502 = state_33453__$1;
(statearr_33476_33502[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27317__auto___33484,ch))
;
return ((function (switch__27252__auto__,c__27317__auto___33484,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27253__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27253__auto____0 = (function (){
var statearr_33480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33480[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27253__auto__);

(statearr_33480[(1)] = (1));

return statearr_33480;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27253__auto____1 = (function (state_33453){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_33453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e33481){if((e33481 instanceof Object)){
var ex__27256__auto__ = e33481;
var statearr_33482_33503 = state_33453;
(statearr_33482_33503[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33504 = state_33453;
state_33453 = G__33504;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27253__auto__ = function(state_33453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27253__auto____1.call(this,state_33453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27253__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27253__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto___33484,ch))
})();
var state__27319__auto__ = (function (){var statearr_33483 = f__27318__auto__.call(null);
(statearr_33483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto___33484);

return statearr_33483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto___33484,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33505_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33505_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33508 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33508){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e33507){if((e33507 instanceof Error)){
var e = e33507;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33508], null));
} else {
var e = e33507;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_33508))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33509){
var map__33518 = p__33509;
var map__33518__$1 = ((((!((map__33518 == null)))?((((map__33518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33518):map__33518);
var opts = map__33518__$1;
var build_id = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33518,map__33518__$1,opts,build_id){
return (function (p__33520){
var vec__33521 = p__33520;
var seq__33522 = cljs.core.seq.call(null,vec__33521);
var first__33523 = cljs.core.first.call(null,seq__33522);
var seq__33522__$1 = cljs.core.next.call(null,seq__33522);
var map__33524 = first__33523;
var map__33524__$1 = ((((!((map__33524 == null)))?((((map__33524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33524):map__33524);
var msg = map__33524__$1;
var msg_name = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33522__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33521,seq__33522,first__33523,seq__33522__$1,map__33524,map__33524__$1,msg,msg_name,_,map__33518,map__33518__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33521,seq__33522,first__33523,seq__33522__$1,map__33524,map__33524__$1,msg,msg_name,_,map__33518,map__33518__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33518,map__33518__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33532){
var vec__33533 = p__33532;
var seq__33534 = cljs.core.seq.call(null,vec__33533);
var first__33535 = cljs.core.first.call(null,seq__33534);
var seq__33534__$1 = cljs.core.next.call(null,seq__33534);
var map__33536 = first__33535;
var map__33536__$1 = ((((!((map__33536 == null)))?((((map__33536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33536):map__33536);
var msg = map__33536__$1;
var msg_name = cljs.core.get.call(null,map__33536__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33534__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33538){
var map__33550 = p__33538;
var map__33550__$1 = ((((!((map__33550 == null)))?((((map__33550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33550):map__33550);
var on_compile_warning = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33550,map__33550__$1,on_compile_warning,on_compile_fail){
return (function (p__33552){
var vec__33553 = p__33552;
var seq__33554 = cljs.core.seq.call(null,vec__33553);
var first__33555 = cljs.core.first.call(null,seq__33554);
var seq__33554__$1 = cljs.core.next.call(null,seq__33554);
var map__33556 = first__33555;
var map__33556__$1 = ((((!((map__33556 == null)))?((((map__33556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33556):map__33556);
var msg = map__33556__$1;
var msg_name = cljs.core.get.call(null,map__33556__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33554__$1;
var pred__33558 = cljs.core._EQ_;
var expr__33559 = msg_name;
if(cljs.core.truth_(pred__33558.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33559))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33558.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33559))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33550,map__33550__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27317__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto__,msg_hist,msg_names,msg){
return (function (state_33787){
var state_val_33788 = (state_33787[(1)]);
if((state_val_33788 === (7))){
var inst_33707 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33707)){
var statearr_33789_33839 = state_33787__$1;
(statearr_33789_33839[(1)] = (8));

} else {
var statearr_33790_33840 = state_33787__$1;
(statearr_33790_33840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (20))){
var inst_33781 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33791_33841 = state_33787__$1;
(statearr_33791_33841[(2)] = inst_33781);

(statearr_33791_33841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (27))){
var inst_33777 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33792_33842 = state_33787__$1;
(statearr_33792_33842[(2)] = inst_33777);

(statearr_33792_33842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (1))){
var inst_33700 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33700)){
var statearr_33793_33843 = state_33787__$1;
(statearr_33793_33843[(1)] = (2));

} else {
var statearr_33794_33844 = state_33787__$1;
(statearr_33794_33844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (24))){
var inst_33779 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33795_33845 = state_33787__$1;
(statearr_33795_33845[(2)] = inst_33779);

(statearr_33795_33845[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (4))){
var inst_33785 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33787__$1,inst_33785);
} else {
if((state_val_33788 === (15))){
var inst_33783 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33796_33846 = state_33787__$1;
(statearr_33796_33846[(2)] = inst_33783);

(statearr_33796_33846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (21))){
var inst_33736 = (state_33787[(2)]);
var inst_33737 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33738 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33737);
var state_33787__$1 = (function (){var statearr_33797 = state_33787;
(statearr_33797[(7)] = inst_33736);

return statearr_33797;
})();
var statearr_33798_33847 = state_33787__$1;
(statearr_33798_33847[(2)] = inst_33738);

(statearr_33798_33847[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (31))){
var inst_33766 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33766)){
var statearr_33799_33848 = state_33787__$1;
(statearr_33799_33848[(1)] = (34));

} else {
var statearr_33800_33849 = state_33787__$1;
(statearr_33800_33849[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (32))){
var inst_33775 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33801_33850 = state_33787__$1;
(statearr_33801_33850[(2)] = inst_33775);

(statearr_33801_33850[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (33))){
var inst_33762 = (state_33787[(2)]);
var inst_33763 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33764 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33763);
var state_33787__$1 = (function (){var statearr_33802 = state_33787;
(statearr_33802[(8)] = inst_33762);

return statearr_33802;
})();
var statearr_33803_33851 = state_33787__$1;
(statearr_33803_33851[(2)] = inst_33764);

(statearr_33803_33851[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (13))){
var inst_33721 = figwheel.client.heads_up.clear.call(null);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(16),inst_33721);
} else {
if((state_val_33788 === (22))){
var inst_33742 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33743 = figwheel.client.heads_up.append_warning_message.call(null,inst_33742);
var state_33787__$1 = state_33787;
var statearr_33804_33852 = state_33787__$1;
(statearr_33804_33852[(2)] = inst_33743);

(statearr_33804_33852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (36))){
var inst_33773 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33805_33853 = state_33787__$1;
(statearr_33805_33853[(2)] = inst_33773);

(statearr_33805_33853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (29))){
var inst_33753 = (state_33787[(2)]);
var inst_33754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33755 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33754);
var state_33787__$1 = (function (){var statearr_33806 = state_33787;
(statearr_33806[(9)] = inst_33753);

return statearr_33806;
})();
var statearr_33807_33854 = state_33787__$1;
(statearr_33807_33854[(2)] = inst_33755);

(statearr_33807_33854[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (6))){
var inst_33702 = (state_33787[(10)]);
var state_33787__$1 = state_33787;
var statearr_33808_33855 = state_33787__$1;
(statearr_33808_33855[(2)] = inst_33702);

(statearr_33808_33855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (28))){
var inst_33749 = (state_33787[(2)]);
var inst_33750 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33751 = figwheel.client.heads_up.display_warning.call(null,inst_33750);
var state_33787__$1 = (function (){var statearr_33809 = state_33787;
(statearr_33809[(11)] = inst_33749);

return statearr_33809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(29),inst_33751);
} else {
if((state_val_33788 === (25))){
var inst_33747 = figwheel.client.heads_up.clear.call(null);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(28),inst_33747);
} else {
if((state_val_33788 === (34))){
var inst_33768 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(37),inst_33768);
} else {
if((state_val_33788 === (17))){
var inst_33727 = (state_33787[(2)]);
var inst_33728 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33728);
var state_33787__$1 = (function (){var statearr_33810 = state_33787;
(statearr_33810[(12)] = inst_33727);

return statearr_33810;
})();
var statearr_33811_33856 = state_33787__$1;
(statearr_33811_33856[(2)] = inst_33729);

(statearr_33811_33856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (3))){
var inst_33719 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33719)){
var statearr_33812_33857 = state_33787__$1;
(statearr_33812_33857[(1)] = (13));

} else {
var statearr_33813_33858 = state_33787__$1;
(statearr_33813_33858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (12))){
var inst_33715 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33814_33859 = state_33787__$1;
(statearr_33814_33859[(2)] = inst_33715);

(statearr_33814_33859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (2))){
var inst_33702 = (state_33787[(10)]);
var inst_33702__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33787__$1 = (function (){var statearr_33815 = state_33787;
(statearr_33815[(10)] = inst_33702__$1);

return statearr_33815;
})();
if(cljs.core.truth_(inst_33702__$1)){
var statearr_33816_33860 = state_33787__$1;
(statearr_33816_33860[(1)] = (5));

} else {
var statearr_33817_33861 = state_33787__$1;
(statearr_33817_33861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (23))){
var inst_33745 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33745)){
var statearr_33818_33862 = state_33787__$1;
(statearr_33818_33862[(1)] = (25));

} else {
var statearr_33819_33863 = state_33787__$1;
(statearr_33819_33863[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (35))){
var state_33787__$1 = state_33787;
var statearr_33820_33864 = state_33787__$1;
(statearr_33820_33864[(2)] = null);

(statearr_33820_33864[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (19))){
var inst_33740 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33740)){
var statearr_33821_33865 = state_33787__$1;
(statearr_33821_33865[(1)] = (22));

} else {
var statearr_33822_33866 = state_33787__$1;
(statearr_33822_33866[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (11))){
var inst_33711 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33823_33867 = state_33787__$1;
(statearr_33823_33867[(2)] = inst_33711);

(statearr_33823_33867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (9))){
var inst_33713 = figwheel.client.heads_up.clear.call(null);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(12),inst_33713);
} else {
if((state_val_33788 === (5))){
var inst_33704 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33787__$1 = state_33787;
var statearr_33824_33868 = state_33787__$1;
(statearr_33824_33868[(2)] = inst_33704);

(statearr_33824_33868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (14))){
var inst_33731 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33731)){
var statearr_33825_33869 = state_33787__$1;
(statearr_33825_33869[(1)] = (18));

} else {
var statearr_33826_33870 = state_33787__$1;
(statearr_33826_33870[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (26))){
var inst_33757 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33757)){
var statearr_33827_33871 = state_33787__$1;
(statearr_33827_33871[(1)] = (30));

} else {
var statearr_33828_33872 = state_33787__$1;
(statearr_33828_33872[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (16))){
var inst_33723 = (state_33787[(2)]);
var inst_33724 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33725 = figwheel.client.heads_up.display_exception.call(null,inst_33724);
var state_33787__$1 = (function (){var statearr_33829 = state_33787;
(statearr_33829[(13)] = inst_33723);

return statearr_33829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(17),inst_33725);
} else {
if((state_val_33788 === (30))){
var inst_33759 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33760 = figwheel.client.heads_up.display_warning.call(null,inst_33759);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(33),inst_33760);
} else {
if((state_val_33788 === (10))){
var inst_33717 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33830_33873 = state_33787__$1;
(statearr_33830_33873[(2)] = inst_33717);

(statearr_33830_33873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (18))){
var inst_33733 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33734 = figwheel.client.heads_up.display_exception.call(null,inst_33733);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(21),inst_33734);
} else {
if((state_val_33788 === (37))){
var inst_33770 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33831_33874 = state_33787__$1;
(statearr_33831_33874[(2)] = inst_33770);

(statearr_33831_33874[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (8))){
var inst_33709 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,(11),inst_33709);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27317__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27252__auto__,c__27317__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto____0 = (function (){
var statearr_33835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33835[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto__);

(statearr_33835[(1)] = (1));

return statearr_33835;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto____1 = (function (state_33787){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_33787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e33836){if((e33836 instanceof Object)){
var ex__27256__auto__ = e33836;
var statearr_33837_33875 = state_33787;
(statearr_33837_33875[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33876 = state_33787;
state_33787 = G__33876;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto__ = function(state_33787){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto____1.call(this,state_33787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto__,msg_hist,msg_names,msg))
})();
var state__27319__auto__ = (function (){var statearr_33838 = f__27318__auto__.call(null);
(statearr_33838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto__);

return statearr_33838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto__,msg_hist,msg_names,msg))
);

return c__27317__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27317__auto___33939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto___33939,ch){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto___33939,ch){
return (function (state_33922){
var state_val_33923 = (state_33922[(1)]);
if((state_val_33923 === (1))){
var state_33922__$1 = state_33922;
var statearr_33924_33940 = state_33922__$1;
(statearr_33924_33940[(2)] = null);

(statearr_33924_33940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (2))){
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33922__$1,(4),ch);
} else {
if((state_val_33923 === (3))){
var inst_33920 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33922__$1,inst_33920);
} else {
if((state_val_33923 === (4))){
var inst_33910 = (state_33922[(7)]);
var inst_33910__$1 = (state_33922[(2)]);
var state_33922__$1 = (function (){var statearr_33925 = state_33922;
(statearr_33925[(7)] = inst_33910__$1);

return statearr_33925;
})();
if(cljs.core.truth_(inst_33910__$1)){
var statearr_33926_33941 = state_33922__$1;
(statearr_33926_33941[(1)] = (5));

} else {
var statearr_33927_33942 = state_33922__$1;
(statearr_33927_33942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (5))){
var inst_33910 = (state_33922[(7)]);
var inst_33912 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33910);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33922__$1,(8),inst_33912);
} else {
if((state_val_33923 === (6))){
var state_33922__$1 = state_33922;
var statearr_33928_33943 = state_33922__$1;
(statearr_33928_33943[(2)] = null);

(statearr_33928_33943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (7))){
var inst_33918 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33929_33944 = state_33922__$1;
(statearr_33929_33944[(2)] = inst_33918);

(statearr_33929_33944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (8))){
var inst_33914 = (state_33922[(2)]);
var state_33922__$1 = (function (){var statearr_33930 = state_33922;
(statearr_33930[(8)] = inst_33914);

return statearr_33930;
})();
var statearr_33931_33945 = state_33922__$1;
(statearr_33931_33945[(2)] = null);

(statearr_33931_33945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27317__auto___33939,ch))
;
return ((function (switch__27252__auto__,c__27317__auto___33939,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27253__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27253__auto____0 = (function (){
var statearr_33935 = [null,null,null,null,null,null,null,null,null];
(statearr_33935[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27253__auto__);

(statearr_33935[(1)] = (1));

return statearr_33935;
});
var figwheel$client$heads_up_plugin_$_state_machine__27253__auto____1 = (function (state_33922){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_33922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e33936){if((e33936 instanceof Object)){
var ex__27256__auto__ = e33936;
var statearr_33937_33946 = state_33922;
(statearr_33937_33946[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33947 = state_33922;
state_33922 = G__33947;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27253__auto__ = function(state_33922){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27253__auto____1.call(this,state_33922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27253__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27253__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto___33939,ch))
})();
var state__27319__auto__ = (function (){var statearr_33938 = f__27318__auto__.call(null);
(statearr_33938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto___33939);

return statearr_33938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto___33939,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27317__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto__){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto__){
return (function (state_33968){
var state_val_33969 = (state_33968[(1)]);
if((state_val_33969 === (1))){
var inst_33963 = cljs.core.async.timeout.call(null,(3000));
var state_33968__$1 = state_33968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33968__$1,(2),inst_33963);
} else {
if((state_val_33969 === (2))){
var inst_33965 = (state_33968[(2)]);
var inst_33966 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33968__$1 = (function (){var statearr_33970 = state_33968;
(statearr_33970[(7)] = inst_33965);

return statearr_33970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33968__$1,inst_33966);
} else {
return null;
}
}
});})(c__27317__auto__))
;
return ((function (switch__27252__auto__,c__27317__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27253__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27253__auto____0 = (function (){
var statearr_33974 = [null,null,null,null,null,null,null,null];
(statearr_33974[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27253__auto__);

(statearr_33974[(1)] = (1));

return statearr_33974;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27253__auto____1 = (function (state_33968){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_33968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e33975){if((e33975 instanceof Object)){
var ex__27256__auto__ = e33975;
var statearr_33976_33978 = state_33968;
(statearr_33976_33978[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33979 = state_33968;
state_33968 = G__33979;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27253__auto__ = function(state_33968){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27253__auto____1.call(this,state_33968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27253__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27253__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto__))
})();
var state__27319__auto__ = (function (){var statearr_33977 = f__27318__auto__.call(null);
(statearr_33977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto__);

return statearr_33977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto__))
);

return c__27317__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27317__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto__,figwheel_version,temp__4657__auto__){
return (function (state_34002){
var state_val_34003 = (state_34002[(1)]);
if((state_val_34003 === (1))){
var inst_33996 = cljs.core.async.timeout.call(null,(2000));
var state_34002__$1 = state_34002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34002__$1,(2),inst_33996);
} else {
if((state_val_34003 === (2))){
var inst_33998 = (state_34002[(2)]);
var inst_33999 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_34000 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33999);
var state_34002__$1 = (function (){var statearr_34004 = state_34002;
(statearr_34004[(7)] = inst_33998);

return statearr_34004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34002__$1,inst_34000);
} else {
return null;
}
}
});})(c__27317__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27252__auto__,c__27317__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto____0 = (function (){
var statearr_34008 = [null,null,null,null,null,null,null,null];
(statearr_34008[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto__);

(statearr_34008[(1)] = (1));

return statearr_34008;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto____1 = (function (state_34002){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_34002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e34009){if((e34009 instanceof Object)){
var ex__27256__auto__ = e34009;
var statearr_34010_34012 = state_34002;
(statearr_34010_34012[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34013 = state_34002;
state_34002 = G__34013;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto__ = function(state_34002){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto____1.call(this,state_34002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27319__auto__ = (function (){var statearr_34011 = f__27318__auto__.call(null);
(statearr_34011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto__);

return statearr_34011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto__,figwheel_version,temp__4657__auto__))
);

return c__27317__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34014){
var map__34018 = p__34014;
var map__34018__$1 = ((((!((map__34018 == null)))?((((map__34018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34018):map__34018);
var file = cljs.core.get.call(null,map__34018__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34018__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34018__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34020 = "";
var G__34020__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__34020),cljs.core.str("file "),cljs.core.str(file)].join(''):G__34020);
var G__34020__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__34020__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__34020__$1);
if(cljs.core.truth_((function (){var and__25039__auto__ = line;
if(cljs.core.truth_(and__25039__auto__)){
return column;
} else {
return and__25039__auto__;
}
})())){
return [cljs.core.str(G__34020__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__34020__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34021){
var map__34028 = p__34021;
var map__34028__$1 = ((((!((map__34028 == null)))?((((map__34028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34028):map__34028);
var ed = map__34028__$1;
var formatted_exception = cljs.core.get.call(null,map__34028__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34028__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34028__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34030_34034 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34031_34035 = null;
var count__34032_34036 = (0);
var i__34033_34037 = (0);
while(true){
if((i__34033_34037 < count__34032_34036)){
var msg_34038 = cljs.core._nth.call(null,chunk__34031_34035,i__34033_34037);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34038);

var G__34039 = seq__34030_34034;
var G__34040 = chunk__34031_34035;
var G__34041 = count__34032_34036;
var G__34042 = (i__34033_34037 + (1));
seq__34030_34034 = G__34039;
chunk__34031_34035 = G__34040;
count__34032_34036 = G__34041;
i__34033_34037 = G__34042;
continue;
} else {
var temp__4657__auto___34043 = cljs.core.seq.call(null,seq__34030_34034);
if(temp__4657__auto___34043){
var seq__34030_34044__$1 = temp__4657__auto___34043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34030_34044__$1)){
var c__25863__auto___34045 = cljs.core.chunk_first.call(null,seq__34030_34044__$1);
var G__34046 = cljs.core.chunk_rest.call(null,seq__34030_34044__$1);
var G__34047 = c__25863__auto___34045;
var G__34048 = cljs.core.count.call(null,c__25863__auto___34045);
var G__34049 = (0);
seq__34030_34034 = G__34046;
chunk__34031_34035 = G__34047;
count__34032_34036 = G__34048;
i__34033_34037 = G__34049;
continue;
} else {
var msg_34050 = cljs.core.first.call(null,seq__34030_34044__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34050);

var G__34051 = cljs.core.next.call(null,seq__34030_34044__$1);
var G__34052 = null;
var G__34053 = (0);
var G__34054 = (0);
seq__34030_34034 = G__34051;
chunk__34031_34035 = G__34052;
count__34032_34036 = G__34053;
i__34033_34037 = G__34054;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34055){
var map__34058 = p__34055;
var map__34058__$1 = ((((!((map__34058 == null)))?((((map__34058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34058):map__34058);
var w = map__34058__$1;
var message = cljs.core.get.call(null,map__34058__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25039__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25039__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25039__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34070 = cljs.core.seq.call(null,plugins);
var chunk__34071 = null;
var count__34072 = (0);
var i__34073 = (0);
while(true){
if((i__34073 < count__34072)){
var vec__34074 = cljs.core._nth.call(null,chunk__34071,i__34073);
var k = cljs.core.nth.call(null,vec__34074,(0),null);
var plugin = cljs.core.nth.call(null,vec__34074,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34080 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34070,chunk__34071,count__34072,i__34073,pl_34080,vec__34074,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34080.call(null,msg_hist);
});})(seq__34070,chunk__34071,count__34072,i__34073,pl_34080,vec__34074,k,plugin))
);
} else {
}

var G__34081 = seq__34070;
var G__34082 = chunk__34071;
var G__34083 = count__34072;
var G__34084 = (i__34073 + (1));
seq__34070 = G__34081;
chunk__34071 = G__34082;
count__34072 = G__34083;
i__34073 = G__34084;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34070);
if(temp__4657__auto__){
var seq__34070__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34070__$1)){
var c__25863__auto__ = cljs.core.chunk_first.call(null,seq__34070__$1);
var G__34085 = cljs.core.chunk_rest.call(null,seq__34070__$1);
var G__34086 = c__25863__auto__;
var G__34087 = cljs.core.count.call(null,c__25863__auto__);
var G__34088 = (0);
seq__34070 = G__34085;
chunk__34071 = G__34086;
count__34072 = G__34087;
i__34073 = G__34088;
continue;
} else {
var vec__34077 = cljs.core.first.call(null,seq__34070__$1);
var k = cljs.core.nth.call(null,vec__34077,(0),null);
var plugin = cljs.core.nth.call(null,vec__34077,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34089 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34070,chunk__34071,count__34072,i__34073,pl_34089,vec__34077,k,plugin,seq__34070__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34089.call(null,msg_hist);
});})(seq__34070,chunk__34071,count__34072,i__34073,pl_34089,vec__34077,k,plugin,seq__34070__$1,temp__4657__auto__))
);
} else {
}

var G__34090 = cljs.core.next.call(null,seq__34070__$1);
var G__34091 = null;
var G__34092 = (0);
var G__34093 = (0);
seq__34070 = G__34090;
chunk__34071 = G__34091;
count__34072 = G__34092;
i__34073 = G__34093;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args34094 = [];
var len__26127__auto___34101 = arguments.length;
var i__26128__auto___34102 = (0);
while(true){
if((i__26128__auto___34102 < len__26127__auto___34101)){
args34094.push((arguments[i__26128__auto___34102]));

var G__34103 = (i__26128__auto___34102 + (1));
i__26128__auto___34102 = G__34103;
continue;
} else {
}
break;
}

var G__34096 = args34094.length;
switch (G__34096) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34094.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34097_34105 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34098_34106 = null;
var count__34099_34107 = (0);
var i__34100_34108 = (0);
while(true){
if((i__34100_34108 < count__34099_34107)){
var msg_34109 = cljs.core._nth.call(null,chunk__34098_34106,i__34100_34108);
figwheel.client.socket.handle_incoming_message.call(null,msg_34109);

var G__34110 = seq__34097_34105;
var G__34111 = chunk__34098_34106;
var G__34112 = count__34099_34107;
var G__34113 = (i__34100_34108 + (1));
seq__34097_34105 = G__34110;
chunk__34098_34106 = G__34111;
count__34099_34107 = G__34112;
i__34100_34108 = G__34113;
continue;
} else {
var temp__4657__auto___34114 = cljs.core.seq.call(null,seq__34097_34105);
if(temp__4657__auto___34114){
var seq__34097_34115__$1 = temp__4657__auto___34114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34097_34115__$1)){
var c__25863__auto___34116 = cljs.core.chunk_first.call(null,seq__34097_34115__$1);
var G__34117 = cljs.core.chunk_rest.call(null,seq__34097_34115__$1);
var G__34118 = c__25863__auto___34116;
var G__34119 = cljs.core.count.call(null,c__25863__auto___34116);
var G__34120 = (0);
seq__34097_34105 = G__34117;
chunk__34098_34106 = G__34118;
count__34099_34107 = G__34119;
i__34100_34108 = G__34120;
continue;
} else {
var msg_34121 = cljs.core.first.call(null,seq__34097_34115__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34121);

var G__34122 = cljs.core.next.call(null,seq__34097_34115__$1);
var G__34123 = null;
var G__34124 = (0);
var G__34125 = (0);
seq__34097_34105 = G__34122;
chunk__34098_34106 = G__34123;
count__34099_34107 = G__34124;
i__34100_34108 = G__34125;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26134__auto__ = [];
var len__26127__auto___34130 = arguments.length;
var i__26128__auto___34131 = (0);
while(true){
if((i__26128__auto___34131 < len__26127__auto___34130)){
args__26134__auto__.push((arguments[i__26128__auto___34131]));

var G__34132 = (i__26128__auto___34131 + (1));
i__26128__auto___34131 = G__34132;
continue;
} else {
}
break;
}

var argseq__26135__auto__ = ((((0) < args__26134__auto__.length))?(new cljs.core.IndexedSeq(args__26134__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26135__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34127){
var map__34128 = p__34127;
var map__34128__$1 = ((((!((map__34128 == null)))?((((map__34128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34128):map__34128);
var opts = map__34128__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34126){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34126));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34134){if((e34134 instanceof Error)){
var e = e34134;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34134;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34138){
var map__34139 = p__34138;
var map__34139__$1 = ((((!((map__34139 == null)))?((((map__34139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34139):map__34139);
var msg_name = cljs.core.get.call(null,map__34139__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1474452851456