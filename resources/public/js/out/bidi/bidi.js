// Compiled by ClojureScript 1.9.229 {}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__26348 = string;
var G__26348__$1 = (((G__26348 == null))?null:[cljs.core.str(G__26348)].join(''));
var G__26348__$2 = (((G__26348__$1 == null))?null:encodeURIComponent(G__26348__$1));
if((G__26348__$2 == null)){
return null;
} else {
return G__26348__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__26350 = string;
var G__26350__$1 = (((G__26350 == null))?null:[cljs.core.str(G__26350)].join(''));
if((G__26350__$1 == null)){
return null;
} else {
return decodeURIComponent(G__26350__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_);
} else {
var m__25729__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ParameterEncoding.encode-parameter",_);
}
}
}
});

(bidi.bidi.ParameterEncoding["string"] = true);

(bidi.bidi.encode_parameter["string"] = (function (s){
return s;
}));

(bidi.bidi.ParameterEncoding["number"] = true);

(bidi.bidi.encode_parameter["number"] = (function (s){
return s;
}));

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = true;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = true;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode.call(null,[cljs.core.str(cljs.core.namespace.call(null,k__$1)),cljs.core.str((cljs.core.truth_(cljs.core.namespace.call(null,k__$1))?"/":null)),cljs.core.str(cljs.core.name.call(null,k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_);
} else {
var m__25729__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.param_key[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_);
} else {
var m__25729__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_);
} else {
var m__25729__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_,params);
} else {
var m__25729__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_,params);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_,s);
} else {
var m__25729__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PatternSegment.matches?",_);
}
}
}
});

(bidi.bidi.PatternSegment["string"] = true);

(bidi.bidi.segment_regex_group["string"] = (function (this$){
return this$;
}));

(bidi.bidi.param_key["string"] = (function (_){
return null;
}));

(bidi.bidi.transform_param["string"] = (function (_){
return cljs.core.identity;
}));

(bidi.bidi.unmatch_segment["string"] = (function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$PatternSegment$ = true;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches.call(null,this$__$1,[cljs.core.str(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param.call(null,cljs.core.first.call(null,this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second.call(null,this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.call(null,[cljs.core.str("If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__4655__auto__ = cljs.core.get.call(null,params,k);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_.call(null,cljs.core.first.call(null,this$__$1),v))){
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Parameter value of "),cljs.core.str(v),cljs.core.str(" (key "),cljs.core.str(k),cljs.core.str(") "),cljs.core.str("is not compatible with the route pattern "),cljs.core.str(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No parameter found in params for key "),cljs.core.str(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = true;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__4655__auto__ = this$__$1.call(null,params);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return bidi.bidi.encode_parameter.call(null,v);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot form URI without a value given for "),cljs.core.str(this$__$1),cljs.core.str(" parameter")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

(bidi.bidi.PatternSegment["function"] = true);

(bidi.bidi.segment_regex_group["function"] = (function (this$){
var pred__26354 = cljs.core._EQ_;
var expr__26355 = this$;
if(cljs.core.truth_(pred__26354.call(null,cljs.core.keyword,expr__26355))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_(pred__26354.call(null,cljs.core.long$,expr__26355))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_(pred__26354.call(null,bidi.bidi.uuid,expr__26355))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_(pred__26354.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__26355))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Unidentified function qualifier to pattern segment: "),cljs.core.str(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26355)].join('')));
}
}
}
}
}));

(bidi.bidi.transform_param["function"] = (function (this$){
var pred__26357 = cljs.core._EQ_;
var expr__26358 = this$;
if(cljs.core.truth_(pred__26357.call(null,cljs.core.keyword,expr__26358))){
return cljs.core.comp.call(null,cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_(pred__26357.call(null,cljs.core.long$,expr__26358))){
return ((function (pred__26357,expr__26358){
return (function (p1__26352_SHARP_){
return Number(p1__26352_SHARP_);
});
;})(pred__26357,expr__26358))
} else {
if(cljs.core.truth_(pred__26357.call(null,bidi.bidi.uuid,expr__26358))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Unrecognized function "),cljs.core.str(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}));

(bidi.bidi.matches_QMARK_["function"] = (function (this$,s){
var pred__26360 = cljs.core._EQ_;
var expr__26361 = this$;
if(cljs.core.truth_(pred__26360.call(null,cljs.core.keyword,expr__26361))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_(pred__26360.call(null,cljs.core.long$,expr__26361))){
return cljs.core.not.call(null,isNaN(s));
} else {
if(cljs.core.truth_(pred__26360.call(null,bidi.bidi.uuid,expr__26361))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26361)].join('')));
}
}
}
}));

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,path){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,path);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_,path);
} else {
var m__25729__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_,path);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_,m);
} else {
var m__25729__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_,m);
} else {
var m__25729__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_,m);
} else {
var m__25729__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = [cljs.core.str("file:///"),cljs.core.str(path)].join('');
return cljs.core.subs.call(null,(new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__26363,orig_env){
var vec__26367 = p__26363;
var pattern = cljs.core.nth.call(null,vec__26367,(0),null);
var matched = cljs.core.nth.call(null,vec__26367,(1),null);
var env = cljs.core.update.call(null,orig_env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),bidi.bidi.just_path);
var temp__4657__auto__ = bidi.bidi.match_pattern.call(null,pattern,env);
if(cljs.core.truth_(temp__4657__auto__)){
var match_result = temp__4657__auto__;
return bidi.bidi.resolve_handler.call(null,matched,cljs.core.merge.call(null,env,match_result));
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__4657__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(regex_pattern),cljs.core.str("(.*)")].join('')),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__4657__auto__)){
var path = temp__4657__auto__;
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
} else {
return null;
}
});
(bidi.bidi.Pattern["string"] = true);

(bidi.bidi.match_pattern["string"] = (function (this$,env){
return bidi.bidi.match_beginning.call(null,[cljs.core.str("("),cljs.core.str(bidi.bidi.segment_regex_group.call(null,this$)),cljs.core.str(")")].join(''),env);
}));

(bidi.bidi.unmatch_pattern["string"] = (function (this$,_){
return this$;
}));

RegExp.prototype.bidi$bidi$Pattern$ = true;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning.call(null,[cljs.core.str("("),cljs.core.str(bidi.bidi.segment_regex_group.call(null,this$__$1)),cljs.core.str(")")].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern.call(null,clojure.string.replace.call(null,p,/\\\\/,""),m);
});

(bidi.bidi.Pattern["boolean"] = true);

(bidi.bidi.match_pattern["boolean"] = (function (this$,env){
if(this$){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else {
return null;
}
}));

(bidi.bidi.unmatch_pattern["boolean"] = (function (this$,_){
if(this$){
return "";
} else {
return null;
}
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__4657__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.call(null,bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.call(null,((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return [cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.call(null,cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str(_PERCENT___$3),cljs.core.str("(.*)")].join('');
var _PERCENT___$5 = cljs.core.re_pattern.call(null,_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches.call(null,_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next.call(null,_PERCENT___$6);
})();
if(temp__4657__auto__){
var groups = temp__4657__auto__;
var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,bidi.bidi.param_key,this$__$1),cljs.core.map.call(null,cljs.core.apply,cljs.core.map.call(null,bidi.bidi.transform_param,this$__$1),cljs.core.map.call(null,cljs.core.list,cljs.core.butlast.call(null,groups))))));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last.call(null,groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__26370_SHARP_){
return bidi.bidi.unmatch_segment.call(null,p1__26370_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = true;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__26373){
var vec__26374 = p__26373;
var k = cljs.core.nth.call(null,vec__26374,(0),null);
var v = cljs.core.nth.call(null,vec__26374,(1),null);
if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__26377){
var vec__26378 = p__26377;
var k = cljs.core.nth.call(null,vec__26378,(0),null);
var v = cljs.core.nth.call(null,vec__26378,(1),null);
if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return v.call(null,cljs.core.get.call(null,env,k));
} else {
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26371_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__26371_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = true;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26372_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__26372_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,this$__$1),s);
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__4657__auto__ = bidi.bidi.unresolve_handler.call(null,cljs.core.second.call(null,v),m);
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
return [cljs.core.str(bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,v),m)),cljs.core.str(r)].join('');
} else {
return null;
}
});
(bidi.bidi.Matched["null"] = true);

(bidi.bidi.resolve_handler["null"] = (function (this$,m){
return null;
}));

(bidi.bidi.unresolve_handler["null"] = (function (this$,m){
return null;
}));

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26381_SHARP_){
return bidi.bidi.match_pair.call(null,p1__26381_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26382_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__26382_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = true;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26385_SHARP_){
return bidi.bidi.match_pair.call(null,p1__26385_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26386_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__26386_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = true;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26383_SHARP_){
return bidi.bidi.match_pair.call(null,p1__26383_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26384_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__26384_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

(bidi.bidi.Matched["string"] = true);

(bidi.bidi.unresolve_handler["string"] = (function (_,___$1){
return null;
}));

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = true;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

(bidi.bidi.Matched["function"] = true);

(bidi.bidi.resolve_handler["function"] = (function (this$,m){
return bidi.bidi.succeed.call(null,this$,m);
}));

(bidi.bidi.unresolve_handler["function"] = (function (this$,m){
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
}));

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = true;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26387_SHARP_){
return bidi.bidi.match_pair.call(null,p1__26387_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26388_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__26388_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = true;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26389_SHARP_){
return bidi.bidi.match_pair.call(null,p1__26389_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26390_SHARP_){
return bidi.bidi.unmatch_pair.call(null,p1__26390_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = true;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed.call(null,this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,new cljs.core.Keyword(null,"route","route",329891309),route)),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__26148__auto__ = [];
var len__26141__auto___26397 = arguments.length;
var i__26142__auto___26398 = (0);
while(true){
if((i__26142__auto___26398 < len__26141__auto___26397)){
args__26148__auto__.push((arguments[i__26142__auto___26398]));

var G__26399 = (i__26142__auto___26398 + (1));
i__26142__auto___26398 = G__26399;
continue;
} else {
}
break;
}

var argseq__26149__auto__ = ((((2) < args__26148__auto__.length))?(new cljs.core.IndexedSeq(args__26148__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26149__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__26394){
var map__26395 = p__26394;
var map__26395__$1 = ((((!((map__26395 == null)))?((((map__26395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26395):map__26395);
var options = map__26395__$1;
return bidi.bidi.match_route_STAR_.call(null,route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq26391){
var G__26392 = cljs.core.first.call(null,seq26391);
var seq26391__$1 = cljs.core.next.call(null,seq26391);
var G__26393 = cljs.core.first.call(null,seq26391__$1);
var seq26391__$2 = cljs.core.next.call(null,seq26391__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__26392,G__26393,seq26391__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__26148__auto__ = [];
var len__26141__auto___26406 = arguments.length;
var i__26142__auto___26407 = (0);
while(true){
if((i__26142__auto___26407 < len__26141__auto___26406)){
args__26148__auto__.push((arguments[i__26142__auto___26407]));

var G__26408 = (i__26142__auto___26407 + (1));
i__26142__auto___26407 = G__26408;
continue;
} else {
}
break;
}

var argseq__26149__auto__ = ((((2) < args__26148__auto__.length))?(new cljs.core.IndexedSeq(args__26148__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26149__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__26403){
var map__26404 = p__26403;
var map__26404__$1 = ((((!((map__26404 == null)))?((((map__26404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26404):map__26404);
var params = map__26404__$1;
if((handler == null)){
throw cljs.core.ex_info.call(null,"Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair.call(null,route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq26400){
var G__26401 = cljs.core.first.call(null,seq26400);
var seq26400__$1 = cljs.core.next.call(null,seq26400);
var G__26402 = cljs.core.first.call(null,seq26400__$1);
var seq26400__$2 = cljs.core.next.call(null,seq26400__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__26401,G__26402,seq26400__$2);
});


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if((!((_ == null))) && (!((_.bidi$bidi$Matches$matches$arity$1 == null)))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.matches[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_);
} else {
var m__25729__auto____$1 = (bidi.bidi.matches["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Matches.matches",_);
}
}
}
});

(bidi.bidi.Matches["_"] = true);

(bidi.bidi.matches["_"] = (function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
}));

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = true;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = true;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25687__auto__,k__25688__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
return cljs.core._lookup.call(null,this__25687__auto____$1,k__25688__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25689__auto__,k26410,else__25690__auto__){
var self__ = this;
var this__25689__auto____$1 = this;
var G__26412 = (((k26410 instanceof cljs.core.Keyword))?k26410.fqn:null);
switch (G__26412) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26410,else__25690__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25701__auto__,writer__25702__auto__,opts__25703__auto__){
var self__ = this;
var this__25701__auto____$1 = this;
var pr_pair__25704__auto__ = ((function (this__25701__auto____$1){
return (function (keyval__25705__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,cljs.core.pr_writer,""," ","",opts__25703__auto__,keyval__25705__auto__);
});})(this__25701__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,pr_pair__25704__auto__,"#bidi.bidi.Route{",", ","}",opts__25703__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$ = true;

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26409){
var self__ = this;
var G__26409__$1 = this;
return (new cljs.core.RecordIter((0),G__26409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25681__auto__){
var self__ = this;
var this__25681__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25691__auto__){
var self__ = this;
var this__25691__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25682__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var h__25500__auto__ = self__.__hash;
if(!((h__25500__auto__ == null))){
return h__25500__auto__;
} else {
var h__25500__auto____$1 = cljs.core.hash_imap.call(null,this__25682__auto____$1);
self__.__hash = h__25500__auto____$1;

return h__25500__auto____$1;
}
});

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25683__auto__,other__25684__auto__){
var self__ = this;
var this__25683__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25053__auto__ = other__25684__auto__;
if(cljs.core.truth_(and__25053__auto__)){
var and__25053__auto____$1 = (this__25683__auto____$1.constructor === other__25684__auto__.constructor);
if(and__25053__auto____$1){
return cljs.core.equiv_map.call(null,this__25683__auto____$1,other__25684__auto__);
} else {
return and__25053__auto____$1;
}
} else {
return and__25053__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25696__auto__,k__25697__auto__){
var self__ = this;
var this__25696__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__25697__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25696__auto____$1),self__.__meta),k__25697__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25697__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25694__auto__,k__25695__auto__,G__26409){
var self__ = this;
var this__25694__auto____$1 = this;
var pred__26413 = cljs.core.keyword_identical_QMARK_;
var expr__26414 = k__25695__auto__;
if(cljs.core.truth_(pred__26413.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__26414))){
return (new bidi.bidi.Route(G__26409,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26413.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__26414))){
return (new bidi.bidi.Route(self__.handler,G__26409,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25695__auto__,G__26409),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25699__auto__){
var self__ = this;
var this__25699__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25686__auto__,G__26409){
var self__ = this;
var this__25686__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__26409,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25692__auto__,entry__25693__auto__){
var self__ = this;
var this__25692__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25693__auto__)){
return cljs.core._assoc.call(null,this__25692__auto____$1,cljs.core._nth.call(null,entry__25693__auto__,(0)),cljs.core._nth.call(null,entry__25693__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25692__auto____$1,entry__25693__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__25721__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Route");
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__25721__auto__,writer__25722__auto__){
return cljs.core._write.call(null,writer__25722__auto__,"bidi.bidi/Route");
});

bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__26411){
return (new bidi.bidi.Route(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__26411),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__26411),null,cljs.core.dissoc.call(null,G__26411,new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"path","path",-188191168)),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((!((_ == null))) && (!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.gather[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_,context);
} else {
var m__25729__auto____$1 = (bidi.bidi.gather["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_,context);
} else {
throw cljs.core.missing_protocol.call(null,"RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var args26417 = [];
var len__26141__auto___26428 = arguments.length;
var i__26142__auto___26429 = (0);
while(true){
if((i__26142__auto___26429 < len__26141__auto___26428)){
args26417.push((arguments[i__26142__auto___26429]));

var G__26430 = (i__26142__auto___26429 + (1));
i__26142__auto___26429 = G__26430;
continue;
} else {
}
break;
}

var G__26419 = args26417.length;
switch (G__26419) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26417.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__26420,ctx){
var vec__26421 = p__26420;
var pattern = cljs.core.nth.call(null,vec__26421,(0),null);
var matched = cljs.core.nth.call(null,vec__26421,(1),null);
return cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__25845__auto__ = ((function (vec__26421,pattern,matched){
return (function bidi$bidi$iter__26424(s__26425){
return (new cljs.core.LazySeq(null,((function (vec__26421,pattern,matched){
return (function (){
var s__26425__$1 = s__26425;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26425__$1);
if(temp__4657__auto__){
var s__26425__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26425__$2)){
var c__25843__auto__ = cljs.core.chunk_first.call(null,s__26425__$2);
var size__25844__auto__ = cljs.core.count.call(null,c__25843__auto__);
var b__26427 = cljs.core.chunk_buffer.call(null,size__25844__auto__);
if((function (){var i__26426 = (0);
while(true){
if((i__26426 < size__25844__auto__)){
var p = cljs.core._nth.call(null,c__25843__auto__,i__26426);
cljs.core.chunk_append.call(null,b__26427,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__26432 = (i__26426 + (1));
i__26426 = G__26432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26427),bidi$bidi$iter__26424.call(null,cljs.core.chunk_rest.call(null,s__26425__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26427),null);
}
} else {
var p = cljs.core.first.call(null,s__26425__$2);
return cljs.core.cons.call(null,bidi.bidi.gather.call(null,matched,cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__26424.call(null,cljs.core.rest.call(null,s__26425__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26421,pattern,matched))
,null,null));
});})(vec__26421,pattern,matched))
;
return iter__25845__auto__.call(null,bidi.bidi.matches.call(null,pattern));
})());
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__26433_SHARP_){
return bidi.bidi.route_seq.call(null,p1__26433_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__26434_SHARP_){
return bidi.bidi.route_seq.call(null,p1__26434_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__26435_SHARP_){
return bidi.bidi.route_seq.call(null,p1__26435_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__26436_SHARP_){
return bidi.bidi.route_seq.call(null,p1__26436_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = true;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p1__26437_SHARP_){
return bidi.bidi.route_seq.call(null,p1__26437_SHARP_,context);
});})(this$__$1))
,this$__$1);
});

(bidi.bidi.RouteSeq["_"] = true);

(bidi.bidi.gather["_"] = (function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),this$))], null);
}));

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((!((_ == null))) && (!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__25728__auto__ = (((_ == null))?null:_);
var m__25729__auto__ = (bidi.bidi.routes[goog.typeOf(x__25728__auto__)]);
if(!((m__25729__auto__ == null))){
return m__25729__auto__.call(null,_);
} else {
var m__25729__auto____$1 = (bidi.bidi.routes["_"]);
if(!((m__25729__auto____$1 == null))){
return m__25729__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"RouteProvider.routes",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25687__auto__,k__25688__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
return cljs.core._lookup.call(null,this__25687__auto____$1,k__25688__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25689__auto__,k26440,else__25690__auto__){
var self__ = this;
var this__25689__auto____$1 = this;
var G__26442 = (((k26440 instanceof cljs.core.Keyword))?k26440.fqn:null);
switch (G__26442) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26440,else__25690__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25701__auto__,writer__25702__auto__,opts__25703__auto__){
var self__ = this;
var this__25701__auto____$1 = this;
var pr_pair__25704__auto__ = ((function (this__25701__auto____$1){
return (function (keyval__25705__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,cljs.core.pr_writer,""," ","",opts__25703__auto__,keyval__25705__auto__);
});})(this__25701__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,pr_pair__25704__auto__,"#bidi.bidi.Alternates{",", ","}",opts__25703__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$ = true;

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26439){
var self__ = this;
var G__26439__$1 = this;
return (new cljs.core.RecordIter((0),G__26439__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alts","alts",647552416)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25681__auto__){
var self__ = this;
var this__25681__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25691__auto__){
var self__ = this;
var this__25691__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25682__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var h__25500__auto__ = self__.__hash;
if(!((h__25500__auto__ == null))){
return h__25500__auto__;
} else {
var h__25500__auto____$1 = cljs.core.hash_imap.call(null,this__25682__auto____$1);
self__.__hash = h__25500__auto____$1;

return h__25500__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25683__auto__,other__25684__auto__){
var self__ = this;
var this__25683__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25053__auto__ = other__25684__auto__;
if(cljs.core.truth_(and__25053__auto__)){
var and__25053__auto____$1 = (this__25683__auto____$1.constructor === other__25684__auto__.constructor);
if(and__25053__auto____$1){
return cljs.core.equiv_map.call(null,this__25683__auto____$1,other__25684__auto__);
} else {
return and__25053__auto____$1;
}
} else {
return and__25053__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25696__auto__,k__25697__auto__){
var self__ = this;
var this__25696__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alts","alts",647552416),null], null), null),k__25697__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25696__auto____$1),self__.__meta),k__25697__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25697__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25694__auto__,k__25695__auto__,G__26439){
var self__ = this;
var this__25694__auto____$1 = this;
var pred__26443 = cljs.core.keyword_identical_QMARK_;
var expr__26444 = k__25695__auto__;
if(cljs.core.truth_(pred__26443.call(null,new cljs.core.Keyword(null,"alts","alts",647552416),expr__26444))){
return (new bidi.bidi.Alternates(G__26439,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25695__auto__,G__26439),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25699__auto__){
var self__ = this;
var this__25699__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alts","alts",647552416),self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25686__auto__,G__26439){
var self__ = this;
var this__25686__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__26439,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25692__auto__,entry__25693__auto__){
var self__ = this;
var this__25692__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25693__auto__)){
return cljs.core._assoc.call(null,this__25692__auto____$1,cljs.core._nth.call(null,entry__25693__auto__,(0)),cljs.core._nth.call(null,entry__25693__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25692__auto____$1,entry__25693__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = true;

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = true;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__26438_SHARP_){
return bidi.bidi.match_pattern.call(null,p1__26438_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alts","alts",-2006883353,null)], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__25721__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__25721__auto__,writer__25722__auto__){
return cljs.core._write.call(null,writer__25722__auto__,"bidi.bidi/Alternates");
});

bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__26441){
return (new bidi.bidi.Alternates(new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(G__26441),null,cljs.core.dissoc.call(null,G__26441,new cljs.core.Keyword(null,"alts","alts",647552416)),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__26148__auto__ = [];
var len__26141__auto___26448 = arguments.length;
var i__26142__auto___26449 = (0);
while(true){
if((i__26142__auto___26449 < len__26141__auto___26448)){
args__26148__auto__.push((arguments[i__26142__auto___26449]));

var G__26450 = (i__26142__auto___26449 + (1));
i__26142__auto___26449 = G__26450;
continue;
} else {
}
break;
}

var argseq__26149__auto__ = ((((0) < args__26148__auto__.length))?(new cljs.core.IndexedSeq(args__26148__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__26149__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates.call(null,alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

bidi.bidi.alts.cljs$lang$applyTo = (function (seq26447){
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26447));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25687__auto__,k__25688__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
return cljs.core._lookup.call(null,this__25687__auto____$1,k__25688__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25689__auto__,k26452,else__25690__auto__){
var self__ = this;
var this__25689__auto____$1 = this;
var G__26454 = (((k26452 instanceof cljs.core.Keyword))?k26452.fqn:null);
switch (G__26454) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26452,else__25690__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = true;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"handler","handler",-195596612),self__.matched,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag))], null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25701__auto__,writer__25702__auto__,opts__25703__auto__){
var self__ = this;
var this__25701__auto____$1 = this;
var pr_pair__25704__auto__ = ((function (this__25701__auto____$1){
return (function (keyval__25705__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,cljs.core.pr_writer,""," ","",opts__25703__auto__,keyval__25705__auto__);
});})(this__25701__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,pr_pair__25704__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__25703__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$ = true;

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26451){
var self__ = this;
var G__26451__$1 = this;
return (new cljs.core.RecordIter((0),G__26451__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = true;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.matched,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(((new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,self__.tag,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25681__auto__){
var self__ = this;
var this__25681__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25691__auto__){
var self__ = this;
var this__25691__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25682__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var h__25500__auto__ = self__.__hash;
if(!((h__25500__auto__ == null))){
return h__25500__auto__;
} else {
var h__25500__auto____$1 = cljs.core.hash_imap.call(null,this__25682__auto____$1);
self__.__hash = h__25500__auto____$1;

return h__25500__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25683__auto__,other__25684__auto__){
var self__ = this;
var this__25683__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25053__auto__ = other__25684__auto__;
if(cljs.core.truth_(and__25053__auto__)){
var and__25053__auto____$1 = (this__25683__auto____$1.constructor === other__25684__auto__.constructor);
if(and__25053__auto____$1){
return cljs.core.equiv_map.call(null,this__25683__auto____$1,other__25684__auto__);
} else {
return and__25053__auto____$1;
}
} else {
return and__25053__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25696__auto__,k__25697__auto__){
var self__ = this;
var this__25696__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matched","matched",-975207164),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__25697__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25696__auto____$1),self__.__meta),k__25697__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25697__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25694__auto__,k__25695__auto__,G__26451){
var self__ = this;
var this__25694__auto____$1 = this;
var pred__26455 = cljs.core.keyword_identical_QMARK_;
var expr__26456 = k__25695__auto__;
if(cljs.core.truth_(pred__26455.call(null,new cljs.core.Keyword(null,"matched","matched",-975207164),expr__26456))){
return (new bidi.bidi.TaggedMatch(G__26451,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26455.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__26456))){
return (new bidi.bidi.TaggedMatch(self__.matched,G__26451,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25695__auto__,G__26451),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25699__auto__){
var self__ = this;
var this__25699__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matched","matched",-975207164),self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25686__auto__,G__26451){
var self__ = this;
var this__25686__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__26451,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25692__auto__,entry__25693__auto__){
var self__ = this;
var this__25692__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25693__auto__)){
return cljs.core._assoc.call(null,this__25692__auto____$1,cljs.core._nth.call(null,entry__25693__auto__,(0)),cljs.core._nth.call(null,entry__25693__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25692__auto____$1,entry__25693__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matched","matched",665324363,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__25721__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__25721__auto__,writer__25722__auto__){
return cljs.core._write.call(null,writer__25722__auto__,"bidi.bidi/TaggedMatch");
});

bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__26453){
return (new bidi.bidi.TaggedMatch(new cljs.core.Keyword(null,"matched","matched",-975207164).cljs$core$IFn$_invoke$arity$1(G__26453),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__26453),null,cljs.core.dissoc.call(null,G__26453,new cljs.core.Keyword(null,"matched","matched",-975207164),new cljs.core.Keyword(null,"tag","tag",-1290361223)),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag__$1){
return bidi.bidi.__GT_TaggedMatch.call(null,matched,tag__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25687__auto__,k__25688__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
return cljs.core._lookup.call(null,this__25687__auto____$1,k__25688__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25689__auto__,k26460,else__25690__auto__){
var self__ = this;
var this__25689__auto____$1 = this;
var G__26462 = (((k26460 instanceof cljs.core.Keyword))?k26460.fqn:null);
switch (G__26462) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26460,else__25690__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25701__auto__,writer__25702__auto__,opts__25703__auto__){
var self__ = this;
var this__25701__auto____$1 = this;
var pr_pair__25704__auto__ = ((function (this__25701__auto____$1){
return (function (keyval__25705__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,cljs.core.pr_writer,""," ","",opts__25703__auto__,keyval__25705__auto__);
});})(this__25701__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,pr_pair__25704__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__25703__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$ = true;

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26459){
var self__ = this;
var G__26459__$1 = this;
return (new cljs.core.RecordIter((0),G__26459__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = true;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler.call(null,self__.handler,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.call(null,self__.id,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler.call(null,self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25681__auto__){
var self__ = this;
var this__25681__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25691__auto__){
var self__ = this;
var this__25691__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25682__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var h__25500__auto__ = self__.__hash;
if(!((h__25500__auto__ == null))){
return h__25500__auto__;
} else {
var h__25500__auto____$1 = cljs.core.hash_imap.call(null,this__25682__auto____$1);
self__.__hash = h__25500__auto____$1;

return h__25500__auto____$1;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25683__auto__,other__25684__auto__){
var self__ = this;
var this__25683__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25053__auto__ = other__25684__auto__;
if(cljs.core.truth_(and__25053__auto__)){
var and__25053__auto____$1 = (this__25683__auto____$1.constructor === other__25684__auto__.constructor);
if(and__25053__auto____$1){
return cljs.core.equiv_map.call(null,this__25683__auto____$1,other__25684__auto__);
} else {
return and__25053__auto____$1;
}
} else {
return and__25053__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25696__auto__,k__25697__auto__){
var self__ = this;
var this__25696__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__25697__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25696__auto____$1),self__.__meta),k__25697__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25697__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25694__auto__,k__25695__auto__,G__26459){
var self__ = this;
var this__25694__auto____$1 = this;
var pred__26463 = cljs.core.keyword_identical_QMARK_;
var expr__26464 = k__25695__auto__;
if(cljs.core.truth_(pred__26463.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__26464))){
return (new bidi.bidi.IdentifiableHandler(G__26459,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26463.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__26464))){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__26459,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25695__auto__,G__26459),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25699__auto__){
var self__ = this;
var this__25699__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25686__auto__,G__26459){
var self__ = this;
var this__25686__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__26459,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25692__auto__,entry__25693__auto__){
var self__ = this;
var this__25692__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25693__auto__)){
return cljs.core._assoc.call(null,this__25692__auto____$1,cljs.core._nth.call(null,entry__25693__auto__,(0)),cljs.core._nth.call(null,entry__25693__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25692__auto____$1,entry__25693__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__25721__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__25721__auto__,writer__25722__auto__){
return cljs.core._write.call(null,writer__25722__auto__,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__26461){
return (new bidi.bidi.IdentifiableHandler(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__26461),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__26461),null,cljs.core.dissoc.call(null,G__26461,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"handler","handler",-195596612)),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var args26467 = [];
var len__26141__auto___26470 = arguments.length;
var i__26142__auto___26471 = (0);
while(true){
if((i__26142__auto___26471 < len__26141__auto___26470)){
args26467.push((arguments[i__26142__auto___26471]));

var G__26472 = (i__26142__auto___26471 + (1));
i__26142__auto___26471 = G__26472;
continue;
} else {
}
break;
}

var G__26469 = args26467.length;
switch (G__26469) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26467.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler.call(null,null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25687__auto__,k__25688__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
return cljs.core._lookup.call(null,this__25687__auto____$1,k__25688__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25689__auto__,k26475,else__25690__auto__){
var self__ = this;
var this__25689__auto____$1 = this;
var G__26477 = (((k26475 instanceof cljs.core.Keyword))?k26475.fqn:null);
switch (G__26477) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26475,else__25690__auto__);

}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = true;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather.call(null,self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25701__auto__,writer__25702__auto__,opts__25703__auto__){
var self__ = this;
var this__25701__auto____$1 = this;
var pr_pair__25704__auto__ = ((function (this__25701__auto____$1){
return (function (keyval__25705__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,cljs.core.pr_writer,""," ","",opts__25703__auto__,keyval__25705__auto__);
});})(this__25701__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25702__auto__,pr_pair__25704__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__25703__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$ = true;

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26474){
var self__ = this;
var G__26474__$1 = this;
return (new cljs.core.RecordIter((0),G__26474__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = true;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = bidi.bidi.resolve_handler.call(null,self__.routes,m);
if(cljs.core.truth_(temp__4657__auto__)){
var m__$1 = temp__4657__auto__;
return cljs.core.merge.call(null,self__.context,m__$1);
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler.call(null,self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25681__auto__){
var self__ = this;
var this__25681__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25691__auto__){
var self__ = this;
var this__25691__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25682__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
var h__25500__auto__ = self__.__hash;
if(!((h__25500__auto__ == null))){
return h__25500__auto__;
} else {
var h__25500__auto____$1 = cljs.core.hash_imap.call(null,this__25682__auto____$1);
self__.__hash = h__25500__auto____$1;

return h__25500__auto____$1;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25683__auto__,other__25684__auto__){
var self__ = this;
var this__25683__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25053__auto__ = other__25684__auto__;
if(cljs.core.truth_(and__25053__auto__)){
var and__25053__auto____$1 = (this__25683__auto____$1.constructor === other__25684__auto__.constructor);
if(and__25053__auto____$1){
return cljs.core.equiv_map.call(null,this__25683__auto____$1,other__25684__auto__);
} else {
return and__25053__auto____$1;
}
} else {
return and__25053__auto__;
}
})())){
return true;
} else {
return false;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25696__auto__,k__25697__auto__){
var self__ = this;
var this__25696__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__25697__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25696__auto____$1),self__.__meta),k__25697__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25697__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25694__auto__,k__25695__auto__,G__26474){
var self__ = this;
var this__25694__auto____$1 = this;
var pred__26478 = cljs.core.keyword_identical_QMARK_;
var expr__26479 = k__25695__auto__;
if(cljs.core.truth_(pred__26478.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__26479))){
return (new bidi.bidi.RoutesContext(G__26474,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26478.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__26479))){
return (new bidi.bidi.RoutesContext(self__.routes,G__26474,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25695__auto__,G__26474),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25699__auto__){
var self__ = this;
var this__25699__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25686__auto__,G__26474){
var self__ = this;
var this__25686__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__26474,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25692__auto__,entry__25693__auto__){
var self__ = this;
var this__25692__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25693__auto__)){
return cljs.core._assoc.call(null,this__25692__auto____$1,cljs.core._nth.call(null,entry__25693__auto__,(0)),cljs.core._nth.call(null,entry__25693__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25692__auto____$1,entry__25693__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__25721__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/RoutesContext");
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__25721__auto__,writer__25722__auto__){
return cljs.core._write.call(null,writer__25722__auto__,"bidi.bidi/RoutesContext");
});

bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__26476){
return (new bidi.bidi.RoutesContext(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__26476),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__26476),null,cljs.core.dissoc.call(null,G__26476,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"context","context",-830191113)),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext.call(null,routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});

//# sourceMappingURL=bidi.js.map?rel=1474381272376