 $(function(){
	 //时间戳转换为本地时间
	 Date.prototype.Format = function(format) {
	        format ? format : format = "yyyy-MM-dd";
	        var o = {
	            "M+": this.getMonth() + 1, // month
	            "d+": this.getDate(), // day
	            "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
	            "S": this.getMilliseconds()
	        };
	        if (/(y+)/.test(format)) {
	            format = format.replace(RegExp.$1, (this.getFullYear() + "").slice(4 - RegExp.$1.length));
	        }
	        for (var k in o) {
	            if (new RegExp("(" + k + ")").test(format)) {
	                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
	            }
	        }
	        return format;
	    };

         //获取传递过来的id值，和类别的id
           function GetRequest() {
                var url = location.search;
                var theRequest = new Object();
                if (url.indexOf("?") != -1) {
                    var str = url.substr(1);
                    strs = str.split("&");
                    for(var i = 0; i < strs.length; i ++) {
                        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
                    }
                }
                return theRequest;
            }
            var Request = new Object();
            Request = GetRequest();
            var show=Request.show;
            var id=Request.id;
         var request = new XMLHttpRequest();
         // 检测请求状态
         request.onreadystatechange = function () {
         if (request.readyState == 4 && request.status == 200) {
          	var jsonStr = request.responseText;
          // 将json转为对象
         	var jsonObj = JSON.parse(jsonStr);
         	var tagInfos=jsonObj.tagInfos
         	var tagInfosName=function(){
        	for (var i = 0; i < jsonObj.tagInfos.length; i++) {
        		return tagInfos[i]['name'];
         	}
         }
         var tagName=tagInfosName();
         var date = new Date(jsonObj.enableDate);
         var timess=date.Format();
         var timeArr=timess.split("-");
         var today=Math.round(new Date().getTime());
         console.log(today);
         var todayArr=new Date(today).Format().split("-");
         for (var i = 0; i < timeArr.length; i++) {
             if (timeArr[0]==todayArr[0]) {
                 if (timeArr[1]==todayArr[1]) {
                     if (timeArr[2]==todayArr[2]) {
                         timess="今天";
                     }else if (todayArr[2]-timeArr[2]<=1) {
                         timess="昨天";
                     }else if (todayArr[2]-timeArr[2]<=1) {
                         timess="前天";
                     }
                 }

             }
         }
         var newDiv=$("<div class='header'>\
                    	<h1>"+jsonObj.title+"</h1>\
                   		 <div class='times'>\
                    		<span>"+timess+"</span>\
                   			<span class='author'>"+jsonObj.principal+"</span>\
                   	 		<span class='sorts'></span>\
                   		 </div>\
                         <img class='img' src='"+jsonObj.image2+"' alt='' />\
                      </div>\
                      <div id='conDetail'>\
                           <article class='content'>"+jsonObj.content+"</article>\
                      </div>")
                     $(".container").append(newDiv)
                     for (var i = 0; i < jsonObj.tagInfos.length; i++) {
						tagInfos[i]['name'];
						var spans=$("<span class='sort'>"+tagInfos[i]['name']+"</span>");
						$(".sorts").append(spans);
					}
                     var heights=document.documentElement.clientHeight;//获取设备的高度
                     $(".container").height(heights-49);

                  }
              };
               // 使用请求对象，创建请求
               request.open("get", "../app2/article/"+id);
               // 发送请求
               request.send();
               /*转发功能*/
               if (show=="YES") {
            	   $(".comment").show();
            	   $(".comment input").on("focus",function(){
            		   $(".erweima").show();
            	   })

               }
              $(".erweima").on("click",function(){
            	  $(".erweima").hide();
              })




    	})
