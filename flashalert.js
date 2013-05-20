/* ===================================================
 * flashalert.js v0.1
 * https://github.com/Taiters/flashalert.js
 * ===================================================
 * The MIT License (MIT) 
 *
 * Copyright (c) 2013 Daniel Tait
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * ===================================================*/

(function($){
	$.fn.flashAlert = function(options, callback) {

		if(options == 'clear') {
			$("[alertId='"+callback+"']").remove();
			return;
		}

		var settings = $.extend({
			level:         'error', // alert level
			label:         '',      // label to use (label is displayed in <strong>)
			message:       '',      // message to display
			timeout:       0,       // how long to wait before fading out, 0 = permanent
			animationOut: 'hide',   // animation to use when closing the alert.
			animationIn:  'show',   // animation to use when opening the alert.
			alertId:      'alert',  // the alertId, allows multiple alerts with different effects
		},options);

		this.each(function() {
			$(this).prepend(
				'<div alertId="'+settings.alertId+'" class="alert alert-'+settings.level+'">'+
		  		'<button type="button" class="close" data-dismiss="alert">&times;</button>'+
		  		'<strong>'+settings.label+'</strong>'+settings.message+
				'</div>'
			);

		});

		if(settings.animationIn != false) {
			$("[alertId='"+settings.alertId+"']").hide()[settings.animationIn]();
		}

		if(settings.timeout > 0) {
			setTimeout(function(){

				$("[alertId='"+settings.alertId+"']")[settings.animationOut](function(){
					$(this).remove();
				});

				if(typeof(callback) == typeof(Function))
					callback();
			},settings.timeout);
		}
		else {
			if(typeof(callback) == typeof(Function))
				callback();
		}

		return this;

	}
}(jQuery));