angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/datefields/angular-schema-form-datefields.html","<div class=\"form-group schema-form-datefields\" ng-class=\"{ \'{{\'schema-form-\' + form.type}}\': true, \'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label>\n    <div class=\"schema-form-datefields-container\">\n        <ng-combo-date-picker \n        schema-validate=\"form\"\n        ng-model=\"$$value$$\" \n        ng-placeholder=\"Year,Month,Date\" \n        ng-required=\"{{form.schema.required}}\" \n        ng-year-order=\"{{form.schema.yearOrder || \'desc\'}}\" \n        ng-timezone=\"{{form.schema.timezone || 0}}\" \n        ng-min-date=\"{{form.schema.minDate}}\" \n        ng-max-date=\"{{form.schema.maxDate}}\" \n        ng-order=\"{{(form.schema.order || \'mdy\')}}\"></ng-combo-date-picker>\n    </div>\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n</div>");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

          var datefields = function(name, schema, options) {
            if (schema.type === 'string' && schema.format === 'datefields') {
              var f = schemaFormProvider.stdFormObj(name, schema, options);
              f.key  = options.path;
              f.type = 'datefields';
              options.lookup[sfPathProvider.stringify(options.path)] = f;
              return f;
            }
          };

          schemaFormProvider.defaults.string.unshift(datefields);
          //Add to the bootstrap directive
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              'datefields',
              'directives/decorators/bootstrap/datefields/angular-schema-form-datefields.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              'datefields',
              'directives/decorators/bootstrap/datefields/angular-schema-form-datefields.html'
          );
        }
    ]);
