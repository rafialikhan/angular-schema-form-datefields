# angular-schema-form-datefields
An [angular schema form](https://github.com/json-schema-form/angular-schema-form) - [plugin](https://github.com/json-schema-form/angular-schema-form/blob/development/docs/extending.md) to display datefields. This plugin uses the [Angular Combo Date Picker] (http://jfmdev.github.io/ngComboDatePicker/)

Installation
------------

The easiest way is to install is with bower, this will also include dependencies:
```bash
bower install angular-schema-form-datefields --save
```

The datefields add-on adds a new form type, `datefields`.

|   Form Type    |       Becomes       |
|:---------------|:-------------------:|
|   string       |  datefields         | 


| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "datefields"   |   datefields   |

Example
-----------------
Below is an example. It's written in javascript instead of pure schema and form so the use of the download object is supported.

maxDate is optional, as current year will be taken. 
Default order is "mdy" (Month Day and Year), dont pass anything if you are ok with this. Options are "ymd","mdy","dmy".
Year Order default is ascending, dont pass anything if you are ok with this.

TimeZone and Default Date
--------------------------
Timezone by default is the client's timezone. 
Please pass timezone: "0" the timezone stamp will fall back by 1 day depending on geography and may not validate.
Set default time with setDate.

* setDate requires timezone also to be passed. Also timezone alone cannot be passed without the setDate.
(feature inherited from Angular Combo Date Picker) 

```
                            "setDate": "2000-01-01",
                            "timezone": "0",
````

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
                            "yearOrder": "desc"
                        }
                    },
                    "required": ["DOB"]
            };
```

Note: If you want to pre-populate the datefields, you can pass it through the defaultDate in the schema, make sure you add the timezone when passing default Date. 