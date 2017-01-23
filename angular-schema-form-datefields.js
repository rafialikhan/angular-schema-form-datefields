angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/datefields/angular-schema-form-datefields.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n	<label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n    <div>\n\n		<ng-combo-date-picker ng-model=\"$$value$$\" ng-date=\"{{form.schema.defaultDate}}\" ng-placeholder=\"Year,Month,Date\"\n		ng-min-date=\"{{form.schema.minDate}}\" ng-min-date=\"{{form.schema.maxDate}}\" ng-order=\"{{(form.schema.order || \'mdy\')}}\"></ng-combo-date-picker>\n\n    </div>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || (form.schema.description || form.description)}}</span>\n</div>");}]);
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
