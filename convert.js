$(document).ready(function() {
	var ss = [2, 3, 4, 5, 6, 7, 8, 9, 10];
	dd = getRandomInt(9);

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	sv = !ss[dd] ? '1' : ss[dd];
	console.log((sv - 1));
	console.log(dd);

	function e(e) {
		$("#converter_wrapper").before('<div id="error"><span>' + e + '</span><span><a href="">Please try to convert again YouTube video by clicking here</a></span></div><div id="pa_download"><a href="https://ytmp3.mobi/d/" rel="nofollow" target="_blank">Download</a></div>'), $("#converter_wrapper").remove(), $("#error").show(), $("#pa_download").html('<div id="ad"><iframe src="/ad/" width="" height="" scrolling="no"></iframe></div>')
	}
	function r(e, r, o, t) {
		a && $("#dropbox").show(), $("#progress").hide(), $("#file").attr("href", "https://dl.ymcdn.website/" + t + "/" + e), /*"+d[o]+"*/
		$("#download").show(), $("#pa_download").show(), $("#pa_download").html('<div style="height: 60px;position: relative;"><div style="margin: 0;position: absolute;top:15%;left: 50%;-ms-transform:translateX(-50%);transform: translateX(-50%);"><iframe src="/ad/" scrolling="no" style="border:none"></iframe></div></div>')
	}
	var o = !1,
		t = !1,
		a = !1,
		s = ["Please insert a YouTube video URL", "A parameter error occurred. The conversion was cancelled. Please delete your browser cache and try it again.", "A balancer error occurred. The conversion was cancelled. Please refresh the page and try it again.", "The youtube video you try to convert is blacklisted due a DMCA request. Please try to convert another video.", "A conversion error occurred. The conversion was cancelled. Please refresh the page and try it again.", "A download error occurred. The conversion was cancelled. Please refresh the page and try it again.", "The video could not be downloaded because of the age restriction. We are not able to convert or download any videos with age restriction. Please try to convert another video.", "We are sorry. The selected video is longer than 2 hours. We are only able to convert videos with a length up to 2 hours (120 minutes).", "A database error occurred. The conversion was cancelled. Please refresh the page and try it again.", "An error occurred. This video is no longer available due to a copyright claim.", "This video is blocked in your country. Please try again for a proxy entry. (Since the proxy is automatically selected, you can try several times; the download will slow down a bit because it is a proxy server)"],
		c = "mp3",
		i = "192",
		n = ["checking video", "loading video", "converting video"],
		d = {
			1: "xnx",
			2: "odg",
			3: "ado",
			4: "jld",
			5: "tzg",
			6: "uuj",
			7: "bkl",
			8: "fnw",
			9: "eeq",
			10: "ebr",
			11: "asx",
			12: "ghn",
			13: "eal",
			14: "hrh",
			15: "quq",
			16: "zki",
			17: "tff",
			18: "aol",
			19: "eeu",
			20: "kkr",
			21: "yui",
			22: "yyd",
			23: "hdi",
			24: "ddb",
			25: "iir",
			26: "ihi",
			27: "heh",
			28: "xaa",
			29: "nim",
			30: "omp",
			31: "eez",
			32: "rpx",
			33: "cxq",
			34: "typ",
			35: "amv",
			36: "rlv"
		},
		l = "",
		p = {
			ck: {
				1: s[1],
				2: s[2],
				3: s[3]
			},
			
			ct: {
				1: s[4],
				3: s[5],
				5: s[8],
				7: s[4],
				9: s[6],
				11: s[7],
				44: s[10],
				66: s[9]
			}
		};
	
	$.ajax({
		url: "/p.php",
		data: {
			c: 1
		},
		
		dataType: "jsonp",
		success: function(e) {
			e.p
		}
	});
	
	var u = document.createElement("script");
	u.setAttribute("id", "dropboxjs"), u.setAttribute("type", "text/javascript"), u.setAttribute("src", "https://www.dropbox.com/static/api/2/dropins.js"), u.setAttribute("data-app-key", "KEY"), u.onload = function() {
		return "object" == typeof Dropbox && !! Dropbox.isBrowserSupported() && void(a = !0)
	}, document.body.appendChild(u), $("#youtube-link").focus(), $("#dropbox").click(function() {
		$("#dropbox_wrapper").length && $("#dropbox_wrapper").remove(), $("#formats").after('<div id="dropbox_wrapper"></div>');
		var e = {
			cancel: function() {
				$("#dropbox_wrapper").html("Upload to Dropbox failed.")
			},
			
			error: function(e) {
				$("#dropbox_wrapper").html("An error occured. Upload failed.")
			},
			
			progress: function(e) {
				$("#dropbox_wrapper").html('Uploading file to dropbox <i class="fa fa-cog fa-spin"></i>')
			},
			
			success: function() {
				$("#dropbox_wrapper").html("Success! File was saved to your Dropbox.")
			}
		};
		
		return Dropbox.save($("#file").attr("href"), $("#title").html() + "." + c.toLowerCase(), e), !1
	}), $("a#file").click(function() {
		return o && (o = !1), document.location.href = $(this).attr("href"), !1
	}), $(document).ready(function() {
		if (!o) switch ("mp3") {
			case "mp3":
				c = "mp3", $("#quality a").removeClass("disabled"), $("#mp3").css("background-color", "#007cbe"), $("#mp4").css("background-color", "#0087cf");
				break;
			case "mp4":
				c = "mp4", $("#quality a").addClass("disabled"), $("#mp4").css("background-color", "#007cbe"), $("#mp3").css("background-color", "#0087cf")
		}
		return !1
	}), $("#quality a").click(function() {
		if (!o) switch ($(this).attr("id")) {
			case "64":
				i = "64", $("#64").css("background-color", "#c2c2c2"), $("#128, #192, #256, #320").css("background-color", "#d3d3d3");
				break;
			case "128":
				i = "128", $("#128").css("background-color", "#c2c2c2"), $("#64, #192, #256, #320").css("background-color", "#d3d3d3");
				break;
			case "192":
				i = "192", $("#192").css("background-color", "#c2c2c2"), $("#64, #128, #256, #320").css("background-color", "#d3d3d3");
				break;
			case "256":
				i = "256", $("#256").css("background-color", "#c2c2c2"), $("#64, #128, #192, #320").css("background-color", "#d3d3d3");
				break;
			case "320":
				i = "320", $("#320").css("background-color", "#c2c2c2"), $("#64, #128, #192, #256").css("background-color", "#d3d3d3")
		}
		return !1
	}), $("form").submit(function() {
		return h = $("#youtube-link").val(), b = "", -1 < (h = $.trim(h)).indexOf("youtube.com/") ? (b = /v\=[a-zA-Z0-9\-\_]{11}/.exec(h)) && (b = b.toString().substr(2)) : -1 < h.indexOf("youtu.be/") && (b = /\/[a-zA-Z0-9\-\_]{11}/.exec(h)) && (b = b.toString().substr(1)), (l = null != b && 11 == b.length && b) ? (o = !0, $("form").hide(), $("#progress").show(), a = l, d = c, u = i, $.ajax({
			url : "https://d" + (sv - 1) + ".ymcdn.website/check.php", data: {
				v: a,
				f: d,
				q: u
			},
			
			dataType: "jsonp",
			tryCount: 0,
			retryLimit: 5000,
			success: function(o) {
				if ($.each(o, function(e, r) {
					o[e] = "hash" == e || "title" == e ? r : parseInt(r)
				}), 0 < o.error) return e(p.ck[o.error]), $.ajax({
					url: "/error.php",
					async: !1,
					cache: !1,
					data: {
						f: 1,
						e: o.error,
						s: "/",
						v: a,
						h: o.hash
					},
					
					type: "POST"
				}), !1;
				0 < o.title.length ? $("#title").html(o.title) : $("#title").html("no title"), 0 < o.ce ? r(a, 0, o.sid, o.hash) : function o(a, s, c) {
					$.ajax({
						url: "https://d" + (sv - 1) + ".ymcdn.website/progress.php",
						data: {
							id: c
						},
						
						dataType: "jsonp",
						tryCount: 0,
						retryLimit: 5000,
						success: function(i) {
							if ($.each(i, function(e, r) {
								i[e] = "hash" == e ? r : parseInt(r)
							}), 0 < i.error) return e(p.ct[i.error]), $.ajax({
								url: "/error.php",
								async: !1,
								cache: !1,
								data: {
									f: 2,
									e: i.error,
									s: i.sid,
									v: a,
									h: c
								},
								
								type: "POST"
							}), !1;
							if (i.percent != 0) var percent = i.percent + "%";
							else
							var percent = "";
							switch (i.progress) {
								case 0:
									$("#progress span").html(n[i.progress]);
									break;
								case 1:
								case 2:
									$("#progress span").html(n[i.progress] + " " + percent);
									break;
								case 3:
									$("#progress span").html(n[i.progress] + " " + percent), t = !0, r(a, 0, i.sid, c)
							}
							t || window.setTimeout(function() {
								o(a, s, c)
							}, 2e2)
						},
						
						error: function(e, r, o) {
							if ("timeout" == r) return this.tryCount++, this.tryCount <= this.retryLimit ? void $.ajax(this) : void 0;
							if (500 == e.status);
							else if (this.tryCount++, this.tryCount <= this.retryLimit) return void $.ajax(this)
						}
					})
				}(a, d, o.hash)
			},
			
			error: function(e, r, o) {
				if ("timeout" == r) return this.tryCount++, this.tryCount <= this.retryLimit ? void $.ajax(this) : void 0;
				if (500 == e.status);
				else if (this.tryCount++, this.tryCount <= this.retryLimit) return void $.ajax(this)
			}
		}), !1): ($("#youtube-link").val(s[0]), !1);
		var a, d, u, h, b
	})
});

$("#convert").click(function() {
	$("#file").css("display", "block");
});