/*
NAME : MJMODAL
DESCRIPTION : MJMODAL is a simple modal in pur javascript & CSS3
AUTHOR : MORGAN JOURDIN
VERSION : 2.0
*/

// GLOBAL VAR
var modal = document.querySelector( '#mjp' );
var btnDisplay = document.querySelector( '.action' );
var btnClose = document.querySelector( '.close' );

//TEST HAS CLASS
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

//CSS3 APPLY DIFFERENT STYLE FOR THE ANIMATION
function css3 (arrayTab, styl,var1, var2, var3) {
	var end;
	for (var t in arrayTab) {
        if (modal.style[t] !== undefined) {
        	switch (styl) {
        		case 'translate3d':
        			end = 'translate3d('+var1+','+var2+','+var3+')';
        		break;

        		case 'transition':
        			end = var1+' '+var2+' '+var3;
        		break;
        	}
            modal.style[t] = end;
            window.getComputedStyle(modal).getPropertyValue(arrayTab[t]);
        }
    }
}

window.onload = function() {

	//VAR
	var x = 0, y = '-110%', z = 0,
		type = 'all', duration = '.2s', effect = 'ease-in-out'

	var transforms = {
        'webkitTransform':'-webkit-transform',
        'OTransform':'-o-transform',
        'msTransform':'-ms-transform',
        'MozTransform':'-moz-transform',
        'transform':'transform'
    }

    var transition = {
        'webkitTransition':'-webkit-transition',
        'OTransition':'-o-transition',
        'msTransition':'-ms-transition',
        'MozTransition':'-moz-transition',
        'transform':'transition'
    }

    //APPLY CSS3
    css3 (transforms, 'translate3d', x, y, z);
    css3 (transition, 'transition', type, duration, effect);

    //ONCLICK
    btnDisplay.addEventListener( 'click', function() {
    	if(!modal.hasClass('modalOn')) {
	    	css3 (transforms, 'translate3d', 0, '10px', 0);
	    	modal.classList.add('modalOn');
	    }
    }, false);

    btnClose.addEventListener( 'click', function() {
    	if(modal.hasClass('modalOn')) {
	    	css3 (transforms, 'translate3d', 0, '-110%', 0);
	    	modal.classList.remove('modalOn');
	    }
    }, false);

}