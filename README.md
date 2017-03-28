# angular-schema-form-datefields
An [angular schema form](https://github.com/json-schema-form/angular-schema-form) - [plugin](https://github.com/json-schema-form/angular-schema-form/blob/development/docs/extending.md) to display datefields. This plugin uses the [Angular Combo Date Picker] (http://jfmdev.github.io/ngComboDatePicker/)

Installation
------------

The easiest way is to install is with bower, this will also include dependencies:

```bash
bower install angular-schema-form-datefields --save
```
Important
---------
As this plugin depends on the ngComboDatePicker, you will need to inject this dependency into your app.js

```
angular
  .module('otesFormsApp', [
    ...
    'ngComboDatePicker'
  ])

```


The datefields add-on adds a new form type, `datefields`.

|   Form Type    |       Becomes       |
|:---------------|:-------------------:|
|   string       |  datefields         | 


| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "datefields"   |   datefields   |

Options
-----------------
maxDate is optional, as current year will be taken. 
Default order is "mdy" (Month Day and Year), dont pass anything if you are ok with this. Options are "ymd","mdy","dmy".
Year Order default is ascending, dont pass anything if you are ok with this.


Schema 
----------

```javascript
scope.schema = {
                    "type" : "object",
                    "properties": {
                        "DOB":{
                            "type":"string",
                            "title":"Date of Birth",
                            "format":"datefields",
                            "minDate": "1940-01-01",
                            "maxDate": "2017-01-01",
                            "order": "dmy",
                            "yearOrder": "desc",
                            "required" : "true",
                            "description": "Provide your date in Day / Month / Year format"
                        }
                    },
                    "required": ["DOB"]
            };
```


## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT).
