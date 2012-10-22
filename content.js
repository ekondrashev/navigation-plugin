//alert('Hey!');

$('document').ready(function(){
	$('body').append('<div id="navigation-tree"></div>');
	var navigationTree = $('#navigation-tree');
	
	
	navigationTree.append('<h1 id="nt-header">'+$('#header').text()+'</h1>');
	$('#table tr:gt(0)').each(function(){
		navigationTree.append($(this).children('td:eq(0)').html());
	});
	
	

});