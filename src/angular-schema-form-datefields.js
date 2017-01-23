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
