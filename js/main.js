/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': 'libs/knockout/knockout-3.4.0',
    'jquery': 'libs/jquery/jquery-2.1.3.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
    'ojs': 'libs/oj/v2.0.2/min',
    'ojL10n': 'libs/oj/v2.0.2/ojL10n',
    'ojtranslations': 'libs/oj/v2.0.2/resources',
    'text': 'libs/require/text',
    'promise': 'libs/es6-promise/promise-1.0.0.min',
    'hammerjs': 'libs/hammer/hammer-2.0.4.min',
    'signals': 'libs/js-signals/signals.min',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    }
  },

// This section configures the i18n plugin. It is merging the Oracle JET built-in translation
// resources with a custom translation file.
// Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
// a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
            }
        }
    }
});


/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback.
 *
 * For a listing of which JET component modules are required for each component, see the specific component
 * demo pages in the JET cookbook.
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojrouter',
  'ojs/ojmodule', 'ojs/ojoffcanvas', 'ojs/ojinputnumber', 'ojs/ojselectcombobox', 'ojs/ojcheckboxset',
        'ojs/ojslider', 'ojs/ojswitch',
        'ojs/ojdatetimepicker', 'ojs/ojinputtext', 'ojs/ojradioset', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource', 'ojs/ojbutton','ojs/ojchart'],
  function(oj, ko, $)
    {
      function StateModel()
      {
        var self = this;

        self.isRequired = ko.observable(true);
        self.fName = ko.observable("fname");
        self.lName = ko.observable("lname");
        
        self.gender = ko.observable("Male");          
        
        
        self.ageValue = ko.observable(0);        
        self.min = ko.observable(0); 
        self.salary = ko.observableArray(["sal0"]);
        
        self.addLine1 = ko.observable("address line1");
        self.addLine2 = ko.observable("address line2");
        self.city = ko.observable("city");
        self.state = ko.observable("state");
        self.email = ko.observable("email");
        self.isChecked = ko.observable();
        self.clickedButton = ko.observable("(None clicked yet)");
        self.buttonClick = function(data, event){
        self.clickedButton(event.currentTarget.id);
        return true;
    }
        var pieSeries = [{name: "Male", items: [42]},
                         {name: "Female", items: [55]}];
        
        self.pieSeriesValue = ko.observableArray(pieSeries);
        /* chart data */
        var barSeries = [{name: "0-10", items: [42]},
                         {name: "10-20", items: [55]},
                         {name: "20-40", items: [36]},
                         {name: "40-60", items: [22]},
                         {name: "Above 60", items: [22]}];
          var barGroups = ["Age"];
         self.barSeriesValue = ko.observableArray(barSeries);
         self.barGroupsValue = ko.observableArray(barGroups);
         
         self.innerRadius = ko.observable(0.5);
        self.centerLabel = ko.observable('Annual Income');
        self.labelStyle = ko.observable('font-size:20px;color:#999999;');

        /* chart data */
        var donutSeries = [{name: "0 - 3 ", items: [42]},
                         {name: "3 - 8 ", items: [55]},
                         {name: "8 - 15 ", items: [36]},
                         {name: "15 - 30 ", items: [22]},
                         {name: "Above 30 ", items: [22]}];
        var donutGroups = ["Group A"];

        self.donutSeriesValue = ko.observableArray(donutSeries);
        self.donutGroupsValue = ko.observableArray(donutGroups);
    } 
      $(document).ready(
        function()
        {
          ko.applyBindings(new StateModel(), 
            document.getElementById('globalBody'));
        }
      );
    });

