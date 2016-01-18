/*
NAME : MJMODAL
DESCRIPTION : MJMODAL is a simple modal in pure javascript & CSS3
AUTHOR : MORGAN JOURDIN
VERSION : 2.0
*/

/*
NAME : MJMODAL
DESCRIPTION : MJMODAL is a simple modal in pure javascript & CSS3
AUTHOR : MORGAN JOURDIN
VERSION : 2.0
*/

var mjmodal = function() {
    this.init();
};

mjmodal.prototype = {

    init: function() {
        //Var
        var x = 0, y = '-110%', z = 0,
        type = 'all', duration = '.2s', effect = 'ease-in-out';

        this.sltor =  document.getElementsByTagName('select');
        this.modal = document.querySelector( '#mjp' );
        this.btnDisplay = document.querySelector( '.action' );
        this.btnClose = document.querySelector( '.close' );

        this.transforms = {
            'webkitTransform':'-webkit-transform',
            'OTransform':'-o-transform',
            'msTransform':'-ms-transform',
            'MozTransform':'-moz-transform',
            'transform':'transform'
        };

        this.transition = {
            'webkitTransition':'-webkit-transition',
            'OTransition':'-o-transition',
            'msTransition':'-ms-transition',
            'MozTransition':'-moz-transition',
            'transform':'transition'
        };

        //Add animation
        this.css3(this.transforms, 'translate3d', x, y, z);
        this.css3(this.transition, 'transition', type, duration, effect);

        //Add link css to head
        this.addCss();

        //Animation click
        this.openModal();
        this.closeModal();
    },

    css3: function(arrayTab, styl,var1, var2, var3) {
        var end, modal = this.modal;
        
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
    },

    addCss: function() {
        var link = document.createElement('link');

        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', 'css/mjmodal.css');

        document.getElementsByTagName('head')[0].appendChild(link);
    },

    openModal: function() {
        var _this = this, btnDisplay = _this.btnDisplay, modal = _this.modal, transforms = _this.transforms;

        btnDisplay.addEventListener( 'click', function() {
            if(!modal.classList.contains('modalOn')) {
                _this.css3(transforms, 'translate3d', 0, '10px', 0);
                modal.classList.add('modalOn');
            }
        }, false);
    },

    closeModal: function() {
        var _this = this, btnClose = _this.btnClose, modal = _this.modal, transforms = _this.transforms;

        btnClose.addEventListener( 'click', function() {
            if(modal.classList.contains('modalOn')) {
                _this.css3(transforms, 'translate3d', 0, '-110%', 0);
                modal.classList.remove('modalOn');
            }
        }, false);
    }
}
