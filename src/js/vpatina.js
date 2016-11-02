/*! vPatina JS: 0.1.0 2016-09-21
* https://www.vpatina.com
* Copyright (c) 2016 vPatina BV; */

/** Load gallery data for PhotoSwipe from vPatina server */
function vp_load(element, data, reload) {
  var cid = element.getAttribute('id');
  
  var ajax_url = g_site_url + '/home/app_data.php?oper=get-gallery&jsoncallback=handleStuff';
  var data_str = "&obj_type=" + data.obj_type +"&id=" + data.id + "&share_id=" + data.share_id + "&target=" + cid;

  console.log("vpload on el: " + cid);
    
  // console.log("Calling ajax_url:" + ajax_url + data_str + " el: " + cid);
  $jsonp.send(ajax_url + data_str, {
    callbackName: 'handleStuff',
    onSuccess: function(json) {
      //console.log('success!', json);
      var cid = json.target;
      var element = document.getElementById(cid);
            
      var cn = element.className;
      var ncn = cn.replace(/transparent/,'');
      console.log("success Id: " + cid + " json: ", json);
      //console.log("success Id: " + cid + " Changing class from " + cn + " => " + ncn);
      element.className = ncn;
    
      var i, item, items, psitem;
      var psitems = [];
      g_user_id = json.user_id;
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
        psitem.w = item.w;
        psitem.h = item.h;
        psitem.title = item.title;
        psitem.data = item;
        psitems.push(psitem)
      }
      var iframe = {};
      iframe.html = '<iframe width="100%" height="100%" src="' + g_site_url + '/login/?_aid=100"></iframe>';
      
      //psitems.push(iframe);
      
      // define options (if needed)
      var options = {
        index: 0 // start at first slide
        
      };
      
      // Initializes and opens PhotoSwipe
      var pswpElement = document.querySelectorAll('.pswp')[0];
      // var gallery = new PhotoSwipe(element, PhotoSwipeUI_Default, psitems, options);

      element.setAttribute('data-pswp-uid', cid);
      element.onclick = onThumbnailsClick;

      // Initializes and opens PhotoSwipe
      // var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      json.psitems = psitems;
      json.element = element;
      json.data = data;

      console.log("g_list for cid=" + cid + " and user:" + g_user_id + " = ", json);
      
      g_list[cid] = json;
      
      if(reload && g_pswp) {
        g_cid = cid;
        
        g_pswp.items = psitems;
        
        // sets a flag that slides should be updated
        g_pswp.invalidateCurrItems();
        // updates the content of slides
        g_pswp.updateSize(true);
        
        if(!g_user_id) {
          userBtn.style.display = "none";
        } else {
          userBtn.style.display = "block";
        }
        
      } else {
        console.log("Not Reloading");
      }
      //gallery.init();

      //var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
      //gallery.init();
      
    },
    onTimeout: function() {
        console.log('load timeout!');
    },
    timeout: 5
  });
}

/** Open PhotoSwipe Gallery */
var openPhotoSwipe = function(cid, index, galleryElement, disableAnimation, fromURL) {
  var pswpElement = document.querySelectorAll('.pswp')[0],
    gallery,
    options,
    items;

  var json = g_list[cid];
  g_cid = cid;
  items = json.psitems;

  console.log("openPhotoSwipe cid:" + cid + " Items:", items);
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
    
        // test
        /**
        if(!item.title) {
            captionEl.children[0].innerHTML = '';
            return false;
        }
        */

        /** todo: use -1 for no, 1 for yes, 0 for unknown */
        var available = parseInt(item.original_available);
        var color = available ? '#0f0' : '#f00';
        var dot = '<span style="color:' + color + '">&#x25cf;</span>';
        
        var year = item.original_year ? '(' + item.original_year + ')' : '';
        var captionAr = [dot, item.title, year, item.artist_name]
        console.log("CaptionAr:", captionAr);
        captionEl.children[0].innerHTML = captionAr.join(' ');
        return true;
    },
    
    // Buttons/elements
    closeEl:true,
    captionEl: true,
    fullscreenEl: true,
    zoomEl: true,
    shareEl: true,
    counterEl: true,
    arrowEl: true,
    preloaderEl: true,
    
    // new buttons
    likeEl: true,
    chatEl: true,
    infoEl: true,
    userEl: true,
    
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
        {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
        {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
        {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
        {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
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
        return pswp.currItem.src || '';
    },
    getPageURLForShare: function( shareButtonData ) {
        return window.location.href;
    },
    getTextForShare: function( shareButtonData ) {
        return "The Title";
        return pswp.currItem.title || '';
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

  console.log("Start PS with options:",options);
  // Pass data to PhotoSwipe and initialize it
  
  gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
  
  g_pswp = gallery;
  
  var modal = document.getElementById('myModal');
  //modal.style.display = "block";
  //console.log("after open modal=" + modal.length + " btn=" + chatBtn.length);

  var chatBtn = document.getElementById("chatBtn");  
  var closeBtn = document.getElementById("closeBtn");  
  var likeBtn = document.getElementById("likeBtn");
  
  // When the user clicks the button, open the modal
  chatBtn.onclick = function() {
    modal.style.display = "block";
  }

  closeBtn.onclick = function() {
    modal.style.display = "none";
    console.log("click on chatBtn");
    reloadPhotoswipe(cid, index, galleryElement, disableAnimation, fromURL);
  }
  
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
  }

  g_pswp.listen('afterChange', function(data) {
    
    var vpdata = g_pswp.getCurrentData(cid);
    console.log("gcd for cid=" + cid + " returned ",vpdata);
    var item = vpdata.item;
    
    var p = item.original_price;
    var h = item.original_height;
    var w = item.original_width;
    var t = item.original_technique;
    var c = item.original_currency;
    var ti = item.title;
    var mid = item.media_id;
    var str = ti + " " + t + " (" + h + "x" + w + ") " + p + " " + c;
    console.log("Slide changed: index=" + g_pswp_index + " str=" + str + " mid=" + mid);
    //console.log(psitem);
    //alert(str);
    
    var follow = g_user_id && g_follow.length && g_follow[mid]; // inArray(mid, g_follow);

    console.log("Reload is true mid=" + mid + " user_id=" + g_user_id + " follow len=" + g_follow.length + " follow=" + follow);

    var likeBtn = document.getElementById("likeBtn");
    var star = follow ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
    likeBtn.innerHTML = star;
    
  });
  
  g_pswp.like = function(cid, vpdata) {
    var ajax_url = g_site_url + '/home/app_data.php?oper=gallery-favorite&format=json&jsoncallback=likeStuff';
    
    //$('#galleria .galleria-stage').addClass("loading-big");

    console.log("like: data=", vpdata);

    var item = vpdata.item;
    var obj_type = 'media';
    var mid = item.media_id;
    var data_str = "&site_id=" + vpata.site_id + "&user_id=" + vpdata.user_id + "&obj_type=" + vpdata.obj_type +"&obj_id=" + mid + "&share_id=" + vpdata.share_id + "&target=" + cid;

    console.log("like: url=", ajax_url);

    var likeBtn = document.getElementById("likeBtn");  
    var spin ='<i class="fa fa-spinner fa-spin"></i>';
    likeBtn.innerHTML = spin;
    
    $jsonp.send(ajax_url + data_str, {
      callbackName: 'likeStuff',
      onSuccess: function(json) {
        console.log("like success:", json);
        var id = json.id;
        var star = id ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
        //console.log("follow was:", json);
        g_follow[mid] = id;

        likeBtn.innerHTML = star;
      },
      onTimeout: function() {
        console.log('like timeout!');
      },
      timeout: 5      
    });
  };
  
  g_pswp.getCurrentData = function(cid) {
    var index = this.getCurrentIndex();
    var data = {"foo": "bar"};
    
    var json = g_list[cid];

    var vpdata = json;
    
    var psitems = json.psitems;
    var psitem = psitems[index];

    vpdata.index = index;
    vpdata.item = psitem.data    
    console.log("get current data for cid=" + cid + " index=" + index + " data:", vpdata);
    
    return vpdata;
  };
  
};

/** Reload gallery data and redraw PhotoSwipe */
function reloadPhotoswipe(cid, index, galleryElement, disableAnimation, fromURL) {

  var json = g_list[cid];
  g_cid = cid;
  items = json.psitems;
  console.log("Reloading ps cid=" + cid + " index=" + index);
  
  vp_load(json.element, json.data, true);  
  
}

// triggers when user clicks on thumbnail
var onThumbnailsClick = function(e) {
  e = e || window.event;
  e.preventDefault ? e.preventDefault() : e.returnValue = false;

  var eTarget = e.target || e.srcElement;

  // find root element of slide
  var clickedListItem = closest(eTarget, function(el) {
    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
  });

  var cid = clickedListItem.getAttribute('data-pswp-uid');
  var index = clickedListItem.getAttribute('data-index') || 0;

  console.log("onThumbnailsClick: cid=" + cid);
  //console.log("onThumbnailsClick: cid=" + cid + " e:", e, " target:", eTarget, " item:", clickedListItem);

  openPhotoSwipe( cid, index, clickedListItem );
  
  return;
  
  if(!clickedListItem) {
    console.log("no clickedListItem");
    return;
  }

  // find index of clicked item by looping through all child nodes
  // alternatively, you may define index via data- attribute
  var clickedGallery = clickedListItem.parentNode,
    childNodes = clickedListItem.parentNode.childNodes,
    numChildNodes = childNodes.length,
    nodeIndex = 0,
    index;

  for (var i = 0; i < numChildNodes; i++) {
    if(childNodes[i].nodeType !== 1) {
      continue;
    }

    if(childNodes[i] === clickedListItem) {
      index = nodeIndex;
      break;
    }
    nodeIndex++;
  }

    console.log("index=" + index);


  if(index >= 0) {
    // open PhotoSwipe if valid index found
    openPhotoSwipe( index, clickedGallery );
  }
  return false;
};


/** Begin runtime */
var vpElements = document.querySelectorAll('.vp-loader-photoswipe')
var len = vpElements.length;
for (var i = 0; i < len; i++) {
  var vpElement = vpElements[i];
  var data = vpElement && vpElement.getAttribute('data-search');
  data = JSON.parse(data);
  vp_load(vpElement, data, false);  
}

// Oct 23