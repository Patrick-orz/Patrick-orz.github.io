var visitors_path = window.location.pathname
var visitors_title = $(".post-title h3 a").text()

$(".leancloud_visitors").html('<i class="fa fa-eye"></i><em class="post-meta-item-text">Views </em><i class="waline-pageview-count"></i></span>')
$(".waline-pageview-count").attr('data-path',visitors_path)
// $(".leancloud_visitors").attr('data-flag-title',visitors_title)