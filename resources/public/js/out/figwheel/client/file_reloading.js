// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25051__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25051__auto__){
return or__25051__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25051__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29697_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29697_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29702 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29703 = null;
var count__29704 = (0);
var i__29705 = (0);
while(true){
if((i__29705 < count__29704)){
var n = cljs.core._nth.call(null,chunk__29703,i__29705);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29706 = seq__29702;
var G__29707 = chunk__29703;
var G__29708 = count__29704;
var G__29709 = (i__29705 + (1));
seq__29702 = G__29706;
chunk__29703 = G__29707;
count__29704 = G__29708;
i__29705 = G__29709;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29702);
if(temp__4657__auto__){
var seq__29702__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29702__$1)){
var c__25863__auto__ = cljs.core.chunk_first.call(null,seq__29702__$1);
var G__29710 = cljs.core.chunk_rest.call(null,seq__29702__$1);
var G__29711 = c__25863__auto__;
var G__29712 = cljs.core.count.call(null,c__25863__auto__);
var G__29713 = (0);
seq__29702 = G__29710;
chunk__29703 = G__29711;
count__29704 = G__29712;
i__29705 = G__29713;
continue;
} else {
var n = cljs.core.first.call(null,seq__29702__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29714 = cljs.core.next.call(null,seq__29702__$1);
var G__29715 = null;
var G__29716 = (0);
var G__29717 = (0);
seq__29702 = G__29714;
chunk__29703 = G__29715;
count__29704 = G__29716;
i__29705 = G__29717;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29768_29779 = cljs.core.seq.call(null,deps);
var chunk__29769_29780 = null;
var count__29770_29781 = (0);
var i__29771_29782 = (0);
while(true){
if((i__29771_29782 < count__29770_29781)){
var dep_29783 = cljs.core._nth.call(null,chunk__29769_29780,i__29771_29782);
topo_sort_helper_STAR_.call(null,dep_29783,(depth + (1)),state);

var G__29784 = seq__29768_29779;
var G__29785 = chunk__29769_29780;
var G__29786 = count__29770_29781;
var G__29787 = (i__29771_29782 + (1));
seq__29768_29779 = G__29784;
chunk__29769_29780 = G__29785;
count__29770_29781 = G__29786;
i__29771_29782 = G__29787;
continue;
} else {
var temp__4657__auto___29788 = cljs.core.seq.call(null,seq__29768_29779);
if(temp__4657__auto___29788){
var seq__29768_29789__$1 = temp__4657__auto___29788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29768_29789__$1)){
var c__25863__auto___29790 = cljs.core.chunk_first.call(null,seq__29768_29789__$1);
var G__29791 = cljs.core.chunk_rest.call(null,seq__29768_29789__$1);
var G__29792 = c__25863__auto___29790;
var G__29793 = cljs.core.count.call(null,c__25863__auto___29790);
var G__29794 = (0);
seq__29768_29779 = G__29791;
chunk__29769_29780 = G__29792;
count__29770_29781 = G__29793;
i__29771_29782 = G__29794;
continue;
} else {
var dep_29795 = cljs.core.first.call(null,seq__29768_29789__$1);
topo_sort_helper_STAR_.call(null,dep_29795,(depth + (1)),state);

var G__29796 = cljs.core.next.call(null,seq__29768_29789__$1);
var G__29797 = null;
var G__29798 = (0);
var G__29799 = (0);
seq__29768_29779 = G__29796;
chunk__29769_29780 = G__29797;
count__29770_29781 = G__29798;
i__29771_29782 = G__29799;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29772){
var vec__29776 = p__29772;
var seq__29777 = cljs.core.seq.call(null,vec__29776);
var first__29778 = cljs.core.first.call(null,seq__29777);
var seq__29777__$1 = cljs.core.next.call(null,seq__29777);
var x = first__29778;
var xs = seq__29777__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29776,seq__29777,first__29778,seq__29777__$1,x,xs,get_deps__$1){
return (function (p1__29718_SHARP_){
return clojure.set.difference.call(null,p1__29718_SHARP_,x);
});})(vec__29776,seq__29777,first__29778,seq__29777__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29812 = cljs.core.seq.call(null,provides);
var chunk__29813 = null;
var count__29814 = (0);
var i__29815 = (0);
while(true){
if((i__29815 < count__29814)){
var prov = cljs.core._nth.call(null,chunk__29813,i__29815);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29816_29824 = cljs.core.seq.call(null,requires);
var chunk__29817_29825 = null;
var count__29818_29826 = (0);
var i__29819_29827 = (0);
while(true){
if((i__29819_29827 < count__29818_29826)){
var req_29828 = cljs.core._nth.call(null,chunk__29817_29825,i__29819_29827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29828,prov);

var G__29829 = seq__29816_29824;
var G__29830 = chunk__29817_29825;
var G__29831 = count__29818_29826;
var G__29832 = (i__29819_29827 + (1));
seq__29816_29824 = G__29829;
chunk__29817_29825 = G__29830;
count__29818_29826 = G__29831;
i__29819_29827 = G__29832;
continue;
} else {
var temp__4657__auto___29833 = cljs.core.seq.call(null,seq__29816_29824);
if(temp__4657__auto___29833){
var seq__29816_29834__$1 = temp__4657__auto___29833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29816_29834__$1)){
var c__25863__auto___29835 = cljs.core.chunk_first.call(null,seq__29816_29834__$1);
var G__29836 = cljs.core.chunk_rest.call(null,seq__29816_29834__$1);
var G__29837 = c__25863__auto___29835;
var G__29838 = cljs.core.count.call(null,c__25863__auto___29835);
var G__29839 = (0);
seq__29816_29824 = G__29836;
chunk__29817_29825 = G__29837;
count__29818_29826 = G__29838;
i__29819_29827 = G__29839;
continue;
} else {
var req_29840 = cljs.core.first.call(null,seq__29816_29834__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29840,prov);

var G__29841 = cljs.core.next.call(null,seq__29816_29834__$1);
var G__29842 = null;
var G__29843 = (0);
var G__29844 = (0);
seq__29816_29824 = G__29841;
chunk__29817_29825 = G__29842;
count__29818_29826 = G__29843;
i__29819_29827 = G__29844;
continue;
}
} else {
}
}
break;
}

var G__29845 = seq__29812;
var G__29846 = chunk__29813;
var G__29847 = count__29814;
var G__29848 = (i__29815 + (1));
seq__29812 = G__29845;
chunk__29813 = G__29846;
count__29814 = G__29847;
i__29815 = G__29848;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29812);
if(temp__4657__auto__){
var seq__29812__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29812__$1)){
var c__25863__auto__ = cljs.core.chunk_first.call(null,seq__29812__$1);
var G__29849 = cljs.core.chunk_rest.call(null,seq__29812__$1);
var G__29850 = c__25863__auto__;
var G__29851 = cljs.core.count.call(null,c__25863__auto__);
var G__29852 = (0);
seq__29812 = G__29849;
chunk__29813 = G__29850;
count__29814 = G__29851;
i__29815 = G__29852;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29812__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29820_29853 = cljs.core.seq.call(null,requires);
var chunk__29821_29854 = null;
var count__29822_29855 = (0);
var i__29823_29856 = (0);
while(true){
if((i__29823_29856 < count__29822_29855)){
var req_29857 = cljs.core._nth.call(null,chunk__29821_29854,i__29823_29856);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29857,prov);

var G__29858 = seq__29820_29853;
var G__29859 = chunk__29821_29854;
var G__29860 = count__29822_29855;
var G__29861 = (i__29823_29856 + (1));
seq__29820_29853 = G__29858;
chunk__29821_29854 = G__29859;
count__29822_29855 = G__29860;
i__29823_29856 = G__29861;
continue;
} else {
var temp__4657__auto___29862__$1 = cljs.core.seq.call(null,seq__29820_29853);
if(temp__4657__auto___29862__$1){
var seq__29820_29863__$1 = temp__4657__auto___29862__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29820_29863__$1)){
var c__25863__auto___29864 = cljs.core.chunk_first.call(null,seq__29820_29863__$1);
var G__29865 = cljs.core.chunk_rest.call(null,seq__29820_29863__$1);
var G__29866 = c__25863__auto___29864;
var G__29867 = cljs.core.count.call(null,c__25863__auto___29864);
var G__29868 = (0);
seq__29820_29853 = G__29865;
chunk__29821_29854 = G__29866;
count__29822_29855 = G__29867;
i__29823_29856 = G__29868;
continue;
} else {
var req_29869 = cljs.core.first.call(null,seq__29820_29863__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29869,prov);

var G__29870 = cljs.core.next.call(null,seq__29820_29863__$1);
var G__29871 = null;
var G__29872 = (0);
var G__29873 = (0);
seq__29820_29853 = G__29870;
chunk__29821_29854 = G__29871;
count__29822_29855 = G__29872;
i__29823_29856 = G__29873;
continue;
}
} else {
}
}
break;
}

var G__29874 = cljs.core.next.call(null,seq__29812__$1);
var G__29875 = null;
var G__29876 = (0);
var G__29877 = (0);
seq__29812 = G__29874;
chunk__29813 = G__29875;
count__29814 = G__29876;
i__29815 = G__29877;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29882_29886 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29883_29887 = null;
var count__29884_29888 = (0);
var i__29885_29889 = (0);
while(true){
if((i__29885_29889 < count__29884_29888)){
var ns_29890 = cljs.core._nth.call(null,chunk__29883_29887,i__29885_29889);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29890);

var G__29891 = seq__29882_29886;
var G__29892 = chunk__29883_29887;
var G__29893 = count__29884_29888;
var G__29894 = (i__29885_29889 + (1));
seq__29882_29886 = G__29891;
chunk__29883_29887 = G__29892;
count__29884_29888 = G__29893;
i__29885_29889 = G__29894;
continue;
} else {
var temp__4657__auto___29895 = cljs.core.seq.call(null,seq__29882_29886);
if(temp__4657__auto___29895){
var seq__29882_29896__$1 = temp__4657__auto___29895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29882_29896__$1)){
var c__25863__auto___29897 = cljs.core.chunk_first.call(null,seq__29882_29896__$1);
var G__29898 = cljs.core.chunk_rest.call(null,seq__29882_29896__$1);
var G__29899 = c__25863__auto___29897;
var G__29900 = cljs.core.count.call(null,c__25863__auto___29897);
var G__29901 = (0);
seq__29882_29886 = G__29898;
chunk__29883_29887 = G__29899;
count__29884_29888 = G__29900;
i__29885_29889 = G__29901;
continue;
} else {
var ns_29902 = cljs.core.first.call(null,seq__29882_29896__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29902);

var G__29903 = cljs.core.next.call(null,seq__29882_29896__$1);
var G__29904 = null;
var G__29905 = (0);
var G__29906 = (0);
seq__29882_29886 = G__29903;
chunk__29883_29887 = G__29904;
count__29884_29888 = G__29905;
i__29885_29889 = G__29906;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25051__auto__ = goog.require__;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29907__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29908__i = 0, G__29908__a = new Array(arguments.length -  0);
while (G__29908__i < G__29908__a.length) {G__29908__a[G__29908__i] = arguments[G__29908__i + 0]; ++G__29908__i;}
  args = new cljs.core.IndexedSeq(G__29908__a,0);
} 
return G__29907__delegate.call(this,args);};
G__29907.cljs$lang$maxFixedArity = 0;
G__29907.cljs$lang$applyTo = (function (arglist__29909){
var args = cljs.core.seq(arglist__29909);
return G__29907__delegate(args);
});
G__29907.cljs$core$IFn$_invoke$arity$variadic = G__29907__delegate;
return G__29907;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29911 = cljs.core._EQ_;
var expr__29912 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29911.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29912))){
var path_parts = ((function (pred__29911,expr__29912){
return (function (p1__29910_SHARP_){
return clojure.string.split.call(null,p1__29910_SHARP_,/[\/\\]/);
});})(pred__29911,expr__29912))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29911,expr__29912){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29914){if((e29914 instanceof Error)){
var e = e29914;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29914;

}
}})());
});
;})(path_parts,sep,root,pred__29911,expr__29912))
} else {
if(cljs.core.truth_(pred__29911.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29912))){
return ((function (pred__29911,expr__29912){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__29911,expr__29912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29911,expr__29912))
);

return deferred.addErrback(((function (deferred,pred__29911,expr__29912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29911,expr__29912))
);
});
;})(pred__29911,expr__29912))
} else {
return ((function (pred__29911,expr__29912){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29911,expr__29912))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29915,callback){
var map__29918 = p__29915;
var map__29918__$1 = ((((!((map__29918 == null)))?((((map__29918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var file_msg = map__29918__$1;
var request_url = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29918,map__29918__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29918,map__29918__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27317__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto__){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto__){
return (function (state_29942){
var state_val_29943 = (state_29942[(1)]);
if((state_val_29943 === (7))){
var inst_29938 = (state_29942[(2)]);
var state_29942__$1 = state_29942;
var statearr_29944_29964 = state_29942__$1;
(statearr_29944_29964[(2)] = inst_29938);

(statearr_29944_29964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (1))){
var state_29942__$1 = state_29942;
var statearr_29945_29965 = state_29942__$1;
(statearr_29945_29965[(2)] = null);

(statearr_29945_29965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (4))){
var inst_29922 = (state_29942[(7)]);
var inst_29922__$1 = (state_29942[(2)]);
var state_29942__$1 = (function (){var statearr_29946 = state_29942;
(statearr_29946[(7)] = inst_29922__$1);

return statearr_29946;
})();
if(cljs.core.truth_(inst_29922__$1)){
var statearr_29947_29966 = state_29942__$1;
(statearr_29947_29966[(1)] = (5));

} else {
var statearr_29948_29967 = state_29942__$1;
(statearr_29948_29967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (6))){
var state_29942__$1 = state_29942;
var statearr_29949_29968 = state_29942__$1;
(statearr_29949_29968[(2)] = null);

(statearr_29949_29968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (3))){
var inst_29940 = (state_29942[(2)]);
var state_29942__$1 = state_29942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29942__$1,inst_29940);
} else {
if((state_val_29943 === (2))){
var state_29942__$1 = state_29942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29942__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29943 === (11))){
var inst_29934 = (state_29942[(2)]);
var state_29942__$1 = (function (){var statearr_29950 = state_29942;
(statearr_29950[(8)] = inst_29934);

return statearr_29950;
})();
var statearr_29951_29969 = state_29942__$1;
(statearr_29951_29969[(2)] = null);

(statearr_29951_29969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (9))){
var inst_29928 = (state_29942[(9)]);
var inst_29926 = (state_29942[(10)]);
var inst_29930 = inst_29928.call(null,inst_29926);
var state_29942__$1 = state_29942;
var statearr_29952_29970 = state_29942__$1;
(statearr_29952_29970[(2)] = inst_29930);

(statearr_29952_29970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (5))){
var inst_29922 = (state_29942[(7)]);
var inst_29924 = figwheel.client.file_reloading.blocking_load.call(null,inst_29922);
var state_29942__$1 = state_29942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29942__$1,(8),inst_29924);
} else {
if((state_val_29943 === (10))){
var inst_29926 = (state_29942[(10)]);
var inst_29932 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29926);
var state_29942__$1 = state_29942;
var statearr_29953_29971 = state_29942__$1;
(statearr_29953_29971[(2)] = inst_29932);

(statearr_29953_29971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (8))){
var inst_29922 = (state_29942[(7)]);
var inst_29928 = (state_29942[(9)]);
var inst_29926 = (state_29942[(2)]);
var inst_29927 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29928__$1 = cljs.core.get.call(null,inst_29927,inst_29922);
var state_29942__$1 = (function (){var statearr_29954 = state_29942;
(statearr_29954[(9)] = inst_29928__$1);

(statearr_29954[(10)] = inst_29926);

return statearr_29954;
})();
if(cljs.core.truth_(inst_29928__$1)){
var statearr_29955_29972 = state_29942__$1;
(statearr_29955_29972[(1)] = (9));

} else {
var statearr_29956_29973 = state_29942__$1;
(statearr_29956_29973[(1)] = (10));

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
});})(c__27317__auto__))
;
return ((function (switch__27252__auto__,c__27317__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27253__auto__ = null;
var figwheel$client$file_reloading$state_machine__27253__auto____0 = (function (){
var statearr_29960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29960[(0)] = figwheel$client$file_reloading$state_machine__27253__auto__);

(statearr_29960[(1)] = (1));

return statearr_29960;
});
var figwheel$client$file_reloading$state_machine__27253__auto____1 = (function (state_29942){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_29942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e29961){if((e29961 instanceof Object)){
var ex__27256__auto__ = e29961;
var statearr_29962_29974 = state_29942;
(statearr_29962_29974[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29975 = state_29942;
state_29942 = G__29975;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27253__auto__ = function(state_29942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27253__auto____1.call(this,state_29942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27253__auto____0;
figwheel$client$file_reloading$state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27253__auto____1;
return figwheel$client$file_reloading$state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto__))
})();
var state__27319__auto__ = (function (){var statearr_29963 = f__27318__auto__.call(null);
(statearr_29963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto__);

return statearr_29963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto__))
);

return c__27317__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29976,callback){
var map__29979 = p__29976;
var map__29979__$1 = ((((!((map__29979 == null)))?((((map__29979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29979):map__29979);
var file_msg = map__29979__$1;
var namespace = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29979,map__29979__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29979,map__29979__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29981){
var map__29984 = p__29981;
var map__29984__$1 = ((((!((map__29984 == null)))?((((map__29984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29984):map__29984);
var file_msg = map__29984__$1;
var namespace = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25039__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25039__auto__){
var or__25051__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
var or__25051__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25051__auto____$1)){
return or__25051__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25039__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29986,callback){
var map__29989 = p__29986;
var map__29989__$1 = ((((!((map__29989 == null)))?((((map__29989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29989):map__29989);
var file_msg = map__29989__$1;
var request_url = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27317__auto___30093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto___30093,out){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto___30093,out){
return (function (state_30075){
var state_val_30076 = (state_30075[(1)]);
if((state_val_30076 === (1))){
var inst_30049 = cljs.core.seq.call(null,files);
var inst_30050 = cljs.core.first.call(null,inst_30049);
var inst_30051 = cljs.core.next.call(null,inst_30049);
var inst_30052 = files;
var state_30075__$1 = (function (){var statearr_30077 = state_30075;
(statearr_30077[(7)] = inst_30050);

(statearr_30077[(8)] = inst_30051);

(statearr_30077[(9)] = inst_30052);

return statearr_30077;
})();
var statearr_30078_30094 = state_30075__$1;
(statearr_30078_30094[(2)] = null);

(statearr_30078_30094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (2))){
var inst_30052 = (state_30075[(9)]);
var inst_30058 = (state_30075[(10)]);
var inst_30057 = cljs.core.seq.call(null,inst_30052);
var inst_30058__$1 = cljs.core.first.call(null,inst_30057);
var inst_30059 = cljs.core.next.call(null,inst_30057);
var inst_30060 = (inst_30058__$1 == null);
var inst_30061 = cljs.core.not.call(null,inst_30060);
var state_30075__$1 = (function (){var statearr_30079 = state_30075;
(statearr_30079[(10)] = inst_30058__$1);

(statearr_30079[(11)] = inst_30059);

return statearr_30079;
})();
if(inst_30061){
var statearr_30080_30095 = state_30075__$1;
(statearr_30080_30095[(1)] = (4));

} else {
var statearr_30081_30096 = state_30075__$1;
(statearr_30081_30096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (3))){
var inst_30073 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30075__$1,inst_30073);
} else {
if((state_val_30076 === (4))){
var inst_30058 = (state_30075[(10)]);
var inst_30063 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30058);
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30075__$1,(7),inst_30063);
} else {
if((state_val_30076 === (5))){
var inst_30069 = cljs.core.async.close_BANG_.call(null,out);
var state_30075__$1 = state_30075;
var statearr_30082_30097 = state_30075__$1;
(statearr_30082_30097[(2)] = inst_30069);

(statearr_30082_30097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (6))){
var inst_30071 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30083_30098 = state_30075__$1;
(statearr_30083_30098[(2)] = inst_30071);

(statearr_30083_30098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (7))){
var inst_30059 = (state_30075[(11)]);
var inst_30065 = (state_30075[(2)]);
var inst_30066 = cljs.core.async.put_BANG_.call(null,out,inst_30065);
var inst_30052 = inst_30059;
var state_30075__$1 = (function (){var statearr_30084 = state_30075;
(statearr_30084[(12)] = inst_30066);

(statearr_30084[(9)] = inst_30052);

return statearr_30084;
})();
var statearr_30085_30099 = state_30075__$1;
(statearr_30085_30099[(2)] = null);

(statearr_30085_30099[(1)] = (2));


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
});})(c__27317__auto___30093,out))
;
return ((function (switch__27252__auto__,c__27317__auto___30093,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto____0 = (function (){
var statearr_30089 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30089[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto__);

(statearr_30089[(1)] = (1));

return statearr_30089;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto____1 = (function (state_30075){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_30075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e30090){if((e30090 instanceof Object)){
var ex__27256__auto__ = e30090;
var statearr_30091_30100 = state_30075;
(statearr_30091_30100[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30101 = state_30075;
state_30075 = G__30101;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto__ = function(state_30075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto____1.call(this,state_30075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto___30093,out))
})();
var state__27319__auto__ = (function (){var statearr_30092 = f__27318__auto__.call(null);
(statearr_30092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto___30093);

return statearr_30092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto___30093,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30102,opts){
var map__30106 = p__30102;
var map__30106__$1 = ((((!((map__30106 == null)))?((((map__30106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30106):map__30106);
var eval_body__$1 = cljs.core.get.call(null,map__30106__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25039__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25039__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25039__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30108){var e = e30108;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30109_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30109_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30118){
var vec__30119 = p__30118;
var k = cljs.core.nth.call(null,vec__30119,(0),null);
var v = cljs.core.nth.call(null,vec__30119,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30122){
var vec__30123 = p__30122;
var k = cljs.core.nth.call(null,vec__30123,(0),null);
var v = cljs.core.nth.call(null,vec__30123,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30129,p__30130){
var map__30377 = p__30129;
var map__30377__$1 = ((((!((map__30377 == null)))?((((map__30377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30377):map__30377);
var opts = map__30377__$1;
var before_jsload = cljs.core.get.call(null,map__30377__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30377__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30377__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30378 = p__30130;
var map__30378__$1 = ((((!((map__30378 == null)))?((((map__30378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30378):map__30378);
var msg = map__30378__$1;
var files = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27317__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27318__auto__ = (function (){var switch__27252__auto__ = ((function (c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30531){
var state_val_30532 = (state_30531[(1)]);
if((state_val_30532 === (7))){
var inst_30392 = (state_30531[(7)]);
var inst_30394 = (state_30531[(8)]);
var inst_30393 = (state_30531[(9)]);
var inst_30395 = (state_30531[(10)]);
var inst_30400 = cljs.core._nth.call(null,inst_30393,inst_30395);
var inst_30401 = figwheel.client.file_reloading.eval_body.call(null,inst_30400,opts);
var inst_30402 = (inst_30395 + (1));
var tmp30533 = inst_30392;
var tmp30534 = inst_30394;
var tmp30535 = inst_30393;
var inst_30392__$1 = tmp30533;
var inst_30393__$1 = tmp30535;
var inst_30394__$1 = tmp30534;
var inst_30395__$1 = inst_30402;
var state_30531__$1 = (function (){var statearr_30536 = state_30531;
(statearr_30536[(7)] = inst_30392__$1);

(statearr_30536[(8)] = inst_30394__$1);

(statearr_30536[(9)] = inst_30393__$1);

(statearr_30536[(11)] = inst_30401);

(statearr_30536[(10)] = inst_30395__$1);

return statearr_30536;
})();
var statearr_30537_30623 = state_30531__$1;
(statearr_30537_30623[(2)] = null);

(statearr_30537_30623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (20))){
var inst_30435 = (state_30531[(12)]);
var inst_30443 = figwheel.client.file_reloading.sort_files.call(null,inst_30435);
var state_30531__$1 = state_30531;
var statearr_30538_30624 = state_30531__$1;
(statearr_30538_30624[(2)] = inst_30443);

(statearr_30538_30624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (27))){
var state_30531__$1 = state_30531;
var statearr_30539_30625 = state_30531__$1;
(statearr_30539_30625[(2)] = null);

(statearr_30539_30625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (1))){
var inst_30384 = (state_30531[(13)]);
var inst_30381 = before_jsload.call(null,files);
var inst_30382 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30383 = (function (){return ((function (inst_30384,inst_30381,inst_30382,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30126_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30126_SHARP_);
});
;})(inst_30384,inst_30381,inst_30382,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30384__$1 = cljs.core.filter.call(null,inst_30383,files);
var inst_30385 = cljs.core.not_empty.call(null,inst_30384__$1);
var state_30531__$1 = (function (){var statearr_30540 = state_30531;
(statearr_30540[(14)] = inst_30382);

(statearr_30540[(15)] = inst_30381);

(statearr_30540[(13)] = inst_30384__$1);

return statearr_30540;
})();
if(cljs.core.truth_(inst_30385)){
var statearr_30541_30626 = state_30531__$1;
(statearr_30541_30626[(1)] = (2));

} else {
var statearr_30542_30627 = state_30531__$1;
(statearr_30542_30627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (24))){
var state_30531__$1 = state_30531;
var statearr_30543_30628 = state_30531__$1;
(statearr_30543_30628[(2)] = null);

(statearr_30543_30628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (39))){
var inst_30485 = (state_30531[(16)]);
var state_30531__$1 = state_30531;
var statearr_30544_30629 = state_30531__$1;
(statearr_30544_30629[(2)] = inst_30485);

(statearr_30544_30629[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (46))){
var inst_30526 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30545_30630 = state_30531__$1;
(statearr_30545_30630[(2)] = inst_30526);

(statearr_30545_30630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (4))){
var inst_30429 = (state_30531[(2)]);
var inst_30430 = cljs.core.List.EMPTY;
var inst_30431 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30430);
var inst_30432 = (function (){return ((function (inst_30429,inst_30430,inst_30431,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30127_SHARP_){
var and__25039__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30127_SHARP_);
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30127_SHARP_));
} else {
return and__25039__auto__;
}
});
;})(inst_30429,inst_30430,inst_30431,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30433 = cljs.core.filter.call(null,inst_30432,files);
var inst_30434 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30435 = cljs.core.concat.call(null,inst_30433,inst_30434);
var state_30531__$1 = (function (){var statearr_30546 = state_30531;
(statearr_30546[(12)] = inst_30435);

(statearr_30546[(17)] = inst_30429);

(statearr_30546[(18)] = inst_30431);

return statearr_30546;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30547_30631 = state_30531__$1;
(statearr_30547_30631[(1)] = (16));

} else {
var statearr_30548_30632 = state_30531__$1;
(statearr_30548_30632[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (15))){
var inst_30419 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30549_30633 = state_30531__$1;
(statearr_30549_30633[(2)] = inst_30419);

(statearr_30549_30633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (21))){
var inst_30445 = (state_30531[(19)]);
var inst_30445__$1 = (state_30531[(2)]);
var inst_30446 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30445__$1);
var state_30531__$1 = (function (){var statearr_30550 = state_30531;
(statearr_30550[(19)] = inst_30445__$1);

return statearr_30550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(22),inst_30446);
} else {
if((state_val_30532 === (31))){
var inst_30529 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30531__$1,inst_30529);
} else {
if((state_val_30532 === (32))){
var inst_30485 = (state_30531[(16)]);
var inst_30490 = inst_30485.cljs$lang$protocol_mask$partition0$;
var inst_30491 = (inst_30490 & (64));
var inst_30492 = inst_30485.cljs$core$ISeq$;
var inst_30493 = (inst_30491) || (inst_30492);
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30493)){
var statearr_30551_30634 = state_30531__$1;
(statearr_30551_30634[(1)] = (35));

} else {
var statearr_30552_30635 = state_30531__$1;
(statearr_30552_30635[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (40))){
var inst_30506 = (state_30531[(20)]);
var inst_30505 = (state_30531[(2)]);
var inst_30506__$1 = cljs.core.get.call(null,inst_30505,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30507 = cljs.core.get.call(null,inst_30505,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30508 = cljs.core.not_empty.call(null,inst_30506__$1);
var state_30531__$1 = (function (){var statearr_30553 = state_30531;
(statearr_30553[(21)] = inst_30507);

(statearr_30553[(20)] = inst_30506__$1);

return statearr_30553;
})();
if(cljs.core.truth_(inst_30508)){
var statearr_30554_30636 = state_30531__$1;
(statearr_30554_30636[(1)] = (41));

} else {
var statearr_30555_30637 = state_30531__$1;
(statearr_30555_30637[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (33))){
var state_30531__$1 = state_30531;
var statearr_30556_30638 = state_30531__$1;
(statearr_30556_30638[(2)] = false);

(statearr_30556_30638[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (13))){
var inst_30405 = (state_30531[(22)]);
var inst_30409 = cljs.core.chunk_first.call(null,inst_30405);
var inst_30410 = cljs.core.chunk_rest.call(null,inst_30405);
var inst_30411 = cljs.core.count.call(null,inst_30409);
var inst_30392 = inst_30410;
var inst_30393 = inst_30409;
var inst_30394 = inst_30411;
var inst_30395 = (0);
var state_30531__$1 = (function (){var statearr_30557 = state_30531;
(statearr_30557[(7)] = inst_30392);

(statearr_30557[(8)] = inst_30394);

(statearr_30557[(9)] = inst_30393);

(statearr_30557[(10)] = inst_30395);

return statearr_30557;
})();
var statearr_30558_30639 = state_30531__$1;
(statearr_30558_30639[(2)] = null);

(statearr_30558_30639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (22))){
var inst_30449 = (state_30531[(23)]);
var inst_30445 = (state_30531[(19)]);
var inst_30453 = (state_30531[(24)]);
var inst_30448 = (state_30531[(25)]);
var inst_30448__$1 = (state_30531[(2)]);
var inst_30449__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30448__$1);
var inst_30450 = (function (){var all_files = inst_30445;
var res_SINGLEQUOTE_ = inst_30448__$1;
var res = inst_30449__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30449,inst_30445,inst_30453,inst_30448,inst_30448__$1,inst_30449__$1,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30128_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30128_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30449,inst_30445,inst_30453,inst_30448,inst_30448__$1,inst_30449__$1,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30451 = cljs.core.filter.call(null,inst_30450,inst_30448__$1);
var inst_30452 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30453__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30452);
var inst_30454 = cljs.core.not_empty.call(null,inst_30453__$1);
var state_30531__$1 = (function (){var statearr_30559 = state_30531;
(statearr_30559[(23)] = inst_30449__$1);

(statearr_30559[(26)] = inst_30451);

(statearr_30559[(24)] = inst_30453__$1);

(statearr_30559[(25)] = inst_30448__$1);

return statearr_30559;
})();
if(cljs.core.truth_(inst_30454)){
var statearr_30560_30640 = state_30531__$1;
(statearr_30560_30640[(1)] = (23));

} else {
var statearr_30561_30641 = state_30531__$1;
(statearr_30561_30641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (36))){
var state_30531__$1 = state_30531;
var statearr_30562_30642 = state_30531__$1;
(statearr_30562_30642[(2)] = false);

(statearr_30562_30642[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (41))){
var inst_30506 = (state_30531[(20)]);
var inst_30510 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30511 = cljs.core.map.call(null,inst_30510,inst_30506);
var inst_30512 = cljs.core.pr_str.call(null,inst_30511);
var inst_30513 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30512)].join('');
var inst_30514 = figwheel.client.utils.log.call(null,inst_30513);
var state_30531__$1 = state_30531;
var statearr_30563_30643 = state_30531__$1;
(statearr_30563_30643[(2)] = inst_30514);

(statearr_30563_30643[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (43))){
var inst_30507 = (state_30531[(21)]);
var inst_30517 = (state_30531[(2)]);
var inst_30518 = cljs.core.not_empty.call(null,inst_30507);
var state_30531__$1 = (function (){var statearr_30564 = state_30531;
(statearr_30564[(27)] = inst_30517);

return statearr_30564;
})();
if(cljs.core.truth_(inst_30518)){
var statearr_30565_30644 = state_30531__$1;
(statearr_30565_30644[(1)] = (44));

} else {
var statearr_30566_30645 = state_30531__$1;
(statearr_30566_30645[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (29))){
var inst_30485 = (state_30531[(16)]);
var inst_30449 = (state_30531[(23)]);
var inst_30451 = (state_30531[(26)]);
var inst_30445 = (state_30531[(19)]);
var inst_30453 = (state_30531[(24)]);
var inst_30448 = (state_30531[(25)]);
var inst_30481 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30484 = (function (){var all_files = inst_30445;
var res_SINGLEQUOTE_ = inst_30448;
var res = inst_30449;
var files_not_loaded = inst_30451;
var dependencies_that_loaded = inst_30453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30485,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30481,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30483){
var map__30567 = p__30483;
var map__30567__$1 = ((((!((map__30567 == null)))?((((map__30567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30567):map__30567);
var namespace = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30485,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30481,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30485__$1 = cljs.core.group_by.call(null,inst_30484,inst_30451);
var inst_30487 = (inst_30485__$1 == null);
var inst_30488 = cljs.core.not.call(null,inst_30487);
var state_30531__$1 = (function (){var statearr_30569 = state_30531;
(statearr_30569[(16)] = inst_30485__$1);

(statearr_30569[(28)] = inst_30481);

return statearr_30569;
})();
if(inst_30488){
var statearr_30570_30646 = state_30531__$1;
(statearr_30570_30646[(1)] = (32));

} else {
var statearr_30571_30647 = state_30531__$1;
(statearr_30571_30647[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (44))){
var inst_30507 = (state_30531[(21)]);
var inst_30520 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30507);
var inst_30521 = cljs.core.pr_str.call(null,inst_30520);
var inst_30522 = [cljs.core.str("not required: "),cljs.core.str(inst_30521)].join('');
var inst_30523 = figwheel.client.utils.log.call(null,inst_30522);
var state_30531__$1 = state_30531;
var statearr_30572_30648 = state_30531__$1;
(statearr_30572_30648[(2)] = inst_30523);

(statearr_30572_30648[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (6))){
var inst_30426 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30573_30649 = state_30531__$1;
(statearr_30573_30649[(2)] = inst_30426);

(statearr_30573_30649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (28))){
var inst_30451 = (state_30531[(26)]);
var inst_30478 = (state_30531[(2)]);
var inst_30479 = cljs.core.not_empty.call(null,inst_30451);
var state_30531__$1 = (function (){var statearr_30574 = state_30531;
(statearr_30574[(29)] = inst_30478);

return statearr_30574;
})();
if(cljs.core.truth_(inst_30479)){
var statearr_30575_30650 = state_30531__$1;
(statearr_30575_30650[(1)] = (29));

} else {
var statearr_30576_30651 = state_30531__$1;
(statearr_30576_30651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (25))){
var inst_30449 = (state_30531[(23)]);
var inst_30465 = (state_30531[(2)]);
var inst_30466 = cljs.core.not_empty.call(null,inst_30449);
var state_30531__$1 = (function (){var statearr_30577 = state_30531;
(statearr_30577[(30)] = inst_30465);

return statearr_30577;
})();
if(cljs.core.truth_(inst_30466)){
var statearr_30578_30652 = state_30531__$1;
(statearr_30578_30652[(1)] = (26));

} else {
var statearr_30579_30653 = state_30531__$1;
(statearr_30579_30653[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (34))){
var inst_30500 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30500)){
var statearr_30580_30654 = state_30531__$1;
(statearr_30580_30654[(1)] = (38));

} else {
var statearr_30581_30655 = state_30531__$1;
(statearr_30581_30655[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (17))){
var state_30531__$1 = state_30531;
var statearr_30582_30656 = state_30531__$1;
(statearr_30582_30656[(2)] = recompile_dependents);

(statearr_30582_30656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (3))){
var state_30531__$1 = state_30531;
var statearr_30583_30657 = state_30531__$1;
(statearr_30583_30657[(2)] = null);

(statearr_30583_30657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (12))){
var inst_30422 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30584_30658 = state_30531__$1;
(statearr_30584_30658[(2)] = inst_30422);

(statearr_30584_30658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (2))){
var inst_30384 = (state_30531[(13)]);
var inst_30391 = cljs.core.seq.call(null,inst_30384);
var inst_30392 = inst_30391;
var inst_30393 = null;
var inst_30394 = (0);
var inst_30395 = (0);
var state_30531__$1 = (function (){var statearr_30585 = state_30531;
(statearr_30585[(7)] = inst_30392);

(statearr_30585[(8)] = inst_30394);

(statearr_30585[(9)] = inst_30393);

(statearr_30585[(10)] = inst_30395);

return statearr_30585;
})();
var statearr_30586_30659 = state_30531__$1;
(statearr_30586_30659[(2)] = null);

(statearr_30586_30659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (23))){
var inst_30449 = (state_30531[(23)]);
var inst_30451 = (state_30531[(26)]);
var inst_30445 = (state_30531[(19)]);
var inst_30453 = (state_30531[(24)]);
var inst_30448 = (state_30531[(25)]);
var inst_30456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30458 = (function (){var all_files = inst_30445;
var res_SINGLEQUOTE_ = inst_30448;
var res = inst_30449;
var files_not_loaded = inst_30451;
var dependencies_that_loaded = inst_30453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30456,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30457){
var map__30587 = p__30457;
var map__30587__$1 = ((((!((map__30587 == null)))?((((map__30587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30587):map__30587);
var request_url = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30456,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30459 = cljs.core.reverse.call(null,inst_30453);
var inst_30460 = cljs.core.map.call(null,inst_30458,inst_30459);
var inst_30461 = cljs.core.pr_str.call(null,inst_30460);
var inst_30462 = figwheel.client.utils.log.call(null,inst_30461);
var state_30531__$1 = (function (){var statearr_30589 = state_30531;
(statearr_30589[(31)] = inst_30456);

return statearr_30589;
})();
var statearr_30590_30660 = state_30531__$1;
(statearr_30590_30660[(2)] = inst_30462);

(statearr_30590_30660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (35))){
var state_30531__$1 = state_30531;
var statearr_30591_30661 = state_30531__$1;
(statearr_30591_30661[(2)] = true);

(statearr_30591_30661[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (19))){
var inst_30435 = (state_30531[(12)]);
var inst_30441 = figwheel.client.file_reloading.expand_files.call(null,inst_30435);
var state_30531__$1 = state_30531;
var statearr_30592_30662 = state_30531__$1;
(statearr_30592_30662[(2)] = inst_30441);

(statearr_30592_30662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (11))){
var state_30531__$1 = state_30531;
var statearr_30593_30663 = state_30531__$1;
(statearr_30593_30663[(2)] = null);

(statearr_30593_30663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (9))){
var inst_30424 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30594_30664 = state_30531__$1;
(statearr_30594_30664[(2)] = inst_30424);

(statearr_30594_30664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (5))){
var inst_30394 = (state_30531[(8)]);
var inst_30395 = (state_30531[(10)]);
var inst_30397 = (inst_30395 < inst_30394);
var inst_30398 = inst_30397;
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30398)){
var statearr_30595_30665 = state_30531__$1;
(statearr_30595_30665[(1)] = (7));

} else {
var statearr_30596_30666 = state_30531__$1;
(statearr_30596_30666[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (14))){
var inst_30405 = (state_30531[(22)]);
var inst_30414 = cljs.core.first.call(null,inst_30405);
var inst_30415 = figwheel.client.file_reloading.eval_body.call(null,inst_30414,opts);
var inst_30416 = cljs.core.next.call(null,inst_30405);
var inst_30392 = inst_30416;
var inst_30393 = null;
var inst_30394 = (0);
var inst_30395 = (0);
var state_30531__$1 = (function (){var statearr_30597 = state_30531;
(statearr_30597[(7)] = inst_30392);

(statearr_30597[(8)] = inst_30394);

(statearr_30597[(9)] = inst_30393);

(statearr_30597[(32)] = inst_30415);

(statearr_30597[(10)] = inst_30395);

return statearr_30597;
})();
var statearr_30598_30667 = state_30531__$1;
(statearr_30598_30667[(2)] = null);

(statearr_30598_30667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (45))){
var state_30531__$1 = state_30531;
var statearr_30599_30668 = state_30531__$1;
(statearr_30599_30668[(2)] = null);

(statearr_30599_30668[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (26))){
var inst_30449 = (state_30531[(23)]);
var inst_30451 = (state_30531[(26)]);
var inst_30445 = (state_30531[(19)]);
var inst_30453 = (state_30531[(24)]);
var inst_30448 = (state_30531[(25)]);
var inst_30468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30470 = (function (){var all_files = inst_30445;
var res_SINGLEQUOTE_ = inst_30448;
var res = inst_30449;
var files_not_loaded = inst_30451;
var dependencies_that_loaded = inst_30453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30468,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30469){
var map__30600 = p__30469;
var map__30600__$1 = ((((!((map__30600 == null)))?((((map__30600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30600):map__30600);
var namespace = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30468,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30471 = cljs.core.map.call(null,inst_30470,inst_30449);
var inst_30472 = cljs.core.pr_str.call(null,inst_30471);
var inst_30473 = figwheel.client.utils.log.call(null,inst_30472);
var inst_30474 = (function (){var all_files = inst_30445;
var res_SINGLEQUOTE_ = inst_30448;
var res = inst_30449;
var files_not_loaded = inst_30451;
var dependencies_that_loaded = inst_30453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30468,inst_30470,inst_30471,inst_30472,inst_30473,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30449,inst_30451,inst_30445,inst_30453,inst_30448,inst_30468,inst_30470,inst_30471,inst_30472,inst_30473,state_val_30532,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30475 = setTimeout(inst_30474,(10));
var state_30531__$1 = (function (){var statearr_30602 = state_30531;
(statearr_30602[(33)] = inst_30473);

(statearr_30602[(34)] = inst_30468);

return statearr_30602;
})();
var statearr_30603_30669 = state_30531__$1;
(statearr_30603_30669[(2)] = inst_30475);

(statearr_30603_30669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (16))){
var state_30531__$1 = state_30531;
var statearr_30604_30670 = state_30531__$1;
(statearr_30604_30670[(2)] = reload_dependents);

(statearr_30604_30670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (38))){
var inst_30485 = (state_30531[(16)]);
var inst_30502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30485);
var state_30531__$1 = state_30531;
var statearr_30605_30671 = state_30531__$1;
(statearr_30605_30671[(2)] = inst_30502);

(statearr_30605_30671[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (30))){
var state_30531__$1 = state_30531;
var statearr_30606_30672 = state_30531__$1;
(statearr_30606_30672[(2)] = null);

(statearr_30606_30672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (10))){
var inst_30405 = (state_30531[(22)]);
var inst_30407 = cljs.core.chunked_seq_QMARK_.call(null,inst_30405);
var state_30531__$1 = state_30531;
if(inst_30407){
var statearr_30607_30673 = state_30531__$1;
(statearr_30607_30673[(1)] = (13));

} else {
var statearr_30608_30674 = state_30531__$1;
(statearr_30608_30674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (18))){
var inst_30439 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30439)){
var statearr_30609_30675 = state_30531__$1;
(statearr_30609_30675[(1)] = (19));

} else {
var statearr_30610_30676 = state_30531__$1;
(statearr_30610_30676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (42))){
var state_30531__$1 = state_30531;
var statearr_30611_30677 = state_30531__$1;
(statearr_30611_30677[(2)] = null);

(statearr_30611_30677[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (37))){
var inst_30497 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30612_30678 = state_30531__$1;
(statearr_30612_30678[(2)] = inst_30497);

(statearr_30612_30678[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (8))){
var inst_30392 = (state_30531[(7)]);
var inst_30405 = (state_30531[(22)]);
var inst_30405__$1 = cljs.core.seq.call(null,inst_30392);
var state_30531__$1 = (function (){var statearr_30613 = state_30531;
(statearr_30613[(22)] = inst_30405__$1);

return statearr_30613;
})();
if(inst_30405__$1){
var statearr_30614_30679 = state_30531__$1;
(statearr_30614_30679[(1)] = (10));

} else {
var statearr_30615_30680 = state_30531__$1;
(statearr_30615_30680[(1)] = (11));

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
});})(c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27252__auto__,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto____0 = (function (){
var statearr_30619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30619[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto__);

(statearr_30619[(1)] = (1));

return statearr_30619;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto____1 = (function (state_30531){
while(true){
var ret_value__27254__auto__ = (function (){try{while(true){
var result__27255__auto__ = switch__27252__auto__.call(null,state_30531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27255__auto__;
}
break;
}
}catch (e30620){if((e30620 instanceof Object)){
var ex__27256__auto__ = e30620;
var statearr_30621_30681 = state_30531;
(statearr_30621_30681[(5)] = ex__27256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30682 = state_30531;
state_30531 = G__30682;
continue;
} else {
return ret_value__27254__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto__ = function(state_30531){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto____1.call(this,state_30531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27253__auto__;
})()
;})(switch__27252__auto__,c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27319__auto__ = (function (){var statearr_30622 = f__27318__auto__.call(null);
(statearr_30622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27317__auto__);

return statearr_30622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27319__auto__);
});})(c__27317__auto__,map__30377,map__30377__$1,opts,before_jsload,on_jsload,reload_dependents,map__30378,map__30378__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27317__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30685,link){
var map__30688 = p__30685;
var map__30688__$1 = ((((!((map__30688 == null)))?((((map__30688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30688):map__30688);
var file = cljs.core.get.call(null,map__30688__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30688,map__30688__$1,file){
return (function (p1__30683_SHARP_,p2__30684_SHARP_){
if(cljs.core._EQ_.call(null,p1__30683_SHARP_,p2__30684_SHARP_)){
return p1__30683_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30688,map__30688__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30694){
var map__30695 = p__30694;
var map__30695__$1 = ((((!((map__30695 == null)))?((((map__30695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30695):map__30695);
var match_length = cljs.core.get.call(null,map__30695__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30695__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30690_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30690_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30697 = [];
var len__26127__auto___30700 = arguments.length;
var i__26128__auto___30701 = (0);
while(true){
if((i__26128__auto___30701 < len__26127__auto___30700)){
args30697.push((arguments[i__26128__auto___30701]));

var G__30702 = (i__26128__auto___30701 + (1));
i__26128__auto___30701 = G__30702;
continue;
} else {
}
break;
}

var G__30699 = args30697.length;
switch (G__30699) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30697.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30704_SHARP_,p2__30705_SHARP_){
return cljs.core.assoc.call(null,p1__30704_SHARP_,cljs.core.get.call(null,p2__30705_SHARP_,key),p2__30705_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30706){
var map__30709 = p__30706;
var map__30709__$1 = ((((!((map__30709 == null)))?((((map__30709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30709):map__30709);
var f_data = map__30709__$1;
var file = cljs.core.get.call(null,map__30709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30711,p__30712){
var map__30721 = p__30711;
var map__30721__$1 = ((((!((map__30721 == null)))?((((map__30721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30721):map__30721);
var opts = map__30721__$1;
var on_cssload = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30722 = p__30712;
var map__30722__$1 = ((((!((map__30722 == null)))?((((map__30722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30722):map__30722);
var files_msg = map__30722__$1;
var files = cljs.core.get.call(null,map__30722__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30725_30729 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30726_30730 = null;
var count__30727_30731 = (0);
var i__30728_30732 = (0);
while(true){
if((i__30728_30732 < count__30727_30731)){
var f_30733 = cljs.core._nth.call(null,chunk__30726_30730,i__30728_30732);
figwheel.client.file_reloading.reload_css_file.call(null,f_30733);

var G__30734 = seq__30725_30729;
var G__30735 = chunk__30726_30730;
var G__30736 = count__30727_30731;
var G__30737 = (i__30728_30732 + (1));
seq__30725_30729 = G__30734;
chunk__30726_30730 = G__30735;
count__30727_30731 = G__30736;
i__30728_30732 = G__30737;
continue;
} else {
var temp__4657__auto___30738 = cljs.core.seq.call(null,seq__30725_30729);
if(temp__4657__auto___30738){
var seq__30725_30739__$1 = temp__4657__auto___30738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30725_30739__$1)){
var c__25863__auto___30740 = cljs.core.chunk_first.call(null,seq__30725_30739__$1);
var G__30741 = cljs.core.chunk_rest.call(null,seq__30725_30739__$1);
var G__30742 = c__25863__auto___30740;
var G__30743 = cljs.core.count.call(null,c__25863__auto___30740);
var G__30744 = (0);
seq__30725_30729 = G__30741;
chunk__30726_30730 = G__30742;
count__30727_30731 = G__30743;
i__30728_30732 = G__30744;
continue;
} else {
var f_30745 = cljs.core.first.call(null,seq__30725_30739__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30745);

var G__30746 = cljs.core.next.call(null,seq__30725_30739__$1);
var G__30747 = null;
var G__30748 = (0);
var G__30749 = (0);
seq__30725_30729 = G__30746;
chunk__30726_30730 = G__30747;
count__30727_30731 = G__30748;
i__30728_30732 = G__30749;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30721,map__30721__$1,opts,on_cssload,map__30722,map__30722__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30721,map__30721__$1,opts,on_cssload,map__30722,map__30722__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1474452845563