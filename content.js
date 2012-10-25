//alert('Hey!');

$('document').ready(function(){
	console.log("In document ready");
	var trs = $('#table tr:gt(0)');
	$("body").empty();
	
	$('body').append('<div id="navigation-tree"></div>');
	var navigationTree = $('#navigation-tree');
	
	navigationTree.append('<div id="nt-header"></div>');
	var ntHeader = $('#nt-header');
	ntHeader.append('<h1>'+$('#header').text()+'</h1>');

	
	navigationTree.append('<div id="nt-content"></div>');
	var ntContent = $('#nt-content');
	
	trs.each(function(){
		var linkElement = $(this).children('td:eq(0)').html();
		ntContent.append(linkElement);
	});
	
	registerLinks(ntContent);
});

function loadpage(target, link) {
    target.load(link.attr("href"), function(){
        
        var trs = $('#table tr:gt(0)');
        target.empty();
        trs.each(function(){
        	console.log($(this));
    		var linkElement = $(this).children('td:eq(0)').html();
    		target.append(linkElement);
    	});
        registerLinks(target);
    });
}

function registerLinks(content) {

    content.find("a").click(function() {
        loadpage(content, $(this));
        return false;
    });
    console.log("In register links");
}