'use strict';

angular.module('com.ngnice.app').directive('appLayout', function appLayout() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/_layout.html',
			controller: 'AppLayoutController as vm'
		};
	})
	.directive('layoutFooter', function LayoutFooter() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/footer.html',
			controller: 'LayoutFooterController as vm'
		};
	})
	.directive('layoutHeader', function LayoutHeader() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/header.html',
			controller: 'LayoutHeaderController as vm'
		};
	})
	.directive('layoutMenu', function LayoutMenu() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/menu.html',
			controller: 'LayoutMenuController as vm'
		};
	})
	// 验证框架的指令
	.directive('bfFieldError', ['$compile', function($compile) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ngModel) {

				var subScope = scope.$new(true);

				subScope.hasError = function() {
					return ngModel.$invalid && ngModel.$dirty;
				};

				subScope.errors = function() {
					return ngModel.$error;
				};
			
				subScope.customMessages = scope.$eval(attrs.bfFieldError);
				var hint = $compile('<ul class="bf-field-error" ng-if="hasError()"><li ng-repeat="(name,wrong) in errors()" nf-if="wrong">{{name | error:customMessages}}</li></ul>')(subScope);

				element.after(hint);
			}
		}
	}])
	// 密码一致验证
	.directive('bfAssertSameAs', function bfAssertSameAs() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ngModel) {
				var isSame = function(value) {
					// 取对照值，通过scope.$eval把attrs.bfAssertSameAs作为一个表达式在当前作用域中求值
					var anotherValue = scope.$eval(attrs.bfAssertSameAs);
					return value === anotherValue;
				};

				// 1.2.x中只能使用$parsers实现验证，1.3.x 中增加了专门的$validators数组，可用更好的方式实现验证
				ngModel.$parsers.push(function(value) {
					
					// 调用$setValidity 设置验证结果，第一个参数就是名字，和$error中的属性一致，但是取值相反，
					// 因为这里表示的是“有效”，而$error中表示的是无效
					ngModel.$setValidity('same', isSame(value));
					
					// 验证通过则返回转换后的值，否则返回undefined
					return isSame(value) ? value : undefined;
				});

				scope.$watch(function() {
					// 对这个函数进行监控，变化时触发下一个函数：变化通知
					return scope.$eval(attrs.bfAssertSameAs);
				}, function() {
					// 变化时重新判断并设置验证结果
					ngModel.$setValidity('same', isSame(ngModel.$modelValue));
				});

			}
		};
	})
	// 图形验证码部分
	.directive('bfCaptcha', function bfCaptcha() {
		return {
			restrict : 'A',
			link : function(scope, element) {
				var changeSrc = function() {
					element.attr("src", 'http://my.jiadekang.com.cn/code.jsp?' + Date.now());
				};
				
				changeSrc();
				
				element.on('click', function(){
					changeSrc();
				});
			}
		};
	});
	


//http://my.jiadekang.com.cn/code.jsp?timestamp=1466320944556