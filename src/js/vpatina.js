/*! vPatina JS: 0.1.2 2016-12-19
* https://www.vpatina.com
* Copyright (c) 2016 vPatina BV; */

var g_pswp = false;
var g_pswp_index = -1;
var g_site_url = 'https://www.vpatina.com';
var g_aid = 10;
var g_site_id = '247';
var g_user_id = '';
var g_user_name = '';
var g_sharer_id = '';
var g_host_protocol = 'https';
var g_host_tld = 'www';
var g_host_domain = 'vpatina.com';
var g_client_protocol = document.location.protocol;
var g_follow = [];
var g_branch = '9d08da5';

var g_list;
var g_cid = '';
var g_follow = [];
var g_artists = {};
var g_json_data;
var g_local_file = '';
var g_local_data = '';
var g_plugin_options = '';
var g_popup_options = '';
var g_popup_buttons = '';
var g_popup_tabs = '';
var g_cids = {};
var g_json_data = {};
var g_list = {};
var g_keys = {};     

// add-ons: move to separate file
// ATC Calendar
(function(w,d){var atc_url="//addtocalendar.com/atc/",atc_version="1.5",b=d.documentElement;if(!Array.indexOf){Array.prototype.indexOf=function(e){for(var t=0,n=this.length;t<n;t++){if(this[t]==e){return t}}return-1}}if(!Array.prototype.map){Array.prototype.map=function(e){var t=[];for(var n=0,r=this.length;n<r;n++){t.push(e(this[n]))}return t}}var isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"};var isFunc=function(e){return Object.prototype.toString.call(e)==="[object Function]"};var ready=function(e,t){function u(){if(!n){if(!t.body)return setTimeout(u,13);n=true;if(i){var e,r=0;while(e=i[r++])e.call(null);i=null}}}function a(){if(r)return;r=true;if(t.readyState==="complete")return u();if(t.addEventListener){t.addEventListener("DOMContentLoaded",s,false);e.addEventListener("load",u,false)}else{if(t.attachEvent){t.attachEvent("onreadystatechange",s);e.attachEvent("onload",u);var n=false;try{n=e.frameElement==null}catch(i){}if(b.doScroll&&n)f()}else{o=e.onload;e.onload=function(e){o(e);u()}}}}function f(){if(n)return;try{b.doScroll("left")}catch(e){setTimeout(f,1);return}u()}var n=false,r=false,i=[],s,o;if(t.addEventListener){s=function(){t.removeEventListener("DOMContentLoaded",s,false);u()}}else{if(t.attachEvent){s=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",s);u()}}}}return function(e){a();if(n){e.call(null)}else{i.push(e)}}}(w,d);if(w.addtocalendar&&typeof w.addtocalendar.start=="function")return;if(!w.addtocalendar)w.addtocalendar={};addtocalendar.languages={de:"In den Kalender",en:"Add to Calendar",es:"Añadir al Calendario",fr:"Ajouter au calendrier",hi:"कैलेंडर में जोड़ें","in":"Tambahkan ke Kalender",ja:"カレンダーに追加",ko:"캘린더에 추가",pt:"Adicionar ao calendário",ru:"Добавить в календарь",uk:"Додати в календар",zh:"添加到日历"};addtocalendar.calendar_urls={};addtocalendar.loadSettings=function(element){var settings={language:"auto","show-list-on":"click",calendars:["iCalendar","Google Calendar","Outlook","Outlook Online","Yahoo! Calendar"],secure:"auto","on-button-click":function(){},"on-calendar-click":function(){}};for(var option in settings){var pname="data-"+option;var eattr=element.getAttribute(pname);if(eattr!=null){if(isArray(settings[option])){settings[option]=eattr.replace(/\s*,\s*/g,",").replace(/^\s+|\s+$/g,"").split(",");continue}if(isFunc(settings[option])){var fn=window[eattr];if(isFunc(fn)){settings[option]=fn}else{settings[option]=eval("(function(mouseEvent){"+eattr+"})")}continue}settings[option]=element.getAttribute(pname)}}return settings};addtocalendar.load=function(){ready(function(){var e={iCalendar:"ical","Google Calendar":"google",Outlook:"outlook","Outlook Online":"outlookonline","Yahoo! Calendar":"yahoo"};var t=-(new Date).getTimezoneOffset().toString();var n=addtocalendar.languages;var r=document.getElementsByTagName("*");for(var i=0;i<r.length;i++){var s=r[i].className;if(s.length && s.split(" ").indexOf("addtocalendar")!=-1){var o=addtocalendar.loadSettings(r[i]);var u=o["calendars"].length==1;var a="http:";if(o["secure"]=="auto"){a=location.protocol=="https:"?"https:":"http:"}else if(o["secure"]=="true"){a="https:"}var f=a+atc_url;var l=r[i].id;var c=n["en"];if(o["language"]=="auto"){var h="no_lang";if(typeof navigator.language==="string"){h=navigator.language.substr(0,2)}else if(typeof navigator.browserLanguage==="string"){h=navigator.browserLanguage.substr(0,2)}if(n.hasOwnProperty(h)){c=n[h]}}else if(n.hasOwnProperty(o["language"])){c=n[o["language"]]}var p=["utz="+t,"uln="+navigator.language,"vjs="+atc_version];var d=r[i].getElementsByTagName("var");var v=-1;for(var m=0;m<d.length;m++){var g=d[m].className.replace("atc_","");var y=d[m].innerHTML;if(g=="event"){v++;continue}if(g==d[m].className){if(g=="atc-body"){c=y}continue}if(v==-1){continue}p.push("e["+v+"]["+g+"]"+"="+encodeURIComponent(y))}var b=l==""?"":l+"_link";var w=document.createElement("ul");w.className="atcb-list";var E="";var S="";for(var x in o["calendars"]){if(!e.hasOwnProperty(o["calendars"][x])){continue}var T=e[o["calendars"][x]];var N=l==""?"":'id="'+l+"_"+T+'_link"';var C=f+T+"?"+p.join("&");if(u){S=C}else{E+='<li class="atcb-item"><a '+N+' class="atcb-item-link" href="'+C+'" target="_blank">'+o["calendars"][x]+"</a></li>"}}w.innerHTML=E;if(r[i].getElementsByClassName("atcb-link")[0]==undefined){var k=document.createElement("a");k.className="atcb-link";k.innerHTML=c;k.id=b;k.tabIndex=1;if(u){k.href=S;k.target="_blank"}r[i].appendChild(k);if(!u){r[i].appendChild(w)}}else{var k=r[i].getElementsByClassName("atcb-link")[0];if(!u){k.parentNode.appendChild(w)}k.tabIndex=1;if(k.id==""){k.id=b}if(u){k.href=S;k.target="_blank"}}r[i].getElementsByClassName("atcb-link")[0].addEventListener("click",o["on-button-click"],false);var L=r[i].getElementsByClassName("atcb-item-link");for(var m=0;m<L.length;m++){L[m].addEventListener("click",o["on-calendar-click"],false)}}}})};addtocalendar.load()})(window,document)

var g_local = false;
var g_start = new Date().getTime();    
var g_timer = {};    

/** Tab content */
function vp_update_info(vpdata) {
  // the content
  var item = vpdata.item;
  
  var artist_id = item.artist_id;
  var artist = vpdata.artists && artist_id ? vpdata.artists[artist_id] : {};
  var curator = vpdata.curator;
  var collection = vpdata.collection;
  var content = '';
  
  if(document.getElementById("vp__tab1")) {
    //document.getElementById("vp__tab1").click(); // open first tab 
    var firstTab = document.getElementById("vp__tab1-content");
    firstTab.style.display = "block";
    
    if(g_popup_buttons && g_popup_tabs) {
      
      //console.log("show/hide tabs according to popup tabs:", g_popup_tabs);
      //console.log("vp_update_info: buttons",g_popup_buttons);
      //console.log("vp_update_info: tabs",g_popup_tabs);
      if(!g_plugin_options.show_info_button) {
        //console.log("vp_update_info: no info, should return - showing anyways");
        //return;
      } 
      
      document.getElementById('vp__tab1-content').innerHTML = vp_artwork_info(vpdata);       
      document.getElementById('vp__tab2-content').innerHTML = content = vp_tab_content(artist);
      document.getElementById('vp__tab3-content').innerHTML = content = vp_tab_content(collection);
      document.getElementById('vp__tab4-content').innerHTML = content = vp_tab_content(curator);
  
      var tab1 = document.getElementById('vp__tab1');
      var tab2 = document.getElementById('vp__tab2');
      var tab3 = document.getElementById('vp__tab3');
      var tab4 = document.getElementById('vp__tab4');
      
      tab1.style.display = inArray('artwork', g_popup_tabs) ? "block" : "none";
      tab2.style.display = inArray('artist', g_popup_tabs) ? "block" : "none";
      tab3.style.display = inArray('exhibition', g_popup_tabs) ? "block" : "none";
      tab4.style.display = inArray('gallery', g_popup_tabs) ? "block" : "none";
  
      return;                        
    }
  }
}


function vp_tab_content(object) {
  var title = object.display_name || object.title || '';
  var desc = object.description;
  var photo = object.image ? "<br><img src='" + object.image + "' width='150px'><br>" : "";
  var content = '';
  if(title) content = content + "<h4>" + title + "</h4>";
  if(photo) content = content + photo;
  if(desc)  content = content + "<div class='vp__tab-inner-content'><p>" + desc + "</p></div>";
  return content;;               
}  

function vp_artwork_info(vpdata) {
  var item = vpdata.item;
  var content = '';

  
  var artist_id = item.artist_id;
  var artist = vpdata.artists && artist_id ? vpdata.artists[artist_id] : null;

  var caption = vp_caption(vpdata, item, 1);
  
  var content = "<h4>" + caption + "</h4><br>";
  
  /**                       
  if(artist && artist.display_name) {
    var artist_str = artist.display_name;
    var loc_str = '';
    if(artist.city || artist.country) {
      var ar = [artist.city, artist.country];
      loc_str = ar.join(', ');
      artist_str = artist_str + "<br><small>" + loc_str + "</small>";
    }
    content = content + "<h4>by " + artist_str + "</h4>";
  }
  */
  
  if(item.original_technique) content = content + "<i>" + item.original_technique + "</i><br>"; 

  var size = vp_size(item);
  if(size) content = content + "<i>" + size + "</i><br><br>"; 

  if(item.original_count > 0) {
    if(item.original_count == 1) {
      content = content + "<i>Original of one</i><br>";
    } else {
      content = content + "<i>Series of " + item.original_count +"</i><br>";
    }
  }

  var price = vp_price(item);
  if(price)  content = content + "<i>" + price + "</i><br>"; 
  //if(item.original_price && item.original_currency && item.original_price > 0) {
  //  content = content + "<i>" + currency2symbol(item.original_currency) +  numberWithCommas(Math.round(item.original_price)) + "</i><br>";
  //} else {
  //  content = content + "Price on inquiry<br>";
  //}

  if(item.comment) content = content + "<hr><p>" + item.comment + "</p><br>";
  
  //<div class='vp__tab-content'><p>" + comment + "</p></div>";
  return content;  
}

// context: 
// 0 (default) = all 
// 1: tab 
// 2: mail

function vp_caption(vpdata, item, context) {
  if(typeof context == "undefined") var context = 0;

  var artist_id = item.artist_id;
  var artists = vpdata.artists;
  var artist = artists && artist_id ? artists[artist_id] : null;
  var artist_name = artist ? artist.display_name : "Unknown arist";
  //var artists = g_artists || {};
  //var artist_id = item.artist_id || 0;
  

  
  var gallery_name = vpdata.curator.display_name || '';
  
  var available = parseInt(item.original_available);
  var color = available > 0 ? '#0f0' : '#f00';
  var dot = available ? '<span style="color:' + color + '">&#x25cf;</span> ' : '';
  
  //console.log("vp_caption: vpdata:",vpdata);
  //console.log("vp_caption: artist:",artist);
  //console.log("vp_caption: artist_id:" + artist_id + " name=" + artist_name + " gartist:" + Object.size(g_artists));

  
  if(context > 0) {
    if(context == 2) dot = ''
    var year = item.original_year ? " (" + item.original_year + ")" : "";
    return dot + item.title + year + " by " + artist_name; // only used for sharing
  }


  // (AVAILABILITY DOT) GALLERY/ CURATOR NAME presents ARTWORK NAME(YEAR) TECHNQUE (COMMA)by ARTIST NAME (COMMA) SIZE (COMMA) SERIES OF X, (COMMA)PRICE
  // line 1: dot, gallery presents title technique
  
  //list of comma separated elements
  var elAr = []

  // element 1
  var element1 = '';
  
  // dot  
  if(inArray('dot', g_popup_title)) {
    element1 = element1 + dot + ' ';
  }

  // gallery
  if(inArray('gallery', g_popup_title) && gallery_name) {
    element1 = element1 + gallery_name + ' presents:';
  }

  // title
  if(inArray('artwork', g_popup_title) && item.title) {
    element1 = element1 + ' ' + item.title;
  }

  // year
  if(inArray('year', g_popup_title) && item.original_year) {
    element1 = element1 + ' (' +  item.original_year + ')';
  }  

  // technique
  if(inArray('technique', g_popup_title) && item.original_technique) {
    element1 = element1 + ' ' + item.original_technique;
  }
  
  if(element1) elAr.push(element1);
  
  
  // artist name
  if(inArray('artist', g_popup_title) && artist_name) {
    elAr.push('by ' + artist_name);
  }


  //console.log("vp_caption item:", item);
  
  var series = '';
  if(item.original_count > 0) {
    if(item.original_count == 1) {
      series = "Original of one";
    } else {
      series = "Series of " + item.original_count;
    }
  }

  var size = vp_size(item);
  var price = vp_price(item);
    
  var show_size = size && inArray('size', g_popup_title);
  var show_price = price && inArray('price', g_popup_title);
  var show_series = series && inArray('series', g_popup_title);

  //console.log("vp_caption " + item.title + " (" + item.media_id + "): available:" + available + " org_price:" + item.original_price + " price:" + price + " show_price:" + show_price + " g_popup_title:", g_popup_title);
  
  if(show_size || show_price || show_series) {
    if(show_size) elAr.push(size);
    if(show_series) elAr.push(series);
    if(show_price) elAr.push(price);
  }
  
  return elAr.join(', ');
}

function vp_size(item) {  
  var h = item.original_height;
  var w = item.original_width;
  var size = h > 0 && w > 0 ? h + "x" + w + " cm" : '';
  return size;
}

function vp_price(item) {
  var available = parseInt(item.original_available);
  var price = '';
  if(item.original_price > 0 && item.original_currency) { // price is set
    price = currency2symbol(item.original_currency) + numberWithCommas(Math.round(item.original_price));
  } else { // no price - only show if available
    price = available > 0 ? 'Price on inquiry' : '';
  }
  //price = "<i>" + price + "</i>";
  return price;
}

/** Load gallery data for PhotoSwipe from vPatina server */
function vp_load(element, data, reload) {
  var cid = element.getAttribute('id');
  var plugin_id = data.plugin_id;
  
  var ajax_url = g_site_url + '/home/app_data.php?oper=get-gallery&jsoncallback=handleStuff';
  var data_str = "&obj_type=" + data.obj_type +"&obj_id=" + data.obj_id + "&plugin_id=" + data.plugin_id + "&target=" + cid;
  
  //var key = data.obj_type + "-id_" + data.obj_id + '-share_' + data.plugin_id;
  var key = data.obj_type + '-' + data.obj_id;
  
  console.log("vpload on el: " + cid + " plugin_id=" + data.plugin_id + " data=", data);
    
  if(g_local_data) {
    g_local = 1;
    //console.log("We have local (test) data: size=" + Object.size(g_local_data));
    console.log("Local Data:",g_local_data);
    vp_process_json(g_local_data, cid, reload, data);   
  } else if(g_local_file) {
    g_local = 1;
    //console.log("Reading from local file:" + g_local_file);
    loadJSON(g_local_file,
       function(json) {
         //console.log("OK: read the following locally"); 
         //console.log(json); 
         vp_process_json(json, cid, reload, data);
       },
       function(xhr) { console.error(xhr); }
    );
    
  } else if(g_list[key]) { // prevent reloading if already loaded - doesn't work as they process in parallel

    var this_cid = '__vp_plugin-' + plugin_id;
    g_cids[this_cid] = 3; // success - using preloaded data
    var json = g_list[key];
    json.plugin_id = data.plugin_id;
    json.container_id = data.container_id;
    
    console.log("Done - key is already loaded:" + key + "cid=" + this_cid + " data:", data, " json:", json);
    vp_process_json(json, this_cid, reload, data);
    
  } else {
    
    console.log("Not loaded. Key=" + key + " Loading from ajax_url:" + ajax_url + data_str);
    //console.log("Calling ajax_url:" + ajax_url + data_str);
    var this_start = g_timer[plugin_id] = new Date().getTime(); 
    $jsonp.send(ajax_url + data_str, {
      callbackName: 'handleStuff',
      onSuccess: function(json) {
        var plugin_id = json.plugin_id;
        var cid = json.container_id;
        var data = {'plugin_id': plugin_id, 'container_id': cid, 'obj_type': json.obj_type, 'obj_id': json.obj_id};
        var key = vp_element_key(data);
        
        var elapsed = new Date().getTime() - g_start;
        var this_time = new Date().getTime() - g_timer[plugin_id]; 
        
        
        g_cids[cid] = 2; // success

        var status = g_cids[cid];
        var plugin_ids = g_keys[key];
        var len = plugin_ids.length;
        
        console.log("Done. Loaded plugin " + plugin_id + " ('" + cid + "') in " + elapsed + "ms (" + this_time + "ms) status=" + status + " data:", data, " g_cids", g_cids, " key=" + key + " plugin ids:", plugin_ids);
        
        console.log("Done. Loaded plugin " + plugin_id + " len=" + len + " ids:", plugin_ids);
        
        if(len > 1) {
          // alert("More than one plugin for this data");
          console.log("More than one plugin for this data", plugin_ids);
        }
        
        if(1) { /** old way */
          //g_json_data[plugin_id] = json;
          
          vp_process_json(json, cid, reload, data);
          
        } else { /** new way */
          var this_id;
          for(var i=0;i < len;i++) {
            this_id = plugin_ids[i];
            var this_cid = '__vp_plugin-' + plugin_id;
            var this_data = {'plugin_id': plugin_id, 'container_id': this_cid, 'obj_type': json.obj_type, 'obj_id': json.obj_id};          
            console.log("This ID:"+  this_id + " this cid:" + this_cid + " data:", this_data);
            json.plugin_id = this_id;
            //g_json_data[plugin_id] = json;
            vp_process_json(json, this_cid, reload, this_data);
            
          }
        }
        
      },
      //onError: function(json) {
      //},
      onTimeout: function() {
        //console.log('load timeout!');
        g_cids[cid] = -2; // timeout
                           
      },
      timeout: 5
    });
  }
}

function vp_process_json(json, cid, reload, data) {
  
  var plugin_id = data.plugin_id;
  var obj_type = data.obj_type;
  var obj_id = data.obj_id;

  //var key = obj_type + '-' + obj_id;
  var key = vp_element_key(data);
  
  console.log("loaded: vp_process on plugin id=" + plugin_id + " cid=" + cid + " data=", data);
  //console.log("vp_process json=", json);
  
  if(!g_local) cid = json.container_id;

  // update class of frame on client screen
  var element = document.getElementById(cid);
  if(!element) {
    console.log("Could not find element " + cid + " local=" + g_local);
    return false;
  }
  var button_id = "__vp-view-button-" + plugin_id;
  var view_button = document.getElementById(button_id);
  if(view_button) {
    console.log("Done loading set to view on button: " + button_id + " cid=" + cid);
    view_button.innerHTML = "View";
  } else {
    console.log("Could not find button " + button_id + " cid=" + cid);
  }
  
  var cn = element.className;
  var ncn = cn.replace(/transparent/,'');
  element.className = ncn;
  
  ////console.log("success Id: " + cid + " json: ", json);
  ////console.log("success Id: " + cid + " Changing class from " + cn + " => " + ncn);

  g_artists = json.artist_names || {};
  
  var i, item, items, psitem;
  var psitems = [];
  g_user_id = json.user_id;
  g_user_name = json.user_name;
  if(g_user_id) {
    g_follow = [];
    var f = json.follow;
    for(i=0;i < f.length;i++) {
      var mid = f[i];
      g_follow[mid] = 1;
    }
  }
  
  items = json.items;
  for(i in items) {
    item = items[i];
    psitem = {};
    psitem.src = item.href;
    psitem.msrc = item.href_small ? item.href_small : item.href;
    psitem.w = item.w;
    psitem.h = item.h;
    psitem.title = item.title;
    psitem.data = item;
    psitems.push(psitem)
  }
  
  // define options (if needed)
  var options = {
    index: 0 // start at first slide
    
  };
  
  // Initializes and opens PhotoSwipe
  var pswpElement = document.querySelectorAll('.pswp')[0];
  // var gallery = new PhotoSwipe(element, PhotoSwipeUI_Default, psitems, options);

  element.setAttribute('data-pswp-uid', cid);
  element.onclick = onThumbnailsClick;

  console.log("register onclick on " + cid);
  // Initializes and opens PhotoSwipe
  // var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  json.psitems = psitems;
  json.element = element;
  json.data = data;

  //console.log("g_list for cid=" + cid + " and user:" + g_user_id + " = ", json);
  
  g_list[key] = json;
  
  if(reload && g_pswp) {
    g_cid = cid;
    
    g_pswp.items = psitems;
    
    // sets a flag that slides should be updated
    g_pswp.invalidateCurrItems();

    // updates content of slides
    g_pswp.updateSize(true);
    
    if(!g_user_id) {
      userBtn.style.display = "none";
    } else {
      userBtn.style.display = "block";
    }
    
  } else {
    //console.log("Not Reloading");
  }
}

/** Open PhotoSwipe Gallery */
var openPhotoSwipe = function(cid, index, galleryElement, disableAnimation, fromURL) {      
  var pswpElement = document.querySelectorAll('.pswp')[0],
    gallery,
    options,
    items;

  var data = vp_element_data(cid);
  var plugin_id = data.plugin_id;
  var key = vp_element_key(data);
  
    
  var json = g_list[key];
  if(!json) {
    //alert("no json in g_list for cid=" + cid);
    alert("Ooops, no data found");
    console.log("g_list:",g_list);
    return;
  }

  var events = json.events || [];
  var event_count = events.length;
  
  var curator = json.curator;
  var lat = curator.location_lat;
  var lng = curator.location_long;  
  
  /** these determine if we should show respective buttons - if turned on in options */
  var has_info = true; /** todo */ 
  var has_event = event_count > 0;
  var has_location = Math.abs(lat) > 0 && Math.abs(lng) > 0; 
  var has_contact = curator.email_address && isEmail(curator.email_address); 
    
  console.log("open PhotoSwipe cid=" + cid);
  
  //console.log("open PhotoSwipe cid=" + cid + " plugin_id" + plugin_id + " key=" + key + " index=" + index + " data:", data);
  //console.log("g_list cid=" + cid + ":",g_list);
  //console.log("calendar event count for plugin_id: " + plugin_id + "=" + event_count + " collection_id=" + json.collection_id);
  //console.log("data:",json);

  
  g_cid = cid;
  items = json.psitems;
  g_sharer_id = json.curator_id;
  console.log('g_sharer_id=' + g_sharer_id);

  //fconsole.log("show/hide buttons according to popup buttons:", g_popup_buttons);
  
  if(typeof g_plugin_options == "undefined") var g_plugin_options = null;
  
  // define options (if needed)
  options = {
    barsSize: {top:44, bottom:'auto'}, 
    
    // Adds class pswp__ui--idle to pswp__ui element when mouse isn't moving for 4000ms
    timeToIdle: 4000,
    
    // Same as above, but this timer applies when mouse leaves the window
    timeToIdleOutside: 1000,
    
    // Delay until loading indicator is displayed
    loadingIndicatorDelay: 1000,
    
    // Function builds caption markup
    addCaptionHTMLFn: function(item, captionEl, isFake) {
        // item      - slide object
        // captionEl - caption DOM element
        // isFake    - true when content is added to fake caption container
        //             (used to get size of next or previous caption)
    
        // test 12345
        /**
        if(!item.title) {
            captionEl.children[0].innerHTML = '';
            return false;
        }
        */

        /** todo: use -1 for no, 1 for yes, 0 for unknown */
        //console.log("calling vp_caption for title: data", item.data);
        var caption = vp_caption(json, item.data, 0);
        captionEl.children[0].innerHTML = caption;
        return true;
    },
        
    // Buttons/elements
    closeEl:true,
    captionEl: true,

    zoomEl: true,
    counterEl: true,
    arrowEl: true,
    preloaderEl: true,

    // standard buttons - on by default
    fullscreenEl: g_popup_buttons ? inArray('fullscreen', g_popup_buttons) : true,
    shareEl: g_popup_buttons ? inArray('share', g_popup_buttons) : true,

    

    // new buttons - off by default
    infoEl: g_popup_buttons ? inArray('info', g_popup_buttons) && has_info : false,
    mapEl:  g_popup_buttons ? inArray('map', g_popup_buttons) && has_location : false,
    likeEl: g_popup_buttons ? inArray('follow', g_popup_buttons) : false,
    chatEl: g_popup_buttons ? inArray('chat', g_popup_buttons) : false,
    userEl: g_popup_buttons ? inArray('user', g_popup_buttons) : false,
    contactEl: g_popup_buttons ? inArray('contact', g_popup_buttons) && has_contact : false,                                                   
    calendarEl: g_popup_buttons ? inArray('calendar', g_popup_buttons) && has_event : false,
    
    //contactEl: g_plugin_options ? g_plugin_options.show_contact_button : true,
    
    // Tap on sliding area should close gallery
    tapToClose: false,
    
    // Tap should toggle visibility of controls
    tapToToggleControls: true,
    
    // Mouse click on image should close the gallery,
    // only when image is smaller than size of the viewport
    clickToCloseNonZoomable: true,
    
    // Element classes click on which should close the PhotoSwipe.
    // In HTML markup, class should always start with "pswp__", e.g.: "pswp__item", "pswp__caption".
    // 
    // "pswp__ui--over-close" class will be added to root element of UI when mouse is over one of these elements
    // By default it's used to highlight the close button.
    closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
    
    // Separator for "1 of X" counter
    indexIndicatorSep: ' / ',
    
    
    
    // Share buttons
    // 
    // Available variables for URL:
    // {{url}}             - url to current page
    // {{text}}            - title
    // {{image_url}}       - encoded image url
    // {{raw_image_url}}   - raw image url
    shareButtons: [
        {id:'facebook', label:'Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
        {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
        {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'}
        //{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
    ],
    
    
    // Next 3 functions return data for share links
    // 
    // functions are triggered after click on button that opens share modal,
    // which means that data should be about current (active) slide
    getImageURLForShare: function( shareButtonData ) {
        // `shareButtonData` - object from shareButtons array
        // 
        // `pswp` is the gallery instance object,
        // you should define it by yourself
        // 
        // return "http://test.vpatina.com/user/17426/vault/1130/title_image/image/big/deathtostock_clementine4.jpg";
        var vpdata = g_pswp.getCurrentData(cid) || {};
        var item = vpdata.item;
        //console.log("sharing using global g_pswp link=" + item.href + " item=",item);

        return item.href;
        
        //return g_pswp.currItem.src || '';
    },
    getPageURLForShare: function( shareButtonData ) {
        var vpdata = g_pswp.getCurrentData(cid) || {};
        var item = vpdata.item;
        var link = item.link;
        var sharer_id = g_sharer_id ? g_sharer_id : 1;
        var tail = "_aid=" + sharer_id;
        link = link.indexOf('?') > -1 ? link + "&" + tail : link + "?" + tail; 
        //console.log("sharing using global g_pswp v2 link=" + link + " item=",item);
        return link;
        //return window.location.href;
    },
    getTextForShare: function( shareButtonData ) {
        var vpdata = g_pswp.getCurrentData(cid) || {};
        var item = vpdata.item;
        var caption = vp_caption(json, item, 2);
        //console.log("sharing using global g_pswp caption=" + caption);
        return caption;
    },
    
    // Parse output of share links
    parseShareButtonOut: function(shareButtonData, shareButtonOut) {
        // `shareButtonData` - object from shareButtons array
        // `shareButtonOut` - raw string of share link element
        return shareButtonOut;
    }
  };

  // PhotoSwipe opened from URL
  if(fromURL) {
    if(options.galleryPIDs) {
      // parse real index when custom PIDs are used
      // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
      for(var j = 0; j < items.length; j++) {
        if(items[j].pid == index) {
          options.index = j;
          break;
        }
      }
    } else {
      // in URL indexes start from 1
      options.index = parseInt(index, 10) - 1;
    }
  } else {
    options.index = parseInt(index, 10);
  }

  // exit if index not found
  if( isNaN(options.index) ) {
    return;
  }

  if(disableAnimation) {
    options.showAnimationDuration = 0;
  }

  //console.log("Start PS with options:",options);
  // Pass data to PhotoSwipe and initialize it

  //console.log("Start PS with items:",items);
  
  gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
  
  g_pswp = gallery;
  g_pswp.cid = cid;
  g_pswp.vpdata = json;   

           
  var content = ' [empty] ';     
                                                                            

  
  //console.log("\n\n\naddress:"  + address_formatted + "\n\n\n lat=" + lat + " lng=" + lng );
  //console.log("gh: curator=", curator);

  //modalEl.data = {};                                                                     
                        
  //var chatBtn = document.getElementById("chatBtn");  
  //var closeBtn = document.getElementById("closeBtn");  
  //var infoBtn = document.getElementById("infoBtn");
  //var contactBtn = document.getElementById("contactBtn");
  //var calendarBtn = document.getElementById("calendarBtn");
  //var mapBtn = document.getElementById("mapBtn");
  //
  //// When the user clicks the button, open the modal
  //chatBtn.onclick = function() {
  //  openModal();
  //  modalEl.data.owner = "chat";
  //  modal_content.innerHTML = infoiframe;
  //}
  
  // When the user clicks the button, open the modal
  //mapBtn.onclick = function() {
  //  openModal();
  //  modalEl.data.owner = "map";
  //  modal_content.innerHTML = vp_infomap(json);    
  //}

  /**
  infoBtn.onclick = function() {

    //modal_content.innerHTML = infotabs;
    // openModal();
    console.log("info Btn click - do nothing...");
    return;
    
    share_modal_content.innerHTML = vp_infotabs();
    _toggleShareModal();
    modalEl.data.owner = "info";                                                                                           
    
    var vpdata = g_pswp.getCurrentData(cid) || {};
    vp_update_info(vpdata);          

  }
  
  calendarBtn.onclick = function() {
    modalEl.data.owner = "calendar";
    //openModal();                                                                         
  }
  
  contactBtn.onclick = function() {
  }
  

  
  //closeBtn.onclick = function() {
  //  closeModal();
  //  //console.log("click on chatBtn owner=" + modalEl.data.owner);
  //  if(modalEl.data.owner == 'chat') reloadPhotoswipe(cid, index, galleryElement, disableAnimation, fromURL);
  //}
  
  */
  
  var likeBtn = document.getElementById("likeBtn");
  // When the user clicks the button, open the modal
  likeBtn.onclick = function() {
    console.log("click on like");
    var data = g_pswp.getCurrentData(cid);
    console.log("data=", data);
    if(g_user_id) {
      console.log("click on like by user");
      g_pswp.like(cid, data);
      
    } else {
      console.log("click on like - no user");
    }
  }
  
  var userBtn = document.getElementById("userBtn");
  if(!g_user_id) {
    userBtn.style.display = "none";
  } else {
    userBtn.style.display = "block";
    userBtn.setAttribute('title', "Logged in as " + g_user_name);
  }

  g_pswp.listen('afterChange', function(data) {
    
    var vpdata = g_pswp.getCurrentData(cid);
    //console.log("gcd for cid=" + cid + " returned ",vpdata);
    var item = vpdata.item;
    
    var p = vp_price(item);
    var h = item.original_height;
    var w = item.original_width;
    var t = item.original_technique;
    var c = item.original_currency;
    var ti = item.title;
    var mid = item.media_id;
    var str = ti + " " + t + " (" + h + "x" + w + ") " + p + " " + c;
    //console.log("Slide changed: index=" + g_pswp_index + " str=" + str + " mid=" + mid);
    ////console.log(psitem);
    //alert(str);
    
    var vpdata = g_pswp.getCurrentData(cid) || {};
    
    var item = vpdata.item;
    var comment = item.comment;

    vp_update_info(vpdata);
    
    var div = document.createElement("div");
    div.innerHTML = comment;
    var text = div.textContent || div.innerText || "";

    var infoBtn = document.getElementById("infoBtn");
    //console.log('comment=' + comment);
    //console.log('text="' + text + '" len=' + text.length);
    if(1 || text.length > 2) { // comment stripped of tags
      infoBtn.style.display = 'block';
      //console.log("showing infoBtn");
    } else {
      infoBtn.style.display = 'none';
      //console.log("hiding infoBtn");
    }
    

    var follow = g_user_id && g_follow.length && g_follow[mid]; // inArray(mid, g_follow);

    //console.log("Reload is true mid=" + mid + " user_id=" + g_user_id + " follow len=" + g_follow.length + " follow=" + follow);

    var likeBtn = document.getElementById("likeBtn");
    if(follow) {
      if(!likeBtn.classList.contains('follow')) likeBtn.classList.add('follow');
      likeBtn.setAttribute('title', "You follow " + item.title);      
    } else {
      if(likeBtn.classList.contains('follow')) likeBtn.classList.remove('follow');      
      likeBtn.setAttribute('title', "Click to follow " + item.title);      
    }
    //var star = follow ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
    //likeBtn.innerHTML = star;
    
    
  });
  
  g_pswp.like = function(cid, vpdata) {
    var ajax_url = g_site_url + '/home/app_data.php?oper=gallery-favorite&format=json&jsoncallback=likeStuff';
    
    //$('#galleria .galleria-stage').addClass("loading-big");

    //console.log("like: data=", vpdata);

    var item = vpdata.item;
    var obj_type = 'media';
    var mid = item.media_id;
    var data_str = "&site_id=" + vpdata.site_id + "&user_id=" + vpdata.user_id + "&obj_type=" + vpdata.obj_type +"&obj_id=" + mid + "&plugin_id=" + vpdata.plugin_id + "&target=" + cid;

    //console.log("like: url=", ajax_url);

    var likeBtn = document.getElementById("likeBtn");  
    var spin ='<i class="fa fa-spinner fa-spin"></i>';
    likeBtn.innerHTML = spin;
    
    $jsonp.send(ajax_url + data_str, {
      callbackName: 'likeStuff',
      onSuccess: function(json) {
        ////console.log("like success: url=" + ajax_url + " result:", json);
        var id = json.id;
        
        if(id) {
          if(!likeBtn.classList.contains('follow')) likeBtn.classList.add('follow');
          likeBtn.setAttribute('title', "You follow " + item.title);
          
        } else {
          if(likeBtn.classList.contains('follow')) likeBtn.classList.remove('follow');      
          likeBtn.setAttribute('title', "Click to follow " + item.title);
        }
        //var star = id ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
        ////console.log("follow was:", json);
        g_follow[mid] = id;

        likeBtn.innerHTML = '';
      },
      onTimeout: function() {
        //console.log('like timeout!');
      },
      timeout: 5      
    });
  };
  
  g_pswp.getCurrentData = function(cid) {
    var index = this.getCurrentIndex();
    var data = vp_element_data(cid);
    var key = vp_element_key(data);
    var json = g_list[key];

    var vpdata = json;
    
    var psitems = json.psitems;
    var psitem = psitems[index];

    vpdata.index = index;
    vpdata.item = psitem.data    
    //console.log("get current data for cid=" + cid + " index=" + index + " data:", vpdata);
    
    return vpdata;
  };
  
};

function vp_element_data(cid) {
  var vpElement = document.getElementById(cid);
  var data = vpElement && vpElement.getAttribute('data-data');
  return JSON.parse(data);
}

function vp_element_key(data) {
  var plugin_id = data.plugin_id;
  var obj_type = data.obj_type;
  var obj_id = data.obj_id;
  var key = obj_type + '-' + obj_id;
  return key;
}


/** Reload gallery data and redraw PhotoSwipe */
function reloadPhotoswipe(cid, index, galleryElement, disableAnimation, fromURL) {
  var data = vp_element_data(cid);
  var key = vp_element_key(data);
  var json = g_list[key];
  g_cid = cid;
  items = json.psitems;
  //console.log("Reloading ps cid=" + cid + " index=" + index);
  
  vp_load(json.element, json.data, true);  
  
}

// triggers when user clicks on thumbnail
var onThumbnailsClick = function(e) {
  
  e = e || window.event;
  e.preventDefault ? e.preventDefault() : e.returnValue = false;

  var eTarget = e.target || e.srcElement;

  // find root element of slide
  var clickedListItem = closest(eTarget, function(el) {
    return (el.tagName && (el.tagName.toUpperCase() === 'FIGURE' || el.tagName.toUpperCase() === 'OBJECT'));
  });

  var cid = clickedListItem.getAttribute('data-pswp-uid');
  var index = clickedListItem.getAttribute('data-index') || 0;
  var plugin_options = clickedListItem.getAttribute('data-plugin_options');
  var popup_options = clickedListItem.getAttribute('data-popup_options');
  g_plugin_options = plugin_options ? JSON.parse(plugin_options) : {}; 
  g_popup_options = popup_options ? JSON.parse(popup_options) : {}; 

  g_popup_buttons = g_popup_options.buttons || ["info","contact","map","zoom","share","fullscreen"];
  g_popup_tabs = g_popup_options.tabs || ["artwork","artist","exhibition","gallery"];
  g_popup_title = g_popup_options.title || ["dot","artwork","artist","year"];

  console.log("buttons for " + cid + " = ", g_popup_buttons);
  console.log("tabs for " + cid + " = ", g_popup_tabs );
  zoomOutMobile();

  openPhotoSwipe( cid, index, clickedListItem );
  
  return; 
};

function vp_event_button(event, curator) {
  var timezone = event.timezone || 'Europe/Amsterdam';
  return '' +
    '<span class="addtocalendar atc-style-blue">' +
      '<a class="atcb-link" tabindex="1">' +
        '<i class="fa fa-calendar"></i> ' + 'Add to Calendar' + 
        '<button class="pswp__button pswp__button--calendar" title="Calendar"></button>' +
      '</a>' +
      '<var class="atc_event">' +
        '<var class="atc_date_start">' + event.start_time + '</var>' +
        '<var class="atc_date_end">' + event.end_time + '</var>' +
        '<var class="atc_timezone">' + timezone + '</var>' +
        '<var class="atc_title">' + event.title + '</var>' +
        '<var class="atc_description">' + event.description + '</var>' +
        '<var class="atc_location">' + event.start_address + '</var>' +
        '<var class="atc_organizer">' +curator.display_name + '</var>' +
        '<var class="atc_organizer_email">' + curator.email_address + '</var>' +
      '</var>' +
    '</span>';       
}

function vp_events(vpdata) {
  var events = vpdata.events || [];
  var event_count = events.length;
  var output = '';
  var evtString,event,button;
  var curator = vpdata.curator;
  output = '';
  
  for(var i=0;i<event_count;i++) {
    event = events[i];    
    output = output + vp_event(event, curator) + '<br><br>';
    
    //button = vp_event_button(event, curator);     
    //evtString = '';
    //evtString = evtString + '<h4>' + event.title + '</h4>';
    //evtString = evtString + event.start_time + ' ' + button + '<br>';
    //evtString = evtString + event.start_address + '<br>';
    //output = output + '<div class="vp__event">' + evtString + "</div>";
  }
  return output;
}

function vp_get_date(datetime, time, timezone) {
  if(typeof time == "undefined") var time = 0;
  if(typeof timezone == "undefined") var timezone = '';
  
  var t = datetime.split(/[- :]/); // Split timestamp into [ Y, M, D, h, m, s ]
  console.log("dt:", datetime);
  console.log("t:", t);

  if(time && !timezone) return t[3] + ':' + t[4];
  
  var date = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5])); // Apply each element to the Date function
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  
  console.log(day, monthNames[monthIndex], year, hour, minute);
  if(time) {
    return hour + ':' + minute;
  } else {
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
}

function vp_event(event, curator) {
  var address_formatted = event.address_formatted || event.start_address;
  var address_anchor = '';
  if(address_formatted) {
    var address_link = "http://maps.google.com/?q=" + encodeURIComponent(address_formatted);
    address_anchor = '<a href="' + address_link + '" target="new">' + 'View in Google Maps' + '</a>';
  }
  
  var start_date = vp_get_date(event.start_time);
  var end_date = vp_get_date(event.end_time);
  var start_time = vp_get_date(event.start_time, 1, event.timezone);
  var end_time = vp_get_date(event.end_time, 1, event.timezone);

  console.log("start date=" + start_date);
  console.log("end date=" + end_date);
  console.log("start time=" + start_time);
  console.log("end time=" + end_time);
  
  var datetime = start_date + " at " + start_time + "-" + end_time; 
  
  var calendar_link = vp_event_button(event, curator);
  var output = '' +
  '<table cellpadding="4" cellspacing="4" class="vp__event">'+
//  '<tr>'+            
//  '  <td align="left"><br>'+ canvas +
//  '  </td>'+
//  '</tr>'+
  '  <tr>'+
  '    <td align="left">' +  '<br>' +
  '      <h4 style="font-size:20px;margin-bottom:4px">' + event.title + '</h4>' +
  '      <p style="font-size:16px">' + datetime + ' ' + calendar_link + '<br>' + event.address_street + ' ' + (event.address_number && event.address_number > 0 ? event.address_number : '') + '<br>' +
  '         ' + event.address_city + '<br><br>' +
  '         ' + address_anchor + '<br><br></p>' +
  '    </td>'+
  '  </tr>'+
  '</table>';
  return output;
}

function vp_contact_link(cid) {
  //modalEl.data.owner = "contact";
  
  var vpdata = g_pswp.getCurrentData(cid) || {};
  var item = vpdata.item;
  var subject = item.title || '';
  
  var curator = vpdata.curator || {};
  var email = curator.email_address || '';
  var curator_name = curator.display_name || 'gallery';
  
  var recipient = email ? curator_name + " <" + email + ">" : '';
  var obj_type = 'media_collection_map';
  var obj_id = item.map_id;
  
  var link = "/contact/?recipient=" + encodeURIComponent(recipient) + "&subject=" + encodeURIComponent(subject);
  link = link + "&obj_type=" + obj_type + "&obj_id=" + obj_id;
  
  if(g_user_id && vpdata.user) {
    var sender = "";
    var user = vpdata.user;
    var user_name = user.display_name;
    var user_email = user.email_address;
    var sender = user_name + " <" + user_email + ">";
    link = link + "&sender=" + encodeURIComponent(sender);
  }
  
  return link;
}
 
function vp_container(str, container_class) {
  container_class = container_class + ' vp__container' 
  return '<div class="' + container_class + '">' + str + '</div>';
}

function vp_infocalendar(cid) {
  var vpdata = g_pswp.getCurrentData(cid) || {};
  var events = vpdata.events;
  return vp_events(vpdata);
}

function vp_infomap(json) {
  
  var curator = json.curator;

  var details = '';                                     
  var hasmap = false;
  
  if(address_formatted = curator.address_formatted) {    
    var address_link = "http://maps.google.com/?q=" + encodeURIComponent(address_formatted);
    var address_anchor = '<a href="' + address_link + '" target="new">' + 'View in Google Maps' + '</a>';
    //details = details + ' Address:' + address_anchor + '<br>';
  }

  var lat = curator.location_lat;
  var lng = curator.location_long;
  
  if(Math.abs(lat) > 0 && Math.abs(lng) > 0) {
    hasmap = true;
    var canvas = '<div id="mapCanvas" class="" style="width:286px;height:200px" data-lat="' + lat + '" data-lng="' + lng + '"></div>';
  }
                                                                                                           
  var output = '' +
  '<table cellpadding="4" cellspacing="4">'+
  '<tr>'+  
  '  <td align="left"><br>'+ canvas +
  '  </td>'+
  '</tr>'+
  '<tr>'+
  '  <td align="left">' +  '<br>' +
  '    <h4 style="font-size:20px;margin-bottom:4px">' + curator.display_name + '</h4>' +
  '    <p style="font-size:16px">' + curator.address1 + '<br>' +
  '       ' + curator.city + '<br><br>' +
  '       ' + address_anchor + '<br><br></p>' +                                                                               
  '  </td>'+
  '</tr>'+
  '</table>';
  return output;
}

function vp_infotabs() {
  var output = '' +             
'  <ul class="w3-pagination w3-white w3-border-bottom vp__tabs" style="width:100%;" id="infoTabs">' +
'   <li><a id="vp__tab1" class="vp__tab-links active" onclick="return vp_openTab(event, \'vp__tab1-content\')">Art</a></li>' +
'   <li><a id="vp__tab2" class="vp__tab-links" onclick="return vp_openTab(event, \'vp__tab2-content\')">Artist</a></li>' +
'   <li><a id="vp__tab3" class="vp__tab-links" onclick="return vp_openTab(event, \'vp__tab3-content\')">Exhibition</a></li>' +
'   <li><a id="vp__tab4" class="vp__tab-links" onclick="return vp_openTab(event, \'vp__tab4-content\')">Gallery</a></li>' +
'  </ul>' +
'  <div id="vp__tab1-content" class="w3-container vp__tab-content">' +
'  </div>' +
'  <div id="vp__tab2-content" class="w3-container vp__tab-content">' +
'  </div>' +
'  <div id="vp__tab3-content" class="w3-container vp__tab-content">' +
'  </div>' +
'  <div id="vp__tab4-content" class="w3-container vp__tab-content">' +
'  </div>';
  return output;
}       

function vp_iframe(link) {
  var sharer_id = g_sharer_id ? g_sharer_id : 1;
  var tail = "_aid=" + sharer_id;
  link = link.indexOf('?') > -1 ? link + "&" + tail : link + "?" + tail; 
  return '<iframe width="100%" height="100%" style="min-height:800px" src="' + g_site_url + link +'"></iframe>';
}

/** find all vPatina photoswipe elements on page - load data */
function vp_search() {
  var vpElements = document.querySelectorAll('.vp-loader-photoswipe')
  var len = vpElements.length;
  //console.log("Load: Found " + len + " ps items gcids:", g_cids);
  console.log("Load: Found " + len + " ps items g_keys:", g_keys);
  
  
  for (var i = 0; i < len; i++) {
    var vpElement = vpElements[i];
    var data = vpElement && vpElement.getAttribute('data-data');
    data = JSON.parse(data);
    var key = vp_element_key(data);
    
    var cid = vpElement.getAttribute('id');
    var plugin_id = data.plugin_id;
    
    var status = g_cids[cid];
    var st2 = g_keys[key]; 
    if(!g_keys[key]) g_keys[key] = [];

    var plugin_ids = g_keys[key];

    console.log("Found plugin id:" +  plugin_id + " cid:" + cid + " key: " + key + " status:" + status + " g_keys:", g_keys);
    if(0 && plugin_ids.length) {
      
      console.log("Already loading data for plugin id:" +  plugin_id + " cid:" + cid + " status:" + status + " key:" + key + " plugin ids=", plugin_ids);
      if(!inArray(plugin_id, g_keys[key])) g_keys[key].push(plugin_id);
      
    } else if(!status) {
      g_cids[cid] = 1; // loading
      g_keys[key].push(plugin_id);
      console.log("Loading data for plugin id:" +  plugin_id + " cid:" + cid + " status:" + status + " data:", data);
      vp_load(vpElement, data, false);
    } else {
      console.log("Not loading data for plugin id:" +  plugin_id + " cid:" + cid + " status:" + status);
    }
  }
}

function initModalMap(map_id) {
  //var lat = $("#" + map_id).data('lat'); 
  //var lng = $("#" + map_id).data('lng');
  var mapEl = document.getElementById(map_id);
  var lat = mapEl && mapEl.getAttribute('data-lat');
  var lng = mapEl && mapEl.getAttribute('data-lng');
  //console.log("initModalMap at " + lat + "/" + lng);
  
  var mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById(map_id),
    mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng)
  });
  marker.setMap(map);
}      

//console.log("Adding event listener...");

/** Begin runtime */
//document.addEventListener("DOMContentLoaded", function(event) {
////console.log("DOM Loaded");
  vp_search();
//});


var test = 'kj-v0.0.4';

function vp_openTab(evt, tabName) {
  console.log("open tab " + tabName);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("vp__tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("vp__tab-links");
  for (i = 0; i < tablinks.length; i++) {             
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}   

function openTab(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}


function openModal() {
  var modalEl = document.getElementById('vp__w3modal');
  //console.log("Open modal");
  modalEl.style.display='block';
}

function closeModal() {
  var modalEl = document.getElementById('vp__w3modal');
  //console.log("Close modal");
  modalEl.style.display='none';
}

function zoomOutMobile() {
  var viewport = document.querySelector("meta[name=viewport]");
  var scale = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
  //var scale = 'width=device-width, initial-scale=1';
  //var scale = 'width=device-width, initial-scale=1, maximum-scale=1.0';

  if ( viewport ) {
    viewport.setAttribute('content', scale);
    //viewport.content = "initial-scale=0.1";
    //viewport.content = "width=1200";
  } else {
    var metaTag=document.createElement('meta');
    metaTag.name = "viewport"
    metaTag.content = scale;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }
  
  // after updating viewport tag, force the page to pick up changes           
  document.body.style.opacity = .9999;
  setTimeout(function(){
      document.body.style.opacity = 1;
  }, 1);
  
  //alert("zoomed...");
}

function inArray(needle, haystack) {
  var length = haystack.length;
  for(var i = 0; i < length; i++) {
    if(haystack[i] == needle) return true;
  }
  return false;
}

function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

/** simplified version: for full RFC 2822, see http://stackoverflow.com/questions/46155/validate-email-address-in-javascript */
function isEmail(em) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(em);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modalEl = document.getElementById('vp__w3modal');
  //console.log("Window click on target=", event.target);
  if (event.target == modalEl) {
    //console.log("Closing modal");
    modalEl.style.display = "none";
  }
}

  var modal = '' +
'<div id="vp__w3modal" class="w3-modal">' +
' <div class="w3-modal-content w3-card-4 w3-animate-zoom">' +
'  <header class="w3-container"> ' +
'   <span onclick="document.getElementById(\'vp__w3modal\').style.display=\'none\'" class="w3-closebtn">&times;</span>' +
'  </header>' +
'  <div  id="vp__w3-modal-content" class="vp__modal-content"><br><br>Loading...<br><br></div>' +
'  <div class="w3-container w3-light-grey w3-padding">' +
'   <button class="w3-btn w3-right w3-white w3-border" ' +
'   onclick="document.getElementById(\'vp__w3modal\').style.display=\'none\'">Close</button>' +
'  </div>';   
' </div>' +     
'</div>';                                                            

appendHtml(document.body, modal);

//console.log("\n\n\nLoaded...\n\n\n");
//zoomOutMobile();       

             
